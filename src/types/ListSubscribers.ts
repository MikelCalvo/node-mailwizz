/**
 * @description Interface for the parameters of the API call to get all the subscribers of a list
 * @interface GetSubscribersParams
 * @property {string} listUid - List UID
 * @property {number} page - Page of the response
 * @property {number} per_page - Items per page of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#get-all-subscribers
 */
export interface GetSubscribersParams {
	listUid: string;
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all the subscribers of a list
 * @interface GetSubscribersResponse
 * @property {string} status - Status of the response
 * @property {GetSubscribersResponseData} data - Data of the response
 * @property {string} data.count - Items Count
 * @property {number} data.total_pages - Total Pages
 * @property {number} data.current_page - Current Page
 * @property {number} data.next_page - Next Page
 * @property {number} data.prev_page - Previous Page
 * @property {GetSubscribersResponseRecord[]} data.records - Records of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#get-all-subscribers
 * @memberof  ListSubscribers
 */
export interface GetSubscribersResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: GetSubscribersResponseRecord[];
	};
}

/**
 * @description Interface for the response of the API call to get all the subscribers of a list
 * @interface GetSubscribersResponseRecord
 * @property {string} subscriber_uid - Subscriber UID
 * @property {string} EMAIL - Subscriber Email
 * @property {string} FNAME - Subscriber First Name
 * @property {string} LNAME - Subscriber Last Name
 * @property {string} status - Subscriber Status
 * @property {string} source - Subscriber Source
 * @property {string} ip_address - Subscriber IP Address
 * @property {string} date_added - Subscriber Date Added
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#get-all-subscribers
 */
export interface GetSubscribersResponseRecord {
	subscriber_uid: string;
	EMAIL: string;
	FNAME: string;
	LNAME: string;
	status: string;
	source: string;
	ip_address: string;
	date_added: string;
}

/**
 * @description Interface for the parameters of the API call to get a subscriber by UID
 * @interface GetSubscriberParams
 * @property {string} listUid - List UID
 * @property {string} subscriberUid - Subscriber UID
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#get-a-subscriber
 */
export interface GetSubscriberParams {
	listUid: string;
	subscriberUid: string;
}

/**
 * @description Interface for the response of the API call to get a subscriber by UID
 * @interface GetSubscriberResponse
 * @property {string} status - Status of the response
 * @property {GetSubscriberResponseData} data - Data of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#get-a-subscriber
 */
export interface GetSubscriberResponse {
	status: string;
	data: GetSubscriberResponseData;
}

/**
 * @description Interface for the response of the API call to get a subscriber by UID
 * @interface GetSubscriberResponseData
 * @property {string} subscriber_uid - Subscriber UID
 * @property {string} EMAIL - Subscriber Email
 * @property {string} FNAME - Subscriber First Name
 * @property {string} LNAME - Subscriber Last Name
 * @property {string} status - Subscriber Status
 * @property {string} source - Subscriber Source
 * @property {string} ip_address - Subscriber IP Address
 * @property {string} date_added - Subscriber Date Added
 * @property {string} [key: string] - Any other custom property
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#get-a-subscriber
 */
export interface GetSubscriberResponseData {
	subscriber_uid: string;
	EMAIL: string;
	FNAME: string;
	LNAME: string;
	status: string;
	source: string;
	ip_address: string;
	date_added: string;
	[key: string]: any;
}

/**
 * @description Interface for the parameters of the API call to search a subscriber by email
 * @interface EmailSearchParams
 * @property {string} listUid - List UID
 * @property {string} subscriberEmail - Subscriber Email
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#search-a-subscriber-by-email
 */
export interface EmailSearchParams {
	listUid: string;
	subscriberEmail: string;
}

/**
 * @description Interface for the response of the API call to search a subscriber by email
 * @interface EmailSearchResponse
 * @property {string} status - Status of the response
 * @property {EmailSearchResponseData} data - Data of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#search-a-subscriber-by-email
 */
export interface EmailSearchResponse {
	status: string;
	data: EmailSearchResponseData;
}

/**
 * @description Interface for the response of the API call to search a subscriber by email
 * @interface EmailSearchResponseData
 * @property {string} subscriber_uid - Subscriber UID
 * @property {string} status - Subscriber Status
 * @property {string} date_added - Subscriber Date Added
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#search-a-subscriber-by-email
 */
export interface EmailSearchResponseData {
	subscriber_uid: string;
	status: string;
	date_added: string;
}

/**
 * @description Interface for the parameters of the API call to create a subscriber
 * @interface CreateSubscriberParams
 * @property {string} listUid - List UID
 * @property {CreateSubscriberParamsData} data - Data of the subscriber
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#create-a-subscriber
 */
export interface CreateSubscriberParams {
	listUid: string;
	data: CreateSubscriberParamsData;
}

/**
 * @description Interface for the parameters of the API call to create a subscriber
 * @interface CreateSubscriberParamsData
 * @property {string} email - Subscriber Email
 * @property {string} [key: string] - Any other custom property
 * @see https://api-docs.mailwizz.com/#create-a-subscriber
 */
export interface CreateSubscriberParamsData {
	email: string;
	[key: string]: any;
}

/**
 * @description Interface for the response of the API call to create a subscriber
 * @interface CreateSubscriberResponse
 * @property {string} status - Status of the response
 * @property {CreateSubscriberResponseData} data - Data of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#create-a-subscriber
 */
