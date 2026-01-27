import { describe, it, expect } from "vitest";
import {
	hmac_sha,
	base64Encode,
	serialize,
	ksort
} from "../../src/utils/encrypt";

describe("hmac_sha", () => {
	it("generates valid 40-character hex hash", () => {
		const hash = hmac_sha("secret", "message");
		expect(hash).toMatch(/^[a-f0-9]{40}$/);
	});
});

describe("base64Encode", () => {
	it("encodes string to base64", () => {
		expect(base64Encode("hello")).toBe("aGVsbG8=");
	});

	it("handles empty string", () => {
		expect(base64Encode("")).toBe("");
	});

	it("handles unicode characters", () => {
		const encoded = base64Encode("Hello éè");
		expect(Buffer.from(encoded, "base64").toString()).toBe("Hello éè");
	});
});

describe("serialize", () => {
	it("serializes flat object to query string", () => {
		const result = serialize({ a: "1", b: "2" });
		expect(result).toBe("a=1&b=2");
	});

	it("uses bracket notation for nested objects", () => {
		const result = serialize({ parent: { child: "value" } });
		expect(result).toBe("parent%5Bchild%5D=value");
	});

	it("replaces spaces with + and encodes special characters", () => {
		const result = serialize({ text: "it's here!" });
		expect(result).toContain("+");
		expect(result).toContain("%27"); // '
		expect(result).toContain("%21"); // !
	});
});

describe("ksort", () => {
	it("sorts object keys alphabetically without mutating original", () => {
		const original = { c: 3, a: 1, b: 2 };
		const sorted = ksort(original);

		expect(Object.keys(sorted)).toEqual(["a", "b", "c"]);
		expect(Object.keys(original)).toEqual(["c", "a", "b"]); // not mutated
	});
});
