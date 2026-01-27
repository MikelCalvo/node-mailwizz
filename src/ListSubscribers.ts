import Request from "./Request";
import { Config } from "./types/Config";
import {
	CreateSubscriberParams,
	CreateSubscriberResponse,
	DeleteSubscriberParams,
	DeleteSubscriberResponse,
	EmailSearchParams,
	EmailSearchResponse,
	GetSubscriberParams,
	GetSubscriberResponse,
	GetSubscribersParams,
	GetSubscribersResponse,
	UnsubscribeSubscriberParams,
	UnsubscribeSubscriberResponse,
	UpdateSubscriberParams,
	UpdateSubscriberResponse,
	SearchByEmailInAllListsParams,
	SearchByEmailInAllListsResponse,
	SearchByCustomFieldsParams,
	SearchByCustomFieldsResponse,
	BulkSubscribersParams,
	BulkSubscribersResponse,
	UnsubscribeByEmailParams,
	UnsubscribeByEmailResponse,
	UnsubscribeByEmailFromAllListsParams,
	UnsubscribeByEmailFromAllListsResponse,
	DeleteByEmailParams,
	DeleteByEmailResponse,
	CreateOrUpdateSubscriberParams,
	CreateOrUpdateSubscriberResponse
} from "./types/ListSubscribers";

class ListSubscribers extends Request {
	/**
	 * @description Creates an instance of ListSubscribers.
	 * @see https://api-docs.mailwizz.com/#subscribers
	 * @memberof ListSubscribers
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Get all the subscribers of a list
	 * @param {GetSubscribersParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {number} params.page - Page of the response
	 * @param {number} params.per_page - Items per page of the response
	 * @returns {Promise<GetSubscribersResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#get-all-subscribers
	 */
	getSubscribers({
		listUid,
		page,
		per_page
	}: GetSubscribersParams): Promise<GetSubscribersResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/subscribers`;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Get a subscriber by UID
	 * @param {GetSubscriberParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @returns {Promise<GetSubscriberResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#get-a-subscriber
	 */
	getSubscriber({
		listUid,
		subscriberUid
	}: GetSubscriberParams): Promise<GetSubscriberResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Search a subscriber by email
	 * @param {EmailSearchParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.subscriberEmail - Subscriber Email
	 * @returns {Promise<EmailSearchResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#search-a-subscriber-by-email
	 */
	emailSearch({
		listUid,
		subscriberEmail
	}: EmailSearchParams): Promise<EmailSearchResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/subscribers/search-by-email`;
		this.data = {
			email: subscriberEmail
		};

