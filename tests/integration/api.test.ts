import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { TEST_CONFIG } from "../helpers/setup";
import { mockResponses } from "../fixtures/responses";

import Campaigns from "../../src/Campaigns";
import Lists from "../../src/Lists";
import ListSubscribers from "../../src/ListSubscribers";
import ListFields from "../../src/ListFields";
import ListSegments from "../../src/ListSegments";
import CampaignBounces from "../../src/CampaignBounces";
import TransactionEmail from "../../src/TransactionEmail";
import Customers from "../../src/Customers";

/**
 * Integration tests - only test behavior that has actual logic:
 * - Data transformation (base64, nested objects, arrays)
 * - Conditional logic (optional fields, branching)
 * - Validation
 *
 * NOT testing simple CRUD that just passes data through.
 */
describe("API Integration Tests", () => {
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

	describe("Campaigns", () => {
		it("create structures nested campaign[template] and campaign[options] objects", async () => {
			mock.onPost(/\/campaigns$/).reply(config => {
				// Verify the complex nested structure is correctly serialized
				expect(config.data).toContain("campaign%5Bname%5D");
				expect(config.data).toContain(
					"campaign%5Btemplate%5D%5Btemplate_uid%5D"
				);
				expect(config.data).toContain(
					"campaign%5Boptions%5D%5Burl_tracking%5D"
				);
				expect(config.data).toContain(
					"campaign%5Btemplate%5D%5Binline_css%5D=yes"
				);
				return [200, mockResponses.created("camp123")];
			});

			const campaigns = new Campaigns(TEST_CONFIG);
			await campaigns.create({
				name: "Test",
				fromName: "Sender",
				fromEmail: "sender@example.com",
				subject: "Subject",
				replyTo: "reply@example.com",
				sendAt: "2024-12-01 10:00:00",
				listId: "list123",
				templateId: "tpl123"
			});
		});

		it("update only sends provided fields, not the full structure", async () => {
			mock.onPut(/\/campaigns\/[\w]+$/).reply(config => {
				expect(config.data).toContain("campaign%5Bname%5D=Updated");
				// Should NOT contain template when templateId not provided
				expect(config.data).not.toContain("template_uid");
				return [200, mockResponses.success];
			});

			const campaigns = new Campaigns(TEST_CONFIG);
			await campaigns.update({ campaignUid: "abc123", name: "Updated" });
		});
	});

	describe("Lists", () => {
		it("create structures general, defaults, notifications and company as nested objects", async () => {
			mock.onPost(/\/lists$/).reply(config => {
				// Verify the 4 nested sections
				expect(config.data).toContain("general%5Bname%5D");
				expect(config.data).toContain("general%5Bdescription%5D");
				expect(config.data).toContain("defaults%5Bfrom_email%5D");
				expect(config.data).toContain("notifications%5Bsubscribe%5D");
				expect(config.data).toContain("company%5Bname%5D");
				expect(config.data).toContain("company%5Baddress_1%5D");
				return [200, mockResponses.created("list123")];
			});

			const lists = new Lists(TEST_CONFIG);
			await lists.create({
				name: "Test List",
				description: "Description",
				fromName: "Sender",
				fromEmail: "sender@example.com",
				replyTo: "reply@example.com",
				companyName: "Company",
				companyCountry: "US",
				companyZone: "CA",
				companyAddress1: "123 Main St"
			});
		});
	});

	describe("ListSubscribers", () => {
		it("bulk serializes subscribers array with bracket notation", async () => {
			mock.onPost(/\/lists\/[\w]+\/subscribers\/bulk/).reply(config => {
				// Verify array serialization: subscribers[0][EMAIL], subscribers[1][EMAIL]
				expect(config.data).toContain(
					"subscribers%5B0%5D%5BEMAIL%5D=a%40test.com"
				);
				expect(config.data).toContain(
					"subscribers%5B1%5D%5BEMAIL%5D=b%40test.com"
				);
				return [200, mockResponses.success];
			});

			const subscribers = new ListSubscribers(TEST_CONFIG);
			await subscribers.bulk({
				listUid: "list123",
				subscribers: [{ EMAIL: "a@test.com" }, { EMAIL: "b@test.com" }]
			});
		});
	});

	describe("TransactionEmail", () => {
		it("create base64-encodes body and plainText fields", async () => {
			mock.onPost(/\/transactional-emails$/).reply(config => {
				// Extract and verify base64 encoding
				const bodyMatch = config.data.match(/email%5Bbody%5D=([^&]+)/);
				const plainMatch = config.data.match(/email%5Bplain_text%5D=([^&]+)/);

				const decodedBody = Buffer.from(
					decodeURIComponent(bodyMatch![1]),
					"base64"
				).toString();
				const decodedPlain = Buffer.from(
					decodeURIComponent(plainMatch![1]),
					"base64"
				).toString();

				expect(decodedBody).toBe("<h1>HTML</h1>");
				expect(decodedPlain).toBe("Plain text");
				return [200, mockResponses.created("email123")];
			});

			const email = new TransactionEmail(TEST_CONFIG);
			await email.create({
				toName: "To",
				toEmail: "to@test.com",
				fromName: "From",
				subject: "Subject",
				body: "<h1>HTML</h1>",
				plainText: "Plain text",
				sendAt: "2024-12-01 10:00:00"
			});
		});

		it("create rejects with ParamInvalid when required fields missing", async () => {
			const email = new TransactionEmail(TEST_CONFIG);

			await expect(
				email.create({
					toName: "To",
					toEmail: "", // empty = missing
					fromName: "From",
					subject: "Subject",
					body: "Body",
					sendAt: "2024-12-01 10:00:00"
				})
			).rejects.toThrow("ParamInvalid");
		});
	});

	describe("CampaignBounces", () => {
		it("createBounce maps bounceType to bounce_type field", async () => {
			mock.onPost(/\/campaigns\/[\w]+\/bounces/).reply(config => {
				expect(config.data).toContain("bounce_type=hard");
				expect(config.data).toContain("subscriber_uid=sub123");
				expect(config.data).toContain("message=Mailbox%20not%20found"); // %20 = space
				return [200, mockResponses.created("bounce123")];
			});

			const bounces = new CampaignBounces(TEST_CONFIG);
			await bounces.createBounce({
				campaignUid: "camp123",
				message: "Mailbox not found",
				bounceType: "hard",
				subscriberUid: "sub123"
			});
		});
	});

	describe("ListFields", () => {
		it("create structures type as nested object with identifier", async () => {
			mock.onPost(/\/lists\/[\w]+\/fields/).reply(config => {
				// type must be { identifier: "text" }, not just "text"
				expect(config.data).toContain("field%5Btype%5D%5Bidentifier%5D=text");
				expect(config.data).toContain("field%5Blabel%5D=First%20Name"); // %20 = space
				expect(config.data).toContain("field%5Btag%5D=FNAME");
				return [200, mockResponses.created("field123")];
			});

			const fields = new ListFields(TEST_CONFIG);
			await fields.create({
				listUid: "list123",
				type: "text",
				label: "First Name",
				tag: "FNAME"
			});
		});
	});

	describe("ListSegments", () => {
		it("create structures segment with conditions array", async () => {
			mock.onPost(/\/lists\/[\w]+\/segments/).reply(config => {
				expect(config.data).toContain("segment%5Bname%5D=Active");
				expect(config.data).toContain("segment%5Boperator_match%5D=any");
				// conditions[0][field_id], conditions[0][operator], conditions[0][value]
				expect(config.data).toContain(
					"segment%5Bconditions%5D%5B0%5D%5Bfield_id%5D=status"
				);
				expect(config.data).toContain(
					"segment%5Bconditions%5D%5B0%5D%5Boperator%5D=is"
				);
				expect(config.data).toContain(
					"segment%5Bconditions%5D%5B0%5D%5Bvalue%5D=active"
				);
				return [200, mockResponses.created("seg123")];
			});

			const segments = new ListSegments(TEST_CONFIG);
			await segments.create({
				listUid: "list123",
				name: "Active",
				operatorMatch: "any",
				conditions: [{ field_id: "status", operator: "is", value: "active" }]
			});
		});
	});

	describe("Customers", () => {
		it("create with company structures nested customer[company] object", async () => {
			mock.onPost(/\/customers$/).reply(config => {
				expect(config.data).toContain("customer%5Bfirst_name%5D=John");
				expect(config.data).toContain("customer%5Bpassword%5D");
				expect(config.data).toContain("customer%5Bconfirm_password%5D");
				// Nested company
				expect(config.data).toContain("customer%5Bcompany%5D%5Bname%5D=Acme");
				expect(config.data).toContain("customer%5Bcompany%5D%5Bcountry%5D=US");
				return [200, mockResponses.created("cust123")];
			});

			const customers = new Customers(TEST_CONFIG);
			await customers.create({
				firstName: "John",
				lastName: "Doe",
				email: "john@test.com",
				password: "pass123",
				company: { name: "Acme", country: "US", zone: "CA", address1: "123 St" }
			});
		});

		it("create without company does not include company field", async () => {
			mock.onPost(/\/customers$/).reply(config => {
				expect(config.data).toContain("customer%5Bemail%5D");
				expect(config.data).not.toContain("company");
				return [200, mockResponses.created("cust123")];
			});

			const customers = new Customers(TEST_CONFIG);
			await customers.create({
				firstName: "Jane",
				lastName: "Doe",
				email: "jane@test.com",
				password: "pass123"
			});
		});
	});
});
