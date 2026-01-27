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

/**
 * @description Interface for the parameters of the API call to get all campaigns
 * @interface GetCampaignsParams
 * @memberof Campaigns
 */
export interface GetCampaignsParams {
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all campaigns
 * @interface GetCampaignsResponse
 * @memberof Campaigns
 */
export interface GetCampaignsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: CampaignRecord[];
	};
}

/**
 * @description Interface for a campaign record
 * @interface CampaignRecord
 * @memberof Campaigns
 */
export interface CampaignRecord {
	campaign_uid: string;
	name: string;
	type: string;
	status: string;
	group: CampaignGroup;
	list: CampaignList;
	segment: CampaignSegment;
	date_added: string;
	send_at: string;
	started_at: string;
	finished_at: string;
}

/**
 * @description Interface for a campaign group
 * @interface CampaignGroup
 * @memberof Campaigns
 */
export interface CampaignGroup {
	group_uid: string;
	name: string;
}

/**
 * @description Interface for a campaign list
 * @interface CampaignList
 * @memberof Campaigns
 */
export interface CampaignList {
	list_uid: string;
	name: string;
}

/**
 * @description Interface for a campaign segment
 * @interface CampaignSegment
 * @memberof Campaigns
 */
export interface CampaignSegment {
	segment_uid: string;
	name: string;
}

/**
 * @description Interface for the parameters of the API call to get a campaign
 * @interface GetCampaignParams
 * @memberof Campaigns
 */
export interface GetCampaignParams {
	campaignUid: string;
}

/**
 * @description Interface for the response of the API call to get a campaign
 * @interface GetCampaignResponse
 * @memberof Campaigns
 */
export interface GetCampaignResponse {
	status: string;
	data: {
		record: CampaignDetailRecord;
	};
}

/**
 * @description Interface for a campaign detail record
 * @interface CampaignDetailRecord
 * @memberof Campaigns
 */
export interface CampaignDetailRecord {
	campaign_uid: string;
	name: string;
	type: string;
	from_name: string;
	from_email: string;
	to_name: string;
	reply_to: string;
	subject: string;
	status: string;
	date_added: string;
	send_at: string;
	list: CampaignList;
	segment: CampaignSegment;
}

/**
 * @description Interface for the parameters of the API call to update a campaign
 * @interface UpdateCampaignParams
 * @memberof Campaigns
 */
export interface UpdateCampaignParams {
	campaignUid: string;
	name?: string;
	fromName?: string;
	fromEmail?: string;
	subject?: string;
	replyTo?: string;
	sendAt?: string;
	listId?: string;
	segmentId?: string;
	templateId?: string;
}

/**
 * @description Interface for the response of the API call to update a campaign
 * @interface UpdateCampaignResponse
 * @memberof Campaigns
 */
export interface UpdateCampaignResponse {
	status: string;
	data: {
		record: {
			campaign_uid: string;
		};
	};
}

/**
 * @description Interface for the parameters of the API call to copy a campaign
 * @interface CopyCampaignParams
 * @memberof Campaigns
 */
export interface CopyCampaignParams {
	campaignUid: string;
}

/**
 * @description Interface for the response of the API call to copy a campaign
 * @interface CopyCampaignResponse
 * @memberof Campaigns
 */
export interface CopyCampaignResponse {
	status: string;
	campaign_uid: string;
}

/**
 * @description Interface for the parameters of the API call to pause/unpause a campaign
 * @interface PauseUnpauseCampaignParams
 * @memberof Campaigns
 */
export interface PauseUnpauseCampaignParams {
	campaignUid: string;
}

/**
 * @description Interface for the response of the API call to pause/unpause a campaign
 * @interface PauseUnpauseCampaignResponse
 * @memberof Campaigns
 */
export interface PauseUnpauseCampaignResponse {
	status: string;
	campaign: {
		status: string;
	};
}

/**
 * @description Interface for the parameters of the API call to mark a campaign as sent
 * @interface MarkSentCampaignParams
 * @memberof Campaigns
 */
export interface MarkSentCampaignParams {
	campaignUid: string;
}

/**
 * @description Interface for the response of the API call to mark a campaign as sent
 * @interface MarkSentCampaignResponse
 * @memberof Campaigns
 */
export interface MarkSentCampaignResponse {
	status: string;
	campaign: {
		status: string;
	};
}

/**
 * @description Interface for the parameters of the API call to delete a campaign
 * @interface DeleteCampaignParams
 * @memberof Campaigns
 */
export interface DeleteCampaignParams {
	campaignUid: string;
}

/**
 * @description Interface for the response of the API call to delete a campaign
 * @interface DeleteCampaignResponse
 * @memberof Campaigns
 */
export interface DeleteCampaignResponse {
	status: string;
}

/**
 * @description Interface for the parameters of the API call to get campaign stats
 * @interface GetCampaignStatsParams
 * @memberof Campaigns
 */
export interface GetCampaignStatsParams {
	campaignUid: string;
}

/**
 * @description Interface for the response of the API call to get campaign stats
 * @interface GetCampaignStatsResponse
 * @memberof Campaigns
 */
export interface GetCampaignStatsResponse {
	status: string;
	data: CampaignStats;
}

/**
 * @description Interface for campaign statistics
 * @interface CampaignStats
 * @memberof Campaigns
 */
export interface CampaignStats {
	campaign_status: string;
	subscribers_count: number;
	processed_count: number;
	delivery_success_count: number;
	delivery_success_rate: string;
	delivery_error_count: number;
	delivery_error_rate: string;
	opens_count: number;
	opens_rate: string;
	unique_opens_count: number;
	unique_opens_rate: string;
	clicks_count: number;
	clicks_rate: string;
	unique_clicks_count: number;
	unique_clicks_rate: string;
	unsubscribes_count: number;
	unsubscribes_rate: string;
	complaints_count: number;
	complaints_rate: string;
	bounces_count: number;
	bounces_rate: string;
	hard_bounces_count: number;
	hard_bounces_rate: string;
	soft_bounces_count: number;
	soft_bounces_rate: string;
	internal_bounces_count: number;
	internal_bounces_rate: string;
}