		return this.send();
	}

	/**
	 * @description Create a subscriber
	 * @param {CreateSubscriberParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {CreateSubscriberParamsData} params.data - User Data
	 * @param {string} params.data.EMAIL - Subscriber Email
	 * @param {any} params.data[key] - Subscriber Custom Field
	 * @returns {Promise<CreateSubscriberResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#create-a-subscriber
	 */
	create({
		listUid,
		data
	}: CreateSubscriberParams): Promise<CreateSubscriberResponse> {
		this.method = Request.Type.POST;
		this.url = `/lists/${listUid}/subscribers`;
		this.data = data;

		return this.send();
	}

	/**
	 * @description Update a subscriber
	 * @param {UpdateSubscriberParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @param {CreateSubscriberParamsData} params.data - User Data
	 * @param {string} params.data.email - Subscriber Email
	 * @param {any} params.data[key] - Subscriber Custom Field
	 * @returns {Promise<UpdateSubscriberResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#update-a-subscriber
	 */
	update({
		listUid,
		subscriberUid,
		data
	}: UpdateSubscriberParams): Promise<UpdateSubscriberResponse> {
		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;
		this.data = data;

		return this.send();
	}

	/**
	 * @description Delete a subscriber
	 * @param {DeleteSubscriberParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @returns {Promise<DeleteSubscriberResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#delete-a-subscriber
	 */
	delete({
		listUid,
		subscriberUid
	}: DeleteSubscriberParams): Promise<DeleteSubscriberResponse> {
		this.method = Request.Type.DELETE;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;

		return this.send();
	}

	/**
	 * @description Unsubscribe a subscriber
	 * @param {UnsubscribeSubscriberParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.subscriberUid - Subscriber UID
	 * @returns {Promise<UnsubscribeSubscriberResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#unsubscribe-a-subscriber
	 */
	unsubscribe({
		listUid,
		subscriberUid
	}: UnsubscribeSubscriberParams): Promise<UnsubscribeSubscriberResponse> {
		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}/unsubscribe`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Search subscriber by email in all lists
	 * @param {SearchByEmailInAllListsParams} params - Params of the request
	 * @param {string} params.email - Subscriber email
	 * @returns {Promise<SearchByEmailInAllListsResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#search-by-email-in-all-lists
	 */
	searchByEmailInAllLists({
		email
	}: SearchByEmailInAllListsParams): Promise<SearchByEmailInAllListsResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/subscribers/search-by-email-in-all-lists`;
		this.data = {
			email: email
		};

		return this.send();
	}

	/**
	 * @description Search subscribers by custom fields
	 * @param {SearchByCustomFieldsParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {Record<string, string>} params.fields - Custom fields to search
	 * @returns {Promise<SearchByCustomFieldsResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#search-by-custom-fields
	 */
	searchByCustomFields({
		listUid,
		fields
	}: SearchByCustomFieldsParams): Promise<SearchByCustomFieldsResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/subscribers/search-by-custom-fields`;
		this.data = fields;

		return this.send();
	}

	/**
	 * @description Bulk create/update subscribers
	 * @param {BulkSubscribersParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {CreateSubscriberParamsData[]} params.subscribers - Array of subscriber data
	 * @returns {Promise<BulkSubscribersResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#create-subscribers-in-bulk
	 */
	bulk({
		listUid,
		subscribers
	}: BulkSubscribersParams): Promise<BulkSubscribersResponse> {
		this.method = Request.Type.POST;
		this.url = `/lists/${listUid}/subscribers/bulk`;
		this.data = { subscribers: subscribers };

		return this.send();
	}

	/**
	 * @description Unsubscribe subscriber by email
	 * @param {UnsubscribeByEmailParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.email - Subscriber email
	 * @returns {Promise<UnsubscribeByEmailResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#unsubscribe-a-subscriber-by-email
	 */
	unsubscribeByEmail({
		listUid,
		email
	}: UnsubscribeByEmailParams): Promise<UnsubscribeByEmailResponse> {
		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/subscribers/unsubscribe-by-email`;
		this.data = { EMAIL: email };

		return this.send();
	}

	/**
	 * @description Unsubscribe subscriber by email from all lists
	 * @param {UnsubscribeByEmailFromAllListsParams} params - Params of the request
	 * @param {string} params.email - Subscriber email
	 * @returns {Promise<UnsubscribeByEmailFromAllListsResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#unsubscribe-by-email-from-all-lists
	 */
	unsubscribeByEmailFromAllLists({
		email
	}: UnsubscribeByEmailFromAllListsParams): Promise<UnsubscribeByEmailFromAllListsResponse> {
		this.method = Request.Type.PUT;
		this.url = `/lists/subscribers/unsubscribe-by-email-from-all-lists`;
		this.data = { EMAIL: email };

		return this.send();
	}

	/**
	 * @description Delete subscriber by email
	 * @param {DeleteByEmailParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.email - Subscriber email
	 * @returns {Promise<DeleteByEmailResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#delete-a-subscriber-by-email
	 */
	deleteByEmail({
		listUid,
		email
	}: DeleteByEmailParams): Promise<DeleteByEmailResponse> {
		this.method = Request.Type.DELETE;
		this.url = `/lists/${listUid}/subscribers/delete-by-email`;
		this.data = { email: email };

		return this.send();
	}

	/**
	 * @description Create or update a subscriber (upsert)
	 * @param {CreateOrUpdateSubscriberParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {CreateSubscriberParamsData} params.data - Subscriber data
	 * @returns {Promise<CreateOrUpdateSubscriberResponse>} - Promise of the response
	 * @memberof ListSubscribers
	 * @see https://api-docs.mailwizz.com/#create-or-update-a-subscriber
	 */
	createOrUpdate({
		listUid,
		data
	}: CreateOrUpdateSubscriberParams): Promise<CreateOrUpdateSubscriberResponse> {
		this.method = Request.Type.POST;
		this.url = `/lists/${listUid}/subscribers/create-update`;
		this.data = data;

		return this.send();
	}
}

export default ListSubscribers;
