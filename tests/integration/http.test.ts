import { createHmac } from "node:crypto";
import { createServer, IncomingMessage, Server } from "node:http";
import { AddressInfo } from "node:net";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Health, Templates } from "../../src";
import { TEST_CONFIG } from "../helpers/setup";

describe("Node HTTP transport", () => {
	let server: Server;
	let baseUrl: string;

	beforeEach(async () => {
		vi.stubEnv("NO_PROXY", "127.0.0.1");
		server = createServer();
		await new Promise<void>(resolve => server.listen(0, "127.0.0.1", resolve));
		baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}/api`;
	});

	afterEach(async () => {
		server.closeAllConnections();
		await new Promise<void>((resolve, reject) =>
			server.close(error => (error ? reject(error) : resolve()))
		);
		vi.unstubAllEnvs();
	});

	function expectedSignature(
		request: IncomingMessage,
		body = new URLSearchParams()
	): string {
		const params: Record<string, string> = {
			"X-MW-PUBLIC-KEY": TEST_CONFIG.publicKey,
			"X-MW-TIMESTAMP": String(request.headers["x-mw-timestamp"]),
			"X-MW-REMOTE-ADDR": ""
		};
		const headers = new URLSearchParams(
			Object.keys(params)
				.sort()
				.map(key => [key, params[key]])
		).toString();
		// MailWizz sorts top-level keys, preserving nested form-field order.
		const sorted = body.size ? `${headers}&${body}` : headers;
		const url = new URL(request.url!, baseUrl).href;
		return createHmac("sha1", TEST_CONFIG.secret)
			.update(
				`${request.method} ${url}${url.includes("?") ? "&" : "?"}${sorted}`
			)
			.digest("hex");
	}

	it("sends a signed GET and custom User-Agent through the real adapter", async () => {
		const received = new Promise<IncomingMessage>(resolve => {
			server.once("request", (request, response) => {
				response.setHeader("Content-Type", "application/json");
				response.end(JSON.stringify({ status: "success" }));
				resolve(request);
			});
		});
		const client = new Health({
			...TEST_CONFIG,
			baseUrl: `${baseUrl}/`,
			timeout: 2000,
			userAgent: "ConsumerSmoke/1.0"
		});

		await expect(client.ping()).resolves.toEqual({ status: "success" });
		const request = await received;
		expect(request.url).toBe("/api/lists?page=1&per_page=1");
		expect(request.headers["user-agent"]).toBe("ConsumerSmoke/1.0");
		expect(request.headers["x-http-method-override"]).toBe("GET");
		expect(request.headers["x-mw-signature"]).toBe(expectedSignature(request));
	});

	it("preserves signed form data over a real POST", async () => {
		const received = new Promise<{
			request: IncomingMessage;
			body: URLSearchParams;
		}>(resolve => {
			server.once("request", (request, response) => {
				let body = "";
				request.setEncoding("utf8");
				request.on("data", chunk => (body += chunk));
				request.on("end", () => {
					response.setHeader("Content-Type", "application/json");
					response.end(JSON.stringify({ status: "success" }));
					resolve({ request, body: new URLSearchParams(body) });
				});
			});
		});
		const client = new Templates({ ...TEST_CONFIG, baseUrl, timeout: 2000 });

		await expect(
			client.create({ name: "Test & template", content: "<p>Hello</p>" })
		).resolves.toEqual({ status: "success" });
		const { request, body } = await received;
		expect(request.method).toBe("POST");
		expect(request.url).toBe("/api/templates");
		expect(request.headers["content-type"]).toBe(
			"application/x-www-form-urlencoded"
		);
		expect(body.get("template[name]")).toBe("Test & template");
		expect(body.get("template[content]")).toBe(
			Buffer.from("<p>Hello</p>").toString("base64")
		);
		expect(request.headers["x-mw-signature"]).toBe(
			expectedSignature(request, body)
		);
	});

	it("rejects a stalled response using the configured timeout", async () => {
		server.on("request", () => {});
		const client = new Health({ ...TEST_CONFIG, baseUrl, timeout: 50 });

		await expect(client.ping()).rejects.toMatchObject({ code: "ECONNABORTED" });
	});

	it("preserves API error payloads from the real adapter", async () => {
		const error = { status: "error", error: "Fixture rejection" };
		server.once("request", (_request, response) => {
			response.writeHead(400, { "Content-Type": "application/json" });
			response.end(JSON.stringify(error));
		});
		const client = new Health({ ...TEST_CONFIG, baseUrl, timeout: 2000 });

		await expect(client.ping()).rejects.toEqual(error);
	});
});
