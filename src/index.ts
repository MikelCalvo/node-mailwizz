import _Campaigns from "./Campaigns";
import _Countries from "./Countries";
import _Lists from "./Lists";
import _ListSubscribers from "./ListSubscribers";
import _Templates from "./Templates";
import _TransactionEmail from "./TransactionEmail";
import _ListFields from "./ListFields";
import _ListSegments from "./ListSegments";
import _CampaignTracking from "./CampaignTracking";
import _CampaignBounces from "./CampaignBounces";
import _Customers from "./Customers";

/**
 * Classes
 */
export const Campaigns = _Campaigns;
export const Countries = _Countries;
export const Lists = _Lists;
export const ListSubscribers = _ListSubscribers;
export const Templates = _Templates;
export const TransactionEmail = _TransactionEmail;
export const ListFields = _ListFields;
export const ListSegments = _ListSegments;
export const CampaignTracking = _CampaignTracking;
export const CampaignBounces = _CampaignBounces;
export const Customers = _Customers;

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
	CreateCampaignResponse,
	GetCampaignsParams,
	GetCampaignsResponse,
	CampaignRecord,
	CampaignGroup,
	CampaignList,
	CampaignSegment,
	GetCampaignParams,
	GetCampaignResponse,
	CampaignDetailRecord,
	UpdateCampaignParams,
	UpdateCampaignResponse,
	CopyCampaignParams,
	CopyCampaignResponse,
	PauseUnpauseCampaignParams,
	PauseUnpauseCampaignResponse,
	MarkSentCampaignParams,
	MarkSentCampaignResponse,
	DeleteCampaignParams,
	DeleteCampaignResponse,
	GetCampaignStatsParams,
	GetCampaignStatsResponse,
	CampaignStats
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
	UnsubscribeSubscriberResponse,
	SearchByEmailInAllListsParams,
	SearchByEmailInAllListsResponse,
	SearchByEmailInAllListsRecord,
	SearchByCustomFieldsParams,
	SearchByCustomFieldsResponse,
	BulkSubscribersParams,
	BulkSubscribersResponse,
	BulkSubscriberRecord,
	UnsubscribeByEmailParams,
	UnsubscribeByEmailResponse,
	UnsubscribeByEmailFromAllListsParams,
	UnsubscribeByEmailFromAllListsResponse,
	DeleteByEmailParams,
	DeleteByEmailResponse,
	CreateOrUpdateSubscriberParams,
	CreateOrUpdateSubscriberResponse
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
	GetTemplateResponseRecord,
	SearchTemplatesParams,
	CreateTemplateParams,
	CreateTemplateResponse,
	UpdateTemplateParams,
	UpdateTemplateResponse,
	DeleteTemplateParams,
	DeleteTemplateResponse
} from "./types/Templates";

/**
 * Transactional Emails API types
 */
export {
	CreateTransactionalEmailParams,
	CreateTransactionalEmailResponse,
	GetAllTransactionalEmailsParams,
	GetAllTransactionalEmailsResponse,
	TransactionalEmailRecord,
	GetTransactionalEmailParams,
	GetTransactionalEmailResponse,
	TransactionalEmailDetailRecord,
	DeleteTransactionalEmailParams,
	DeleteTransactionalEmailResponse
} from "./types/TransactionEmail";

/**
 * List Fields API types
 */
export {
	GetFieldsParams,
	GetFieldsResponse,
	FieldRecord,
	FieldType,
	GetFieldParams,
	GetFieldResponse,
	CreateFieldParams,
	CreateFieldResponse,
	UpdateFieldParams,
	UpdateFieldResponse,
	DeleteFieldParams,
	DeleteFieldResponse,
	GetFieldTypesResponse,
	FieldTypeRecord
} from "./types/ListFields";

/**
 * List Segments API types
 */
export {
	GetSegmentsParams,
	GetSegmentsResponse,
	SegmentRecord,
	GetSegmentParams,
	GetSegmentResponse,
	SegmentDetailRecord,
	SegmentCondition,
	GetSegmentSubscribersParams,
	GetSegmentSubscribersResponse,
	SegmentSubscriberRecord,
	CreateSegmentParams,
	CreateSegmentCondition,
	CreateSegmentResponse,
	UpdateSegmentParams,
	UpdateSegmentResponse,
	DeleteSegmentParams,
	DeleteSegmentResponse,
	GetConditionOperatorsResponse,
	ConditionOperatorRecord
} from "./types/ListSegments";

/**
 * Campaign Tracking API types
 */
export {
	TrackOpenParams,
	TrackOpenResponse,
	TrackClickParams,
	TrackClickResponse,
	TrackUnsubscribeParams,
	TrackUnsubscribeResponse
} from "./types/CampaignTracking";

/**
 * Campaign Bounces API types
 */
export {
	GetBouncesParams,
	GetBouncesResponse,
	BounceRecord,
	BounceSubscriber,
	BounceType,
	CreateBounceParams,
	CreateBounceResponse
} from "./types/CampaignBounces";

/**
 * Customers API types
 */
export {
	CreateCustomerParams,
	CustomerCompany,
	CreateCustomerResponse
} from "./types/Customers";
