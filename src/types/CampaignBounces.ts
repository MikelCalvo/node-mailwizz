/**
 * @description Interface for the parameters of the API call to get campaign bounces
 * @interface GetBouncesParams
 * @memberof CampaignBounces
 */
export interface GetBouncesParams {
	campaignUid: string;
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get campaign bounces
 * @interface GetBouncesResponse
 * @memberof CampaignBounces
 */
export interface GetBouncesResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: BounceRecord[];
	};
}

/**
 * @description Interface for a bounce record
 * @interface BounceRecord
 * @memberof CampaignBounces
 */
export interface BounceRecord {
	message: string;
	processed: string;
	bounce_type: string;
	subscriber: BounceSubscriber;
}

/**
 * @description Interface for a bounce subscriber
 * @interface BounceSubscriber
 * @memberof CampaignBounces
 */
export interface BounceSubscriber {
	subscriber_uid: string;
	email: string;
}

/**
 * @description Enum for bounce types
 * @enum {string}
 * @memberof CampaignBounces
 */
export enum BounceType {
	HARD = "hard",
	SOFT = "soft",
	INTERNAL = "internal"
}

/**
 * @description Interface for the parameters of the API call to create a bounce
 * @interface CreateBounceParams
 * @memberof CampaignBounces
 */
export interface CreateBounceParams {
	campaignUid: string;
	message: string;
	bounceType: BounceType;
	subscriberUid: string;
}

/**
 * @description Interface for the response of the API call to create a bounce
 * @interface CreateBounceResponse
 * @memberof CampaignBounces
 */
export interface CreateBounceResponse {
	status: string;
}
