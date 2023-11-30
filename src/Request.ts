import METHOD from "./utils/data";
import { stringify } from "querystring";
import { ksort, serialize, hmac_sha } from "./utils/encrypt";
import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { Config } from "./types/Config";

class Request {
	private config: Config;
	url: string | null;
	method: METHOD | null;
	data: Record<string, any>;
	private query: Record<string, any>;
	private header: Record<string, any>;
	private axiosInstance: any;

	constructor({ publicKey, secret, baseUrl }: Config) {
		this.config = { publicKey, secret, baseUrl };
		this.url = null;
		this.method = null;
		this.data = {};
		this.query = {};
		this.header = {
			"X-MW-PUBLIC-KEY": publicKey,
			"X-MW-TIMESTAMP": Math.floor(Date.now() / 1000).toString(),
			"X-MW-REMOTE-ADDR": ""
		};
		this.axiosInstance = axios.create({ baseURL: baseUrl });
	}

	static get Type(): typeof METHOD {
		return METHOD;
	}

	async send(): Promise<any> {
		if (this.data instanceof Object && this.method === METHOD.GET) {
			this.query = this.data;
			this.data = {};
		}

		this.__sign();
		this.__setXHttpMethodOverride();

		const options: AxiosRequestConfig = {
			method: this.method || "GET",
			url: this.url || "",
			headers: this.header
		};

		if (this.method === METHOD.GET) {
			options.params = this.query;
		} else {
			options.data = qs.stringify(this.data);
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

	__sign(): void {
		const {
			header,
			config: { secret: privateKey },
			method,
			data,
			query
		} = this;
		const paramPost = method === METHOD.GET ? {} : data;
		const paramGet = method === METHOD.GET ? data : query;

		let params = Object.assign({}, header, paramPost);
		params = ksort(params);

		let apiUrl = this.config.baseUrl + this.url;
		let separator = "?";

		if (method === METHOD.GET && Object.keys(paramGet).length > 0) {
			apiUrl += "?" + stringify(paramGet);
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
