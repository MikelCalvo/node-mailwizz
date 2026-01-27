import Request from "./Request";
import { Config } from "./types/Config";
import {
	GetSegmentsParams,
	GetSegmentsResponse,
	GetSegmentParams,
	GetSegmentResponse,
	GetSegmentSubscribersParams,
	GetSegmentSubscribersResponse,
	CreateSegmentParams,
	CreateSegmentResponse,
	UpdateSegmentParams,
	UpdateSegmentResponse,
	DeleteSegmentParams,
	DeleteSegmentResponse,
	GetConditionOperatorsResponse
} from "./types/ListSegments";

class ListSegments extends Request {
	/**
	 * @description Creates an instance of ListSegments.
	 * @see https://api-docs.mailwizz.com/#list-segments
	 * @memberof ListSegments
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Get all segments of a list
	 * @param {GetSegmentsParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {number} [params.page] - Page number
	 * @param {number} [params.per_page] - Items per page
	 * @returns {Promise<GetSegmentsResponse>} - Promise of the response
	 * @memberof ListSegments
	 * @see https://api-docs.mailwizz.com/#get-all-list-segments
	 */
	getSegments({
		listUid,
		page,
		per_page
	}: GetSegmentsParams): Promise<GetSegmentsResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/segments`;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Get a specific segment of a list
	 * @param {GetSegmentParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.segmentUid - Segment UID
	 * @returns {Promise<GetSegmentResponse>} - Promise of the response
	 * @memberof ListSegments
	 * @see https://api-docs.mailwizz.com/#get-one-list-segment
	 */
	getSegment({
		listUid,
		segmentUid
	}: GetSegmentParams): Promise<GetSegmentResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/segments/${segmentUid}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Get subscribers of a segment
	 * @param {GetSegmentSubscribersParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.segmentUid - Segment UID
	 * @param {number} [params.page] - Page number
	 * @param {number} [params.per_page] - Items per page
	 * @returns {Promise<GetSegmentSubscribersResponse>} - Promise of the response
	 * @memberof ListSegments
	 * @see https://api-docs.mailwizz.com/#get-subscribers-from-a-list-segment
	 */
	getSubscribers({
		listUid,
		segmentUid,
		page,
		per_page
	}: GetSegmentSubscribersParams): Promise<GetSegmentSubscribersResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/segments/${segmentUid}/subscribers`;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Create a segment for a list
	 * @param {CreateSegmentParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.name - Segment name
	 * @param {string} params.operatorMatch - Operator match (any/all)
	 * @param {CreateSegmentCondition[]} params.conditions - Segment conditions
	 * @returns {Promise<CreateSegmentResponse>} - Promise of the response
	 * @memberof ListSegments
	 * @see https://api-docs.mailwizz.com/#create-a-list-segment
	 */
	create({
		listUid,
		name,
		operatorMatch,
		conditions
	}: CreateSegmentParams): Promise<CreateSegmentResponse> {
		const data: Record<string, any> = {
			name: name,
			operator_match: operatorMatch,
			conditions: conditions
		};

		this.method = Request.Type.POST;
		this.url = `/lists/${listUid}/segments`;
		this.data = { segment: data };

		return this.send();
	}

	/**
	 * @description Update a segment of a list
	 * @param {UpdateSegmentParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.segmentUid - Segment UID
	 * @param {string} [params.name] - Segment name
	 * @param {string} [params.operatorMatch] - Operator match (any/all)
	 * @param {CreateSegmentCondition[]} [params.conditions] - Segment conditions
	 * @returns {Promise<UpdateSegmentResponse>} - Promise of the response
	 * @memberof ListSegments
	 * @see https://api-docs.mailwizz.com/#update-a-list-segment
	 */
	update({
		listUid,
		segmentUid,
		name,
		operatorMatch,
		conditions
	}: UpdateSegmentParams): Promise<UpdateSegmentResponse> {
		const data: Record<string, any> = {};

		if (name) data.name = name;
		if (operatorMatch) data.operator_match = operatorMatch;
		if (conditions) data.conditions = conditions;

		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/segments/${segmentUid}`;
		this.data = { segment: data };

		return this.send();
	}

	/**
	 * @description Delete a segment from a list
	 * @param {DeleteSegmentParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.segmentUid - Segment UID
	 * @returns {Promise<DeleteSegmentResponse>} - Promise of the response
	 * @memberof ListSegments
	 * @see https://api-docs.mailwizz.com/#delete-a-list-segment
	 */
	delete({
		listUid,
		segmentUid
	}: DeleteSegmentParams): Promise<DeleteSegmentResponse> {
		this.method = Request.Type.DELETE;
		this.url = `/lists/${listUid}/segments/${segmentUid}`;

		return this.send();
	}

	/**
	 * @description Get all available condition operators
	 * @returns {Promise<GetConditionOperatorsResponse>} - Promise of the response
	 * @memberof ListSegments
	 * @see https://api-docs.mailwizz.com/#get-segment-condition-operators
	 */
	getConditionOperators(): Promise<GetConditionOperatorsResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/segments/condition-operators`;
		this.data = {};

		return this.send();
	}
}

export default ListSegments;
