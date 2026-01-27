import Request from "./Request";
import { Config } from "./types/Config";
import {
	GetBouncesParams,
	GetBouncesResponse,
	CreateBounceParams,
	CreateBounceResponse
} from "./types/CampaignBounces";

class CampaignBounces extends Request {
	/**
	 * @description Creates an instance of CampaignBounces.
	 * @see https://api-docs.mailwizz.com/#campaigns-bounces
	 * @memberof CampaignBounces
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Get all bounces for a campaign
	 * @param {GetBouncesParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @param {number} [params.page] - Page number
	 * @param {number} [params.per_page] - Items per page
	 * @returns {Promise<GetBouncesResponse>} - Promise of the response
	 * @memberof CampaignBounces
	 * @see https://api-docs.mailwizz.com/#get-all-campaign-bounces
	 */
	getBounces({
		campaignUid,
		page,
		per_page
	}: GetBouncesParams): Promise<GetBouncesResponse> {
		this.method = Request.Type.GET;
		this.url = `/campaigns/${campaignUid}/bounces`;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Create a bounce record for a campaign
	 * @param {CreateBounceParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @param {string} params.message - Bounce message
	 * @param {BounceType} params.bounceType - Bounce type (hard/soft/internal)
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @returns {Promise<CreateBounceResponse>} - Promise of the response
	 * @memberof CampaignBounces
	 * @see https://api-docs.mailwizz.com/#create-a-campaign-bounce
	 */
	createBounce({
		campaignUid,
		message,
		bounceType,
		subscriberUid
	}: CreateBounceParams): Promise<CreateBounceResponse> {
		this.method = Request.Type.POST;
		this.url = `/campaigns/${campaignUid}/bounces`;
		this.data = {
			message: message,
			bounce_type: bounceType,
			subscriber_uid: subscriberUid
		};

		return this.send();
	}
}

export default CampaignBounces;
