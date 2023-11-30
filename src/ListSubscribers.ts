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
	UpdateSubscriberResponse
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
			EMAIL: subscriberEmail
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
}

export default ListSubscribers;
