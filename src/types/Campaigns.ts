/**
 * @description Interface for the parameters of the API call to create a campaign
 * @interface CreateCampaignParams
 * @property {string} name - Name of the campaign
 * @property {CreateCampaignType} type - Type of the campaign
 * @property {string} fromName - From name of the campaign
 * @property {string} fromEmail - From email of the campaign
 * @property {string} subject - Subject of the campaign
 * @property {string} replyTo - Reply to of the campaign
 * @property {string} sendAt - Send at of the campaign (YYYY-MM-DD hh:mm:ss)
 * @property {string} listId - List ID of the campaign
 * @property {string} segmentId - Segment ID of the campaign
 * @property {string} urlTracking - URL tracking of the campaign
 * @property {string} templateId - Template ID of the campaign
 * @memberof Campaigns
 * @see https://api-docs.mailwizz.com/#create-a-campaign
 */
export interface CreateCampaignParams {
	name: string;
	type?: CreateCampaignType;
	fromName: string;
	fromEmail: string;
	subject: string;
	replyTo: string;
	sendAt: string;
	listId: string;
	segmentId?: string;
	urlTracking?: string;
	templateId: string;
}

/**
 * @description Type of the campaign
 * @enum {string}
 * @memberof Campaigns
 */
export enum CreateCampaignType {
	REGULAR = "regular",
	AUTORESPONDER = "autoresponder"
}

/**
 * @description Interface for the response of the API call to create a campaign
 * @interface CreateCampaignResponse
 * @property {string} status - Status of the response
 * @property {string} campaign_uid - Campaign UID of the response
 * @memberof Campaigns
 * @see https://api-docs.mailwizz.com/#create-a-campaign
 */
export interface CreateCampaignResponse {
	status: string;
	campaign_uid: string;
}