export interface CreateSubscriberResponse {
	status: string;
	data: CreateSubscriberResponseData;
}

/**
 * @description Interface for the response of the API call to create a subscriber
 * @interface CreateSubscriberResponseData
 * @property {CreateSubscriberResponseRecord} record - Record of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#create-a-subscriber
 */
export interface CreateSubscriberResponseData {
	record: CreateSubscriberResponseRecord;
}

/**
 * @description Interface for the response of the API call to create a subscriber
 * @interface CreateSubscriberResponseRecord
 * @property {string} subscriber_uid - Subscriber UID
 * @property {string} email - Subscriber Email
 * @property {string} ip_address - Subscriber IP Address
 * @property {string} source - Subscriber Source
 * @property {CreateSubscriberResponseRecordDateAdded} date_added - Subscriber Date Added
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#create-a-subscriber
 */
export interface CreateSubscriberResponseRecord {
	subscriber_uid: string;
	email: string;
	ip_address: string;
	source: string;
	date_added: CreateSubscriberResponseRecordDateAdded;
}

/**
 * @description Interface for the response of the API call to create a subscriber
 * @interface CreateSubscriberResponseRecordDateAdded
 * @property {string} expression - Expression of the date added
 * @property {any} params - Params of the date added
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#create-a-subscriber
 */
export interface CreateSubscriberResponseRecordDateAdded {
	expression: string;
	params: any;
}

/**
 * @description Interface for the parameters of the API call to update a subscriber
 * @interface UpdateSubscriberParams
 * @property {string} listUid - List UID
 * @property {string} subscriberUid - Subscriber UID
 * @property {UpdateSubscriberParamsData} data - Data of the subscriber
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#update-a-subscriber
 */
export interface UpdateSubscriberParams {
	listUid: string;
	subscriberUid: string;
	data: UpdateSubscriberParamsData;
}

/**
 * @description Interface for the parameters of the API call to update a subscriber
 * @interface UpdateSubscriberParamsData
 * @property {string} [key: string] - Any other custom property
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#update-a-subscriber
 */
export interface UpdateSubscriberParamsData {
	[key: string]: any;
}

/**
 * @description Interface for the response of the API call to update a subscriber
 * @interface UpdateSubscriberResponse
 * @property {string} status - Status of the response
 * @property {UpdateSubscriberResponseData} data - Data of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#update-a-subscriber
 */
export interface UpdateSubscriberResponse {
	status: string;
	data: UpdateSubscriberResponseData;
}

/**
 * @description Interface for the response of the API call to update a subscriber
 * @interface UpdateSubscriberResponseData
 * @property {UpdateSubscriberResponseRecord} record - Record of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#update-a-subscriber
 */
export interface UpdateSubscriberResponseData {
	record: UpdateSubscriberResponseRecord;
}

/**
 * @description Interface for the response of the API call to update a subscriber
 * @interface UpdateSubscriberResponseRecord
 * @property {string} subscriber_uid - Subscriber UID
 * @property {string} email - Subscriber Email
 * @property {string} ip_address - Subscriber IP Address
 * @property {string} source - Subscriber Source
 * @property {UpdateSubscriberResponseRecordDateAdded} date_added - Subscriber Date Added
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#update-a-subscriber
 */
export interface UpdateSubscriberResponseRecord {
	subscriber_uid: string;
	email: string;
	ip_address: string;
	source: string;
	date_added: UpdateSubscriberResponseRecordDateAdded;
}

/**
 * @description Interface for the response of the API call to update a subscriber
 * @interface UpdateSubscriberResponseRecordDateAdded
 * @property {string} expression - Expression of the date added
 * @property {any} params - Params of the date added
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#update-a-subscriber
 */
export interface UpdateSubscriberResponseRecordDateAdded {
	expression: string;
	params: any;
}

/**
 * @description Interface for the parameters of the API call to delete a subscriber
 * @interface DeleteSubscriberParams
 * @property {string} listUid - List UID
 * @property {string} subscriberUid - Subscriber UID
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#delete-a-subscriber
 */
export interface DeleteSubscriberParams {
	listUid: string;
	subscriberUid: string;
}

/**
 * @description Interface for the response of the API call to delete a subscriber
 * @interface DeleteSubscriberResponse
 * @property {string} status - Status of the response
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#delete-a-subscriber
 */
export interface DeleteSubscriberResponse {
	status: string;
}

/**
 * @description Interface for the parameters of the API call to unsubscribe a subscriber
 * @interface UnsubscribeSubscriberParams
 * @property {string} listUid - List UID
 * @property {string} subscriberUid - Subscriber UID
 * @memberof  ListSubscribers
 * @see https://api-docs.mailwizz.com/#unsubscribe-a-subscriber
 */
export interface UnsubscribeSubscriberParams {
	listUid: string;
	subscriberUid: string;
}

/**
 * @description Interface for the response of the API call to unsubscribe a subscriber
 * @interface UnsubscribeSubscriberResponse
 * @property {string} status - Status of the response
 * @memberof ListSubscribers
 * @see https://api-docs.mailwizz.com/#unsubscribe-a-subscriber
 */
export interface UnsubscribeSubscriberResponse {
	status: string;
}
