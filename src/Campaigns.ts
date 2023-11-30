import {
	CreateCampaignParams,
	CreateCampaignResponse,
	CreateCampaignType
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
}

export default Campaigns;
