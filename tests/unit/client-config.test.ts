import { afterEach, beforeEach, describe, expect, it } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as clients from "../../src";
import Request from "../../src/Request";
import { TEST_CONFIG } from "../helpers/setup";

const clientCases = [
	["CampaignBounces", clients.CampaignBounces],
	["CampaignTracking", clients.CampaignTracking],
	["Campaigns", clients.Campaigns],
	["Countries", clients.Countries],
	["Customers", clients.Customers],
	["Health", clients.Health],
	["ListFields", clients.ListFields],
	["ListSegments", clients.ListSegments],
	["ListSubscribers", clients.ListSubscribers],
	["Lists", clients.Lists],
	["Templates", clients.Templates],
	["TransactionEmail", clients.TransactionEmail]
] as const;

describe.each(clientCases)("%s request configuration", (_name, Client) => {
	let mock: MockAdapter;

	beforeEach(() => {
		mock = new MockAdapter(axios);
		mock.onGet("/config-check").reply(200, { status: "success" });
	});

	afterEach(() => {
		mock.restore();
	});

	it("forwards timeout and User-Agent to outgoing requests", async () => {
		const client = new Client({
			...TEST_CONFIG,
			timeout: 12345,
			userAgent: "CustomClient/1.0"
		});
		client.method = Request.Type.GET;
		client.url = "/config-check";

		await expect(client.send()).resolves.toEqual({ status: "success" });

		expect(mock.history.get).toHaveLength(1);
		expect(mock.history.get[0].timeout).toBe(12345);
		expect(mock.history.get[0].headers?.["User-Agent"]).toBe(
			"CustomClient/1.0"
		);
	});

	it("preserves the defaults when optional settings are omitted", async () => {
		const client = new Client(TEST_CONFIG);
		client.method = Request.Type.GET;
		client.url = "/config-check";

		await client.send();

		expect(mock.history.get).toHaveLength(1);
		expect(mock.history.get[0].timeout).toBe(0);
		expect(mock.history.get[0].headers?.["User-Agent"]).toBeUndefined();
	});

	it("preserves an explicit zero timeout", async () => {
		const client = new Client({ ...TEST_CONFIG, timeout: 0 });
		client.method = Request.Type.GET;
		client.url = "/config-check";

		await client.send();

		expect(mock.history.get).toHaveLength(1);
		expect(mock.history.get[0].timeout).toBe(0);
	});
});
