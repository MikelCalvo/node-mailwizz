/**
 * @description Interface for the parameters of the API call to track campaign open
 * @interface TrackOpenParams
 * @memberof CampaignTracking
 */
export interface TrackOpenParams {
	campaignUid: string;
	subscriberUid: string;
}

/**
 * @description Interface for the response of the API call to track campaign open
 * @interface TrackOpenResponse
 * @memberof CampaignTracking
 */
export interface TrackOpenResponse {
	status: string;
}

/**
 * @description Interface for the parameters of the API call to track URL click
 * @interface TrackClickParams
 * @memberof CampaignTracking
 */
export interface TrackClickParams {
	campaignUid: string;
	subscriberUid: string;
	hash: string;
}

/**
 * @description Interface for the response of the API call to track URL click
 * @interface TrackClickResponse
 * @memberof CampaignTracking
 */
export interface TrackClickResponse {
	status: string;
}

/**
 * @description Interface for the parameters of the API call to track unsubscribe
 * @interface TrackUnsubscribeParams
 * @memberof CampaignTracking
 */
export interface TrackUnsubscribeParams {
	listUid: string;
	subscriberUid: string;
	campaignUid: string;
}

/**
 * @description Interface for the response of the API call to track unsubscribe
 * @interface TrackUnsubscribeResponse
 * @memberof CampaignTracking
 */
export interface TrackUnsubscribeResponse {
	status: string;
}
