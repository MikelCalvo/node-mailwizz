import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Request from "../../src/Request";
import { TEST_CONFIG } from "../helpers/setup";

describe("Request", () => {
	let mock: MockAdapter;

	beforeEach(() => {
		mock = new MockAdapter(axios);
		vi.useFakeTimers();
		vi.setSystemTime(new Date("2024-01-15T12:00:00Z"));
	});

	afterEach(() => {
		mock.restore();
		vi.useRealTimers();
	});

	describe("HTTP method handling", () => {
		it("GET sends data as query params", async () => {
			mock.onGet(/.*/).reply(config => {
				expect(config.params).toEqual({ page: 1, per_page: 10 });
				expect(config.data).toBeUndefined();
				return [200, { status: "success" }];
			});

			const request = new Request(TEST_CONFIG);
			request.method = Request.Type.GET;
			request.url = "/test";
			request.data = { page: 1, per_page: 10 };

			await request.send();
		});

		it("POST sends data as form-urlencoded body", async () => {
			mock.onPost(/.*/).reply(config => {
				expect(config.headers?.["Content-Type"]).toBe(
					"application/x-www-form-urlencoded"
				);
				expect(config.data).toContain("name=test");
				return [200, { status: "success" }];
			});

			const request = new Request(TEST_CONFIG);
			request.method = Request.Type.POST;
			request.url = "/test";
			request.data = { name: "test" };

			await request.send();
		});

		it("PUT/DELETE set X-HTTP-Method-Override header", async () => {
			mock.onPut(/.*/).reply(config => {
				expect(config.headers?.["X-HTTP-Method-Override"]).toBe("PUT");
				return [200, { status: "success" }];
			});

			const request = new Request(TEST_CONFIG);
			request.method = Request.Type.PUT;
			request.url = "/test";
			request.data = {};

			await request.send();
		});
	});

	describe("Request signing", () => {
		it("includes signature header with valid HMAC-SHA1 format", async () => {
			mock.onGet(/.*/).reply(config => {
				expect(config.headers?.["X-MW-SIGNATURE"]).toMatch(/^[a-f0-9]{40}$/);
				expect(config.headers?.["X-MW-PUBLIC-KEY"]).toBe(TEST_CONFIG.publicKey);
				expect(config.headers?.["X-MW-TIMESTAMP"]).toBeDefined();
				return [200, { status: "success" }];
			});

			const request = new Request(TEST_CONFIG);
			request.method = Request.Type.GET;
			request.url = "/test";
			request.data = {};

			await request.send();
		});
	});

	describe("Error handling", () => {
		it("HTTP errors throw response.data, network errors throw original error", async () => {
			const errorData = { status: "error", error: "Not found" };
			mock.onGet(/\/http-error/).reply(404, errorData);
			mock.onGet(/\/network-error/).networkError();

			const httpRequest = new Request(TEST_CONFIG);
			httpRequest.method = Request.Type.GET;
			httpRequest.url = "/http-error";
			httpRequest.data = {};

			const networkRequest = new Request(TEST_CONFIG);
			networkRequest.method = Request.Type.GET;
			networkRequest.url = "/network-error";
			networkRequest.data = {};

			await expect(httpRequest.send()).rejects.toEqual(errorData);
			await expect(networkRequest.send()).rejects.toThrow();
		});
	});
});
