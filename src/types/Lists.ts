/**
 * @description Interface for the parameters of the API call to get all lists
 * @interface GetAllListsParams
 * @property {number} page - Page of the response
 * @property {number} per_page - Items per page of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsParams {
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all lists
 * @interface GetAllListsResponse
 * @property {string} status - Status of the response
 * @property {GetAllListsResponseData} data - Data of the response
 * @property {string} data.count - Items Count
 * @property {number} data.total_pages - Total Pages
 * @property {number} data.current_page - Current Page
 * @property {number} data.next_page - Next Page
 * @property {number} data.prev_page - Previous Page
 * @property {GetAllListsResponseRecord[]} data.records - Records of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: GetAllListsResponseRecord[];
	};
}

/**
 * @description Interface for the response of the API call to get all lists
 * @interface GetAllListsResponseRecord
 * @property {GetAllListsResponseRecordGeneral} general - General of the response
 * @property {GetAllListsResponseRecordDefaults} defaults - Defaults of the response
 * @property {GetAllListsResponseRecordNotifications} notifications - Notifications of the response
 * @property {GetAllListsResponseRecordCompany} company - Company of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsResponseRecord {
	general: GetAllListsResponseRecordGeneral;
	defaults: GetAllListsResponseRecordDefaults;
	notifications: GetAllListsResponseRecordNotifications;
	company: GetAllListsResponseRecordCompany;
}

/**
 * @description Interface for the response of the API call to get all lists
 * @interface GetAllListsResponseRecordGeneral
 * @property {string} list_uid - List UID
 * @property {string} name - List name
 * @property {string} display_name - List display name
 * @property {string} description - List description
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsResponseRecordGeneral {
	list_uid: string;
	name: string;
	display_name: string;
	description: string;
}

/**
 * @description Interface for the response of the API call to get all lists
 * @interface GetAllListsResponseRecordDefaults
 * @property {string} from_name - From name
 * @property {string} reply_to - Reply to
 * @property {string} subject - Subject
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsResponseRecordDefaults {
	from_name: string;
	reply_to: string;
	subject: string;
}

/**
 * @description Interface for the response of the API call to get all lists
 * @interface GetAllListsResponseRecordNotifications
 * @property {string} subscribe - Subscribe
 * @property {string} unsubscribe - Unsubscribe
 * @property {string} subscribe_to - Subscribe to
 * @property {string} unsubscribe_to - Unsubscribe to
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsResponseRecordNotifications {
	subscribe: string;
	unsubscribe: string;
	subscribe_to: string;
	unsubscribe_to: string;
}

/**
 * @description Interface for the response of the API call to get all lists
 * @interface GetAllListsResponseRecordCompany
 * @property {string} name - Name
 * @property {string} address_1 - Address 1
 * @property {string} address_2 - Address 2
 * @property {string} zone_name - Zone name
 * @property {string} city - City
 * @property {string} zip_code - Zip code
 * @property {string} phone - Phone
 * @property {string} address_format - Address format
 * @property {GetAllListsResponseRecordCompanyCountry} country - Country
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsResponseRecordCompany {
	name: string;
	address_1: string;
	address_2: string;
	zone_name: string;
	city: string;
	zip_code: string;
	phone: string;
	address_format: string;
	country: GetAllListsResponseRecordCompanyCountry;
}

/**
 * @description Interface for the response of the API call to get all lists
 * @interface GetAllListsResponseRecordCompanyCountry
 * @property {string} country_id - Country ID
 * @property {string} name - Country name
 * @property {string} code - Country code
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-all-lists
 */
export interface GetAllListsResponseRecordCompanyCountry {
	country_id: string;
	name: string;
	code: string;
}

