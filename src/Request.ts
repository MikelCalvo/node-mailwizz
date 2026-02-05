import METHOD from "./utils/data";
import { ksort, serialize, hmac_sha } from "./utils/encrypt";
import axios, { AxiosRequestConfig } from "axios";
import { Config } from "./types/Config";

class Request {
	private config: Config;
	url: string | null;
	method: METHOD | null;
	data: Record<string, any>;
	private query: Record<string, any>;
	private header: Record<string, any>;
	private axiosInstance: any;
	private extraHeaders: Record<string, any>;

	constructor({ publicKey, secret, baseUrl, timeout, userAgent }: Config) {
		const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");
		this.config = {
			publicKey,
			secret,
			baseUrl: normalizedBaseUrl,
			timeout,
			userAgent
		};
		this.url = null;
		this.method = null;
		this.data = {};
		this.query = {};
		this.header = this.__buildHeaders();
		this.extraHeaders = {};
		if (userAgent) {
			this.extraHeaders["User-Agent"] = userAgent;
		}
		this.axiosInstance = axios.create({
			baseURL: normalizedBaseUrl,
			timeout
		});
	}

	static get Type(): typeof METHOD {
		return METHOD;
	}

	async send(): Promise<any> {
		this.__resetHeaders();
		if (this.data instanceof Object && this.method === METHOD.GET) {
			this.query = this.data;
			this.data = {};
		}

		this.__sign();
		this.__setXHttpMethodOverride();

		const options: AxiosRequestConfig = {
			method: this.method || "GET",
			url: this.url || "",
			headers: {
				...this.header,
				...this.extraHeaders
			}
		};

		if (this.method === METHOD.GET) {
			options.params = this.query;
			options.paramsSerializer = (params: Record<string, any>) =>
				serialize(params);
		} else {
			// Use serialize() instead of qs.stringify() to match signature format
			// The signature is computed using serialize() which encodes spaces as '+'
			// Using qs.stringify() would encode spaces as '%20', causing signature mismatch
			options.data = serialize(this.data);
			options.headers = {
				...options.headers,
				"Content-Type": "application/x-www-form-urlencoded"
			};
		}

		try {
			const response = await this.axiosInstance(options);
			return response.data;
		} catch (err: any) {
			if (!err.response) throw err;
			if (!err.response.data) throw err.response;
			throw err.response.data;
		}
	}

	private __setXHttpMethodOverride(): void {
		this.header["X-HTTP-Method-Override"] = this.method;
	}

	private __buildHeaders(): Record<string, string> {
		return {
			"X-MW-PUBLIC-KEY": this.config.publicKey,
			"X-MW-TIMESTAMP": Math.floor(Date.now() / 1000).toString(),
			"X-MW-REMOTE-ADDR": ""
		};
	}

	private __resetHeaders(): void {
		this.header = this.__buildHeaders();
	}

	__sign(): void {
		const {
			header,
			config: { secret: privateKey },
			method,
			data,
			query
		} = this;
		const paramPost = method === METHOD.GET ? {} : data;
		const paramGet = method === METHOD.GET ? query : {};

		let params = Object.assign({}, header, paramPost);
		params = ksort(params);

		let apiUrl = this.config.baseUrl + this.url;
		let separator = "?";

		if (method === METHOD.GET && Object.keys(paramGet).length > 0) {
			apiUrl += "?" + serialize(paramGet);
			separator = "&";
		}

		const signatureString = `${method} ${apiUrl}${separator}${serialize(
			params
		)}`;
		const hash = hmac_sha(privateKey, signatureString);

		this.header["X-MW-SIGNATURE"] = hash;
	}
}

export default Request;
