import Request from "./Request";
import { Config } from "./types/Config";
import {
	TrackOpenParams,
	TrackOpenResponse,
	TrackClickParams,
	TrackClickResponse,
	TrackUnsubscribeParams,
	TrackUnsubscribeResponse
} from "./types/CampaignTracking";

class CampaignTracking extends Request {
	/**
	 * @description Creates an instance of CampaignTracking.
	 * @see https://api-docs.mailwizz.com/#campaigns
	 * @memberof CampaignTracking
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Track campaign open for a subscriber
	 * @param {TrackOpenParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @returns {Promise<TrackOpenResponse>} - Promise of the response
	 * @memberof CampaignTracking
	 * @see https://api-docs.mailwizz.com/#track-campaign-open
	 */
	trackOpen({
		campaignUid,
		subscriberUid
	}: TrackOpenParams): Promise<TrackOpenResponse> {
		this.method = Request.Type.GET;
		this.url = `/campaigns/${campaignUid}/track-opening/${subscriberUid}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Track URL click for a subscriber
	 * @param {TrackClickParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @param {string} params.hash - URL hash
	 * @returns {Promise<TrackClickResponse>} - Promise of the response
	 * @memberof CampaignTracking
	 * @see https://api-docs.mailwizz.com/#track-campaign-url-click
	 */
	trackClick({
		campaignUid,
		subscriberUid,
		hash
	}: TrackClickParams): Promise<TrackClickResponse> {
		this.method = Request.Type.GET;
		this.url = `/campaigns/${campaignUid}/track-url/${subscriberUid}/${hash}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Track unsubscribe for a subscriber from a campaign
	 * @param {TrackUnsubscribeParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @param {string} params.campaignUid - Campaign UID
	 * @returns {Promise<TrackUnsubscribeResponse>} - Promise of the response
	 * @memberof CampaignTracking
	 * @see https://api-docs.mailwizz.com/#track-campaign-unsubscribe
	 */
	trackUnsubscribe({
		listUid,
		subscriberUid,
		campaignUid
	}: TrackUnsubscribeParams): Promise<TrackUnsubscribeResponse> {
		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}/unsubscribe/${campaignUid}`;
		this.data = {};

		return this.send();
	}
}

export default CampaignTracking;