/**
 * @description Interface for the parameters of the API call to get a list by ID
 * @interface GetListParams
 * @property {string} listID - List UID
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListParams {
	listID: string;
}

/**
 * @description Interface for the response of the API call to get a list by ID
 * @interface GetListResponse
 * @property {string} status - Status of the response
 * @property {GetListResponseData} data - Data of the response
 * @property {GetListResponseRecord} data.record - Record of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListResponse {
	status: string;
	data: {
		record: GetListResponseRecord;
	};
}

/**
 * @description Interface for the response of the API call to get a list by ID
 * @interface GetListResponseRecord
 * @property {GetListResponseRecordGeneral} general - General of the response
 * @property {GetListResponseRecordDefaults} defaults - Defaults of the response
 * @property {GetListResponseRecordNotifications} notifications - Notifications of the response
 * @property {GetListResponseRecordCompany} company - Company of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListResponseRecord {
	general: GetListResponseRecordGeneral;
	defaults: GetListResponseRecordDefaults;
	notifications: GetListResponseRecordNotifications;
	company: GetListResponseRecordCompany;
}

/**
 * @description Interface for the response of the API call to get a list by ID
 * @interface GetListResponseRecordGeneral
 * @property {string} list_uid - List UID
 * @property {string} name - List name
 * @property {string} display_name - List display name
 * @property {string} description - List description
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListResponseRecordGeneral {
	list_uid: string;
	name: string;
	display_name: string;
	description: string;
}

/**
 * @description Interface for the response of the API call to get a list by ID
 * @interface GetListResponseRecordDefaults
 * @property {string} from_name - From name
 * @property {string} reply_to - Reply to
 * @property {string} subject - Subject
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListResponseRecordDefaults {
	from_name: string;
	reply_to: string;
	subject: string;
}

/**
 * @description Interface for the response of the API call to get a list by ID
 * @interface GetListResponseRecordNotifications
 * @property {string} subscribe - Subscribe
 * @property {string} unsubscribe - Unsubscribe
 * @property {string} subscribe_to - Subscribe to
 * @property {string} unsubscribe_to - Unsubscribe to
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListResponseRecordNotifications {
	subscribe: string;
	unsubscribe: string;
	subscribe_to: string;
	unsubscribe_to: string;
}

/**
 * @description Interface for the response of the API call to get a list by ID
 * @interface GetListResponseRecordCompany
 * @property {string} name - Name
 * @property {string} address_1 - Address 1
 * @property {string} address_2 - Address 2
 * @property {string} zone_name - Zone name
 * @property {string} city - City
 * @property {string} zip_code - Zip code
 * @property {string} phone - Phone
 * @property {string} address_format - Address format
 * @property {GetListResponseRecordCompanyCountry} country - Country
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListResponseRecordCompany {
	name: string;
	address_1: string;
	address_2: string;
	zone_name: string;
	city: string;
	zip_code: string;
	phone: string;
	address_format: string;
	country: GetListResponseRecordCompanyCountry;
}

/**
 * @description Interface for the response of the API call to get a list by ID
 * @interface GetListResponseRecordCompanyCountry
 * @property {string} country_id - Country ID
 * @property {string} name - Country name
 * @property {string} code - Country code
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#get-one-list
 */
export interface GetListResponseRecordCompanyCountry {
	country_id: string;
	name: string;
	code: string;
}

/**
 * @description Interface for the parameters of the API call to create a list
 * @interface CreateListParams
 * @param {string} name - List name
 * @param {string} description - List description
 * @param {string} optIn - Opt in
 * @param {string} optOut - Opt out
 * @param {string} fromName - From name
 * @param {string} fromEmail - From email
 * @param {string} replyTo - Reply to
 * @param {string} subject - Subject
 * @param {string} notificationSubscribe - Notification subscribe
 * @param {string} notificationUnsubscribe - Notification unsubscribe
 * @param {string} notificationSubscribeTo - Notification subscribe to
 * @param {string} notificationUnsubscribeTo - Notification unsubscribe to
 * @param {string} companyName - Company name
 * @param {string} companyCountry - Company country
 * @param {string} companyZone - Company zone
 * @param {string} companyAddress1 - Company address 1
 * @param {string} companyAddress2 - Company address 2
 * @param {string} companyZoneName - Company zone name
 * @param {string} companyCity - Company city
 * @param {string} companyZipCode - Company zip code
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#create-a-list
 */

