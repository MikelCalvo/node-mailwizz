import _Campaigns from "./Campaigns";
import _Countries from "./Countries";
import _Lists from "./Lists";
import _ListSubscribers from "./ListSubscribers";
import _Templates from "./Templates";
import _TransactionEmail from "./TransactionEmail";

/**
 * Classes
 */
export const Campaigns = _Campaigns;
export const Countries = _Countries;
export const Lists = _Lists;
export const ListSubscribers = _ListSubscribers;
export const Templates = _Templates;
export const TransactionEmail = _TransactionEmail;

/**
 * Config type
 */
export { Config } from "./types/Config";

/**
 * Campaigns API types
 */
export {
	CreateCampaignParams,
	CreateCampaignType,
	CreateCampaignResponse
} from "./types/Campaigns";

/**
 * Countries API types
 */
export {
	GetAllCountriesResponse,
	GetAllCountriesResponseRecord,
	GetAllZonesResponse,
	GetAllZonesResponseRecord
} from "./types/Countries";

/**
 * Lists API types
 */
export {
	GetAllListsParams,
	GetAllListsResponse,
	GetAllListsResponseRecord,
	GetAllListsResponseRecordGeneral,
	GetAllListsResponseRecordDefaults,
	GetAllListsResponseRecordNotifications,
	GetAllListsResponseRecordCompany,
	GetAllListsResponseRecordCompanyCountry,
	GetListParams,
	GetListResponse,
	GetListResponseRecord,
	GetListResponseRecordGeneral,
	GetListResponseRecordDefaults,
	GetListResponseRecordNotifications,
	GetListResponseRecordCompany,
	GetListResponseRecordCompanyCountry,
	CreateListParams,
	CreateListResponse,
	UpdateListParams,
	UpdateListResponse,
	DeleteListParams,
	DeleteListResponse,
	CopyListParams,
	CopyListResponse
} from "./types/Lists";

/**
 * List Subscribers API types
 */
export {
	GetSubscribersParams,
	GetSubscribersResponse,
	GetSubscribersResponseRecord,
	GetSubscriberParams,
	GetSubscriberResponse,
	GetSubscriberResponseData,
	EmailSearchParams,
	EmailSearchResponse,
	EmailSearchResponseData,
	CreateSubscriberParams,
	CreateSubscriberParamsData,
	CreateSubscriberResponse,
	CreateSubscriberResponseData,
	CreateSubscriberResponseRecord,
	CreateSubscriberResponseRecordDateAdded,
	UpdateSubscriberParams,
	UpdateSubscriberParamsData,
	UpdateSubscriberResponse,
	UpdateSubscriberResponseData,
	UpdateSubscriberResponseRecord,
	UpdateSubscriberResponseRecordDateAdded,
	DeleteSubscriberParams,
	DeleteSubscriberResponse,
	UnsubscribeSubscriberParams,
	UnsubscribeSubscriberResponse
} from "./types/ListSubscribers";

/**
 * Templates API types
 */
export {
	GetAllTemplatesParams,
	GetAllTemplatesResponse,
	GetAllTemplatesResponseRecord,
	GetTemplateParams,
	GetTemplateResponse,
	GetTemplateResponseRecord
} from "./types/Templates";

/**
 * Transactional Emails API types
 */
export {
	CreateTransactionalEmailParams,
	CreateTransactionalEmailResponse
} from "./types/TransactionEmail";
