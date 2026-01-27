import {
	CreateCampaignParams,
	CreateCampaignResponse,
	CreateCampaignType,
	GetCampaignsParams,
	GetCampaignsResponse,
	GetCampaignParams,
	GetCampaignResponse,
	UpdateCampaignParams,
	UpdateCampaignResponse,
	CopyCampaignParams,
	CopyCampaignResponse,
	PauseUnpauseCampaignParams,
	PauseUnpauseCampaignResponse,
	MarkSentCampaignParams,
	MarkSentCampaignResponse,
	DeleteCampaignParams,
	DeleteCampaignResponse,
	GetCampaignStatsParams,
	GetCampaignStatsResponse
} from "./types/Campaigns";
import Request from "./Request";
import { Config } from "./types/Config";

const path: string = "/campaigns";

class Campaigns extends Request {
	/**
	 * @description Creates an instance of Campaigns.
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#campaigns
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Create a campaign
	 * @param {CreateCampaignParams} params - Info of the campaign
	 * @param {string} params.name - Name of the campaign
	 * @param {CreateCampaignType} params.type - Type of the campaign
	 * @param {string} params.fromName - From name of the campaign
	 * @param {string} params.fromEmail - From email of the campaign
	 * @param {string} params.subject - Subject of the campaign
	 * @param {string} params.replyTo - Reply to of the campaign
	 * @param {string} params.sendAt - Send at of the campaign (YYYY-MM-DD hh:mm:ss)
	 * @param {string} params.listId - List ID of the campaign
	 * @param {string} params.segmentId - Segment ID of the campaign
	 * @param {string} params.urlTracking - URL tracking of the campaign
	 * @param {string} params.templateId - Template ID of the campaign
	 * @returns {Promise<CreateCampaignResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#create-a-campaign
	 */
	create({
		name,
		type,
		fromName,
		fromEmail,
		subject,
		replyTo,
		sendAt,
		listId,
		segmentId,
		urlTracking,
		templateId
	}: CreateCampaignParams): Promise<CreateCampaignResponse> {
		let postData = {
			name: name, //required
			type: type || CreateCampaignType.REGULAR, //optional: regular or autoresponder
			from_name: fromName, //required
			from_email: fromEmail, //required
			subject: subject, //required
			reply_to: replyTo, //required
			send_at: sendAt, //required YYYY-MM-DD hh:mm:ss
			list_uid: listId, //required
			segment_uid: segmentId || "", //optional

			//optional block, defaults are shown
			options: {
				url_tracking: urlTracking || "no",
				json_feed: "no",
				xml_feed: "no",
				plain_text_email: "yes",
				email_stats: "" //a valid email address where we should send the stats after campaign done
			},

			//required block, archive or template_uid or content
			template: {
				template_uid: templateId, //required
				archive: "",
				content: "",
				inline_css: "yes",
				plain_text: "",
				auto_plain_text: "yes"
			}
		};

		this.method = Request.Type.POST;
		this.url = path;
		this.data = {
			campaign: postData
		};

		return this.send();
	}

	/**
	 * @description Get all campaigns
	 * @param {GetCampaignsParams} params - Params of the request
	 * @param {number} [params.page] - Page number
	 * @param {number} [params.per_page] - Items per page
	 * @returns {Promise<GetCampaignsResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#get-all-campaigns
	 */
	getCampaigns({
		page,
		per_page
	}: GetCampaignsParams = {}): Promise<GetCampaignsResponse> {
		this.method = Request.Type.GET;
		this.url = path;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Get a campaign by UID
	 * @param {GetCampaignParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @returns {Promise<GetCampaignResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#get-one-campaign
	 */
	getCampaign({ campaignUid }: GetCampaignParams): Promise<GetCampaignResponse> {
		this.method = Request.Type.GET;
		this.url = `${path}/${campaignUid}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Update a campaign
	 * @param {UpdateCampaignParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @param {string} [params.name] - Campaign name
	 * @param {string} [params.fromName] - From name
	 * @param {string} [params.fromEmail] - From email
	 * @param {string} [params.subject] - Subject
	 * @param {string} [params.replyTo] - Reply to
	 * @param {string} [params.sendAt] - Send at (YYYY-MM-DD hh:mm:ss)
	 * @param {string} [params.listId] - List ID
	 * @param {string} [params.segmentId] - Segment ID
	 * @param {string} [params.templateId] - Template ID
	 * @returns {Promise<UpdateCampaignResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#update-a-campaign
	 */
	update({
		campaignUid,
		name,
		fromName,
		fromEmail,
		subject,
		replyTo,
		sendAt,
		listId,
		segmentId,
		templateId
	}: UpdateCampaignParams): Promise<UpdateCampaignResponse> {
		const postData: Record<string, any> = {};

		if (name) postData.name = name;
		if (fromName) postData.from_name = fromName;
		if (fromEmail) postData.from_email = fromEmail;
		if (subject) postData.subject = subject;
		if (replyTo) postData.reply_to = replyTo;
		if (sendAt) postData.send_at = sendAt;
		if (listId) postData.list_uid = listId;
		if (segmentId) postData.segment_uid = segmentId;

		if (templateId) {
			postData.template = {
				template_uid: templateId
			};
		}

		this.method = Request.Type.PUT;
		this.url = `${path}/${campaignUid}`;
		this.data = { campaign: postData };

		return this.send();
	}

	/**
	 * @description Copy a campaign
	 * @param {CopyCampaignParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @returns {Promise<CopyCampaignResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#copy-a-campaign
	 */
	copy({ campaignUid }: CopyCampaignParams): Promise<CopyCampaignResponse> {
		this.method = Request.Type.POST;
		this.url = `${path}/${campaignUid}/copy`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Pause or unpause a campaign
	 * @param {PauseUnpauseCampaignParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @returns {Promise<PauseUnpauseCampaignResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#pause-unpause-a-campaign
	 */
	pauseUnpause({
		campaignUid
	}: PauseUnpauseCampaignParams): Promise<PauseUnpauseCampaignResponse> {
		this.method = Request.Type.PUT;
		this.url = `${path}/${campaignUid}/pause-unpause`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Mark a campaign as sent
	 * @param {MarkSentCampaignParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @returns {Promise<MarkSentCampaignResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#mark-a-campaign-as-sent
	 */
	markSent({
		campaignUid
	}: MarkSentCampaignParams): Promise<MarkSentCampaignResponse> {
		this.method = Request.Type.PUT;
		this.url = `${path}/${campaignUid}/mark-sent`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Delete a campaign
	 * @param {DeleteCampaignParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @returns {Promise<DeleteCampaignResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#delete-a-campaign
	 */
	delete({ campaignUid }: DeleteCampaignParams): Promise<DeleteCampaignResponse> {
		this.method = Request.Type.DELETE;
		this.url = `${path}/${campaignUid}`;

		return this.send();
	}

	/**
	 * @description Get campaign statistics
	 * @param {GetCampaignStatsParams} params - Params of the request
	 * @param {string} params.campaignUid - Campaign UID
	 * @returns {Promise<GetCampaignStatsResponse>} - Promise of the response
	 * @memberof Campaigns
	 * @see https://api-docs.mailwizz.com/#get-campaign-stats
	 */
	getStats({
		campaignUid
	}: GetCampaignStatsParams): Promise<GetCampaignStatsResponse> {
		this.method = Request.Type.GET;
		this.url = `${path}/${campaignUid}/stats`;
		this.data = {};

		return this.send();
	}
}

export default Campaigns;