export interface CreateListParams {
	name: string;
	description: string;
	fromName: string;
	fromEmail: string;
	replyTo: string;
	subject?: string;
	notificationSubscribe?: string;
	notificationUnsubscribe?: string;
	notificationSubscribeTo?: string;
	notificationUnsubscribeTo?: string;
	companyName?: string;
	companyCountry?: string;
	companyZone?: string;
	companyAddress1?: string;
	companyAddress2?: string;
	companyZoneName?: string;
	companyCity?: string;
	companyZipCode?: string;
}

/**
 * @description Interface for the response of the API call to create a list
 * @interface CreateListResponse
 * @property {string} status - Status of the response
 * @property {string} list_uid - List UID of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#create-a-list
 */
export interface CreateListResponse {
	status: string;
	list_uid: string;
}

/**
 * @description Interface for the parameters of the API call to update a list
 * @interface UpdateListParams
 * @param {string} listID - List UID
 * @param {string} name - List name
 * @param {string} description - List description
 * @param {string} optIn - Opt in
 * @param {string} optOut - Opt out
 * @param {string} fromName - From name
 * @param {string} fromEmail - From email
 * @param {string} replyTo - Reply to
 * @param {string} subject - Subject
 * @param {string} notificationSubscribe - Notification subscribe
 * @param {string} notificationUnsubscribe - Notification unsubscribe
 * @param {string} notificationSubscribeTo - Notification subscribe to
 * @param {string} notificationUnsubscribeTo - Notification unsubscribe to
 * @param {string} companyName - Company name
 * @param {string} companyCountry - Company country
 * @param {string} companyZone - Company zone
 * @param {string} companyAddress1 - Company address 1
 * @param {string} companyAddress2 - Company address 2
 * @param {string} companyZoneName - Company zone name
 * @param {string} companyCity - Company city
 * @param {string} companyZipCode - Company zip code
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#update-a-list
 */
export interface UpdateListParams {
	listID: string;
	name?: string;
	description?: string;
	fromName?: string;
	fromEmail?: string;
	replyTo?: string;
	subject?: string;
	notificationSubscribe?: string;
	notificationUnsubscribe?: string;
	notificationSubscribeTo?: string;
	notificationUnsubscribeTo?: string;
	companyName?: string;
	companyCountry?: string;
	companyZone?: string;
	companyAddress1?: string;
	companyAddress2?: string;
	companyZoneName?: string;
	companyCity?: string;
	companyZipCode?: string;
}

/**
 * @description Interface for the response of the API call to update a list
 * @interface UpdateListResponse
 * @property {string} status - Status of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#update-a-list
 */
export interface UpdateListResponse {
	status: string;
}

/**
 * @description Interface for the parameters of the API call to delete a list
 * @interface DeleteListParams
 * @param {string} listID - List UID
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#delete-a-list
 */
export interface DeleteListParams {
	listID: string;
}

/**
 * @description Interface for the response of the API call to delete a list
 * @interface DeleteListResponse
 * @property {string} status - Status of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#delete-a-list
 */
export interface DeleteListResponse {
	status: string;
}

/**
 * @description Interface for the parameters of the API call to copy a list
 * @interface CopyListParams
 * @param {string} listID - List UID
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#copy-a-list
 */
export interface CopyListParams {
	listID: string;
}

/**
 * @description Interface for the response of the API call to copy a list
 * @interface CopyListResponse
 * @property {string} status - Status of the response
 * @property {string} list_uid - List UID of the response
 * @memberof Lists
 * @see https://api-docs.mailwizz.com/#copy-a-list
 */
export interface CopyListResponse {
	status: string;
	list_uid: string;
}
