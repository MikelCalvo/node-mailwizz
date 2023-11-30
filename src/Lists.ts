import {
	CopyListParams,
	CopyListResponse,
	CreateListParams,
	CreateListResponse,
	DeleteListParams,
	DeleteListResponse,
	GetAllListsParams,
	GetAllListsResponse,
	GetListParams,
	GetListResponse,
	UpdateListParams,
	UpdateListResponse
} from "./types/Lists";
import Request from "./Request";
import { Config } from "./types/Config";

const path: string = "/lists";

class Lists extends Request {
	/**
	 * @description Creates an instance of Lists.
	 * @memberof Lists
	 * @see https://api-docs.mailwizz.com/#lists
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Get all lists
	 * @param {GetAllListsParams} params - Params of the request
	 * @param {number} params.page - Page of the response
	 * @param {number} params.per_page - Items per page of the response
	 * @returns {Promise<GetAllListsResponse>} - Promise of the response
	 * @memberof Lists
	 * @see https://api-docs.mailwizz.com/#get-all-lists
	 */
	getLists({
		page,
		per_page
	}: GetAllListsParams): Promise<GetAllListsResponse> {
		this.method = Request.Type.GET;
		this.url = path;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Get a list
	 * @param {GetListParams} params - Params of the request
	 * @param {string} params.listID - List ID
	 * @returns {Promise<GetListResponse>} - Promise of the response
	 * @memberof Lists
	 * @see https://api-docs.mailwizz.com/#get-a-list
	 */
	getList({ listID }: GetListParams): Promise<GetListResponse> {
		this.method = Request.Type.GET;
		this.url = `${path}/${listID}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Create a list
	 * @param {CreateListParams} info - Info of the list
	 * @param {string} info.name - Name of the list
	 * @param {string} info.description - Description of the list
	 * @param {string} info.fromName - From name of the list
	 * @param {string} info.fromEmail - From email of the list
	 * @param {string} info.replyTo - Reply to of the list
	 * @param {string} info.subject - Subject of the list
	 * @param {string} info.notificationSubscribe - Notification subscribe of the list
	 * @param {string} info.notificationUnsubscribe - Notification unsubscribe of the list
	 * @param {string} info.notificationSubscribeTo - Notification subscribe to of the list
	 * @param {string} info.notificationUnsubscribeTo - Notification unsubscribe to of the list
	 * @param {string} info.companyName - Company name of the list
	 * @param {string} info.companyCountry - Company country of the list
	 * @param {string} info.companyZone - Company zone of the list
	 * @param {string} info.companyAddress1 - Company address 1 of the list
	 * @param {string} info.companyAddress2 - Company address 2 of the list
	 * @param {string} info.companyZoneName - Company zone name of the list
	 * @param {string} info.companyCity - Company city of the list
	 * @param {string} info.companyZipCode - Company zip code of the list
	 * @returns {Promise<CreateListResponse>} - Promise of the response
	 * @memberof Lists
	 * @see https://api-docs.mailwizz.com/#create-a-list
	 */
	create({
		name,
		description,
		fromName,
		fromEmail,
		replyTo,
		subject,
		notificationSubscribe,
		notificationUnsubscribe,
		notificationSubscribeTo,
		notificationUnsubscribeTo,
		companyName,
		companyCountry,
		companyZone,
		companyAddress1,
		companyAddress2,
		companyZoneName,
		companyCity,
		companyZipCode
	}: CreateListParams): Promise<CreateListResponse> {
		let postData = {
			//required
			general: {
				name: name, //required
				description: description //required
			},
			//required
			defaults: {
				from_name: fromName, //required
				from_email: fromEmail, //required
				reply_to: replyTo, //required
				subject: subject || ""
			},

			notifications: {
				//notification when new subscriber added
				subscribe: notificationSubscribe || "no", //'yes'|'no'
				unsubscribe: notificationUnsubscribe || "no", //'yes'|'no'
				//where to send the notification
				subscribe_to: notificationSubscribeTo || "",
				unsubscribe_to: notificationUnsubscribeTo || ""
			},
			company: {
				name: companyName || null,
				country: companyCountry || null,
				zone: companyZone || null,
				address_1: companyAddress1 || null,
				address_2: companyAddress2 || null,
				zone_name: companyZoneName || null, //when country doesn't have required zone
				city: companyCity || null,
				zip_code: companyZipCode || null
			}
		};

		// if (info.notificationSubscribe
		//     && info.notificationUnsubscribe
		//     && ['yes', 'no'].indexOf(info.notificationSubscribe) > -1
		//     && ['yes', 'no'].indexOf(info.notificationUnsubscribe) > -1 ) {
		//
		//     postData.notifications = {
		//         //notification when new subscriber added
		//         subscribe: info.notificationSubscribe, //'yes'|'no'
		//         unsubscribe: info.notificationUnsubscribe, //'yes'|'no'
		//         //where to send the notification
		//         subscribe_to: info.notificationSubscribeTo,
		//         unsubscribe_to: info.notificationUnsubscribeTo
		//     };
		// }

		if (companyName && companyCountry && companyZone && companyAddress1) {
			postData.company = {
				name: companyName, //required
				country: companyCountry, //required
				zone: companyZone, //required
				address_1: companyAddress1, //required
				address_2: companyAddress2 || null,
				zone_name: companyZoneName || null, //when country doesn't have required zone
				city: companyCity || null,
				zip_code: companyZipCode || null
			};
		}

		this.method = Request.Type.POST;
		this.url = path;
		this.data = postData;

		return this.send();
	}

	/**
	 * @description Copy a list
	 * @param {CopyListParams} params - Params of the request
	 * @param {string} params.listID - List ID
	 * @returns {Promise<CopyListResponse>} - Promise of the response
	 * @memberof Lists
	 * @see https://api-docs.mailwizz.com/#copy-a-list
	 */
	copy({ listID }: CopyListParams): Promise<CopyListResponse> {
		this.method = Request.Type.POST;
		this.url = `${path}/${listID}/copy`;

		return this.send();
	}

	/**
	 * @description Delete a list
	 * @param {DeleteListParams} params - Params of the request
	 * @param {string} params.listID - List ID
	 * @returns {Promise<DeleteListResponse>} - Promise of the response
	 * @memberof Lists
	 * @see https://api-docs.mailwizz.com/#delete-a-list
	 */
	delete({ listID }: DeleteListParams): Promise<DeleteListResponse> {
		this.method = Request.Type.DELETE;
		this.url = `${path}/${listID}`;

		return this.send();
	}

	/**
	 * @description Update a list
	 * @param {UpdateListParams} info - Info of the list
	 * @param {string} info.listID - List ID
	 * @param {string} info.name - Name of the list
	 * @param {string} info.description - Description of the list
	 * @param {string} info.fromName - From name of the list
	 * @param {string} info.fromEmail - From email of the list
	 * @param {string} info.replyTo - Reply to of the list
	 * @param {string} info.subject - Subject of the list
	 * @param {string} info.notificationSubscribe - Notification subscribe of the list
	 * @param {string} info.notificationUnsubscribe - Notification unsubscribe of the list
	 * @param {string} info.notificationSubscribeTo - Notification subscribe to of the list
	 * @param {string} info.notificationUnsubscribeTo - Notification unsubscribe to of the list
	 * @param {string} info.companyName - Company name of the list
	 * @param {string} info.companyCountry - Company country of the list
	 * @param {string} info.companyZone - Company zone of the list
	 * @param {string} info.companyAddress1 - Company address 1 of the list
	 * @param {string} info.companyAddress2 - Company address 2 of the list
	 * @param {string} info.companyZoneName - Company zone name of the list
	 * @param {string} info.companyCity - Company city of the list
	 * @param {string} info.companyZipCode - Company zip code of the list
	 * @returns {Promise<UpdateListResponse>} - Promise of the response
	 * @memberof Lists
	 * @see https://api-docs.mailwizz.com/#update-a-list
	 */
	update({
		listID,
		name,
		description,
		fromName,
		fromEmail,
		replyTo,
		subject,
		notificationSubscribe,
		notificationUnsubscribe,
		notificationSubscribeTo,
		notificationUnsubscribeTo,
		companyName,
		companyCountry,
		companyZone,
		companyAddress1,
		companyAddress2,
		companyZoneName,
		companyCity,
		companyZipCode
	}: UpdateListParams): Promise<UpdateListResponse> {
		let postData = {
			//required
			general: {
				name: name, //required
				description: description //required
			},
			//required
			defaults: {
				from_name: fromName, //required
				from_email: fromEmail, //required
				reply_to: replyTo, //required
				subject: subject || ""
			},

			notifications: {
				//notification when new subscriber added
				subscribe: notificationSubscribe || "no", //'yes'|'no'
				unsubscribe: notificationUnsubscribe || "no", //'yes'|'no'
				//where to send the notification
				subscribe_to: notificationSubscribeTo || "",
				unsubscribe_to: notificationUnsubscribeTo || ""
			},
			company: {
				name: companyName || null,
				country: companyCountry || null,
				zone: companyZone || null,
				address_1: companyAddress1 || null,
				address_2: companyAddress2 || null,
				zone_name: companyZoneName || null, //when country doesn't have required zone
				city: companyCity || null,
				zip_code: companyZipCode || null
			}
		};

		// if (info.notificationSubscribe
		//     && info.notificationUnsubscribe
		//     && ['yes', 'no'].indexOf(info.notificationSubscribe) > -1
		//     && ['yes', 'no'].indexOf(info.notificationUnsubscribe) > -1 ) {
		//
		//     postData.notifications = {
		//         //notification when new subscriber added
		//         subscribe: info.notificationSubscribe, //'yes'|'no'
		//         unsubscribe: info.notificationUnsubscribe, //'yes'|'no'
		//         //where to send the notification
		//         subscribe_to: info.notificationSubscribeTo,
		//         unsubscribe_to: info.notificationUnsubscribeTo
		//     };
		// }

		if (companyName && companyCountry && companyZone && companyAddress1) {
			postData.company = {
				name: companyName, //required
				country: companyCountry, //required
				zone: companyZone, //required
				address_1: companyAddress1, //required
				address_2: companyAddress2 || null,
				zone_name: companyZoneName || null, //when country doesn't have required zone
				city: companyCity || null,
				zip_code: companyZipCode || null
			};
		}

		this.method = Request.Type.PUT;
		this.url = `${path}/${listID}`;
		this.data = postData;

		return this.send();
	}
}

export default Lists;
