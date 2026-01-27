/**
 * @description Interface for the parameters of the API call to get all segments of a list
 * @interface GetSegmentsParams
 * @memberof ListSegments
 */
export interface GetSegmentsParams {
	listUid: string;
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all segments
 * @interface GetSegmentsResponse
 * @memberof ListSegments
 */
export interface GetSegmentsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: SegmentRecord[];
	};
}

/**
 * @description Interface for a segment record
 * @interface SegmentRecord
 * @memberof ListSegments
 */
export interface SegmentRecord {
	segment_uid: string;
	name: string;
	subscribers_count: number;
	date_added: string;
}

/**
 * @description Interface for the parameters of the API call to get a segment
 * @interface GetSegmentParams
 * @memberof ListSegments
 */
export interface GetSegmentParams {
	listUid: string;
	segmentUid: string;
}

/**
 * @description Interface for the response of the API call to get a segment
 * @interface GetSegmentResponse
 * @memberof ListSegments
 */
export interface GetSegmentResponse {
	status: string;
	data: {
		record: SegmentDetailRecord;
	};
}

/**
 * @description Interface for a segment detail record
 * @interface SegmentDetailRecord
 * @memberof ListSegments
 */
export interface SegmentDetailRecord {
	segment_uid: string;
	name: string;
	operator_match: string;
	subscribers_count: number;
	conditions: SegmentCondition[];
	date_added: string;
}

/**
 * @description Interface for a segment condition
 * @interface SegmentCondition
 * @memberof ListSegments
 */
export interface SegmentCondition {
	field_id: number;
	operator_id: number;
	value: string;
}

/**
 * @description Interface for the parameters of the API call to get segment subscribers
 * @interface GetSegmentSubscribersParams
 * @memberof ListSegments
 */
export interface GetSegmentSubscribersParams {
	listUid: string;
	segmentUid: string;
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get segment subscribers
 * @interface GetSegmentSubscribersResponse
 * @memberof ListSegments
 */
export interface GetSegmentSubscribersResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: SegmentSubscriberRecord[];
	};
}

/**
 * @description Interface for a segment subscriber record
 * @interface SegmentSubscriberRecord
 * @memberof ListSegments
 */
export interface SegmentSubscriberRecord {
	subscriber_uid: string;
	EMAIL: string;
	status: string;
	source: string;
	ip_address: string;
	date_added: string;
	[key: string]: any;
}

/**
 * @description Interface for the parameters of the API call to create a segment
 * @interface CreateSegmentParams
 * @memberof ListSegments
 */
export interface CreateSegmentParams {
	listUid: string;
	name: string;
	operatorMatch: "any" | "all";
	conditions: CreateSegmentCondition[];
}

/**
 * @description Interface for a segment condition when creating
 * @interface CreateSegmentCondition
 * @memberof ListSegments
 */
export interface CreateSegmentCondition {
	field_id: number;
	operator_id: number;
	value: string;
}

/**
 * @description Interface for the response of the API call to create a segment
 * @interface CreateSegmentResponse
 * @memberof ListSegments
 */
export interface CreateSegmentResponse {
	status: string;
	data: {
		record: {
			segment_uid: string;
		};
	};
}

/**
 * @description Interface for the parameters of the API call to update a segment
 * @interface UpdateSegmentParams
 * @memberof ListSegments
 */
export interface UpdateSegmentParams {
	listUid: string;
	segmentUid: string;
	name?: string;
	operatorMatch?: "any" | "all";
	conditions?: CreateSegmentCondition[];
}

/**
 * @description Interface for the response of the API call to update a segment
 * @interface UpdateSegmentResponse
 * @memberof ListSegments
 */
export interface UpdateSegmentResponse {
	status: string;
	data: {
		record: {
			segment_uid: string;
		};
	};
}

/**
 * @description Interface for the parameters of the API call to delete a segment
 * @interface DeleteSegmentParams
 * @memberof ListSegments
 */
export interface DeleteSegmentParams {
	listUid: string;
	segmentUid: string;
}

/**
 * @description Interface for the response of the API call to delete a segment
 * @interface DeleteSegmentResponse
 * @memberof ListSegments
 */
export interface DeleteSegmentResponse {
	status: string;
}

/**
 * @description Interface for the response of the API call to get condition operators
 * @interface GetConditionOperatorsResponse
 * @memberof ListSegments
 */
export interface GetConditionOperatorsResponse {
	status: string;
	data: {
		records: ConditionOperatorRecord[];
	};
}

/**
 * @description Interface for a condition operator record
 * @interface ConditionOperatorRecord
 * @memberof ListSegments
 */
export interface ConditionOperatorRecord {
	operator_id: number;
	name: string;
	slug: string;
}
