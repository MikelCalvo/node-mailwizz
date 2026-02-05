import Request from "./Request";
import { Config } from "./types/Config";
import { HealthPingResponse } from "./types/Health";

const path: string = "/lists";

class Health extends Request {
	/**
	 * @description Creates an instance of Health.
	 * @memberof Health
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Lightweight read-only ping using lists endpoint.
	 * @returns {Promise<HealthPingResponse>}
	 * @memberof Health
	 */
	ping(): Promise<HealthPingResponse> {
		this.method = Request.Type.GET;
		this.url = path;
		this.data = {
			page: 1,
			per_page: 1
		};

		return this.send();
	}
}

export default Health;
