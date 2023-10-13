/**
 * Encrypt
 */

const createHmac = require("crypto").createHmac;

function hmac_sha(key: string, content: string): string {
	return createHmac("sha1", key).update(content).digest("hex");
}

function base64Encode(string: string): string {
	return Buffer.from(string).toString("base64");
}

function serialize(obj: Record<string, any>, prefix?: string): string {
	let str = [],
		p;
	for (p in obj) {
		if (obj.hasOwnProperty(p)) {
			let k = prefix ? prefix + "[" + p + "]" : p,
				v = obj[p];
			str.push(
				v !== null && typeof v === "object"
					? serialize(v, k)
					: encodeURIComponent(k) + "=" + encodeURIComponent(v)
			);
		}
	}
	return str
		.join("&")
		.replace(/%20/g, "+")
		.replace(/!/g, "%21")
		.replace(/'/g, "%27");
}

function ksort(obj: Record<string, any>): Record<string, any> {
	let ordered: Record<string, any> = {};
	Object.keys(obj)
		.sort()
		.forEach(function (key) {
			ordered[key] = obj[key];
		});
	return ordered;
}

export default {
	hmac_sha,
	base64Encode,
	serialize,
	ksort,
};
