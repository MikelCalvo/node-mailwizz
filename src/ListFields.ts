import Request from "./Request";
import { Config } from "./types/Config";
import {
	GetFieldsParams,
	GetFieldsResponse,
	GetFieldParams,
	GetFieldResponse,
	CreateFieldParams,
	CreateFieldResponse,
	UpdateFieldParams,
	UpdateFieldResponse,
	DeleteFieldParams,
	DeleteFieldResponse,
	GetFieldTypesResponse
} from "./types/ListFields";

class ListFields extends Request {
	/**
	 * @description Creates an instance of ListFields.
	 * @see https://api-docs.mailwizz.com/#list-fields
	 * @memberof ListFields
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Get all fields of a list
	 * @param {GetFieldsParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @returns {Promise<GetFieldsResponse>} - Promise of the response
	 * @memberof ListFields
	 * @see https://api-docs.mailwizz.com/#get-all-list-fields
	 */
	getFields({ listUid }: GetFieldsParams): Promise<GetFieldsResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/fields`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Get a specific field of a list
	 * @param {GetFieldParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.fieldUid - Field UID
	 * @returns {Promise<GetFieldResponse>} - Promise of the response
	 * @memberof ListFields
	 * @see https://api-docs.mailwizz.com/#get-a-list-field
	 */
	getField({ listUid, fieldUid }: GetFieldParams): Promise<GetFieldResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/fields/${fieldUid}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Create a field for a list
	 * @param {CreateFieldParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.type - Field type identifier
	 * @param {string} params.label - Field label
	 * @param {string} params.tag - Field tag
	 * @param {string} [params.required] - Required (yes/no)
	 * @param {string} [params.visibility] - Visibility
	 * @param {number} [params.sortOrder] - Sort order
	 * @param {string} [params.defaultValue] - Default value
	 * @param {string} [params.helpText] - Help text
	 * @param {number} [params.minLength] - Minimum length
	 * @param {number} [params.maxLength] - Maximum length
	 * @param {string} [params.contentRule] - Content rule
	 * @param {Record<string, string>} [params.options] - Options for dropdown/radio fields
	 * @returns {Promise<CreateFieldResponse>} - Promise of the response
	 * @memberof ListFields
	 * @see https://api-docs.mailwizz.com/#create-a-list-field
	 */
	create({
		listUid,
		type,
		label,
		tag,
		required,
		visibility,
		sortOrder,
		defaultValue,
		helpText,
		minLength,
		maxLength,
		contentRule,
		options
	}: CreateFieldParams): Promise<CreateFieldResponse> {
		const data: Record<string, any> = {
			type: { identifier: type },
			label: label,
			tag: tag
		};

		if (required) data.required = required;
		if (visibility) data.visibility = visibility;
		if (sortOrder !== undefined) data.sort_order = sortOrder;
		if (defaultValue) data.default_value = defaultValue;
		if (helpText) data.help_text = helpText;
		if (minLength !== undefined) data.min_length = minLength;
		if (maxLength !== undefined) data.max_length = maxLength;
		if (contentRule) data.content_rule = contentRule;
		if (options) data.options = options;

		this.method = Request.Type.POST;
		this.url = `/lists/${listUid}/fields`;
		this.data = { field: data };

		return this.send();
	}

	/**
	 * @description Update a field of a list
	 * @param {UpdateFieldParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.fieldUid - Field UID
	 * @param {string} [params.label] - Field label
	 * @param {string} [params.tag] - Field tag
	 * @param {string} [params.required] - Required (yes/no)
	 * @param {string} [params.visibility] - Visibility
	 * @param {number} [params.sortOrder] - Sort order
	 * @param {string} [params.defaultValue] - Default value
	 * @param {string} [params.helpText] - Help text
	 * @returns {Promise<UpdateFieldResponse>} - Promise of the response
	 * @memberof ListFields
	 * @see https://api-docs.mailwizz.com/#update-a-list-field
	 */
	update({
		listUid,
		fieldUid,
		label,
		tag,
		required,
		visibility,
		sortOrder,
		defaultValue,
		helpText
	}: UpdateFieldParams): Promise<UpdateFieldResponse> {
		const data: Record<string, any> = {};

		if (label) data.label = label;
		if (tag) data.tag = tag;
		if (required) data.required = required;
		if (visibility) data.visibility = visibility;
		if (sortOrder !== undefined) data.sort_order = sortOrder;
		if (defaultValue) data.default_value = defaultValue;
		if (helpText) data.help_text = helpText;

		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/fields/${fieldUid}`;
		this.data = { field: data };

		return this.send();
	}

	/**
	 * @description Delete a field from a list
	 * @param {DeleteFieldParams} params - Params of the request
	 * @param {string} params.listUid - List UID
	 * @param {string} params.fieldUid - Field UID
	 * @returns {Promise<DeleteFieldResponse>} - Promise of the response
	 * @memberof ListFields
	 * @see https://api-docs.mailwizz.com/#delete-a-list-field
	 */
	delete({
		listUid,
		fieldUid
	}: DeleteFieldParams): Promise<DeleteFieldResponse> {
		this.method = Request.Type.DELETE;
		this.url = `/lists/${listUid}/fields/${fieldUid}`;

		return this.send();
	}

	/**
	 * @description Get all available field types
	 * @returns {Promise<GetFieldTypesResponse>} - Promise of the response
	 * @memberof ListFields
	 * @see https://api-docs.mailwizz.com/#get-all-list-field-types
	 */
	getFieldTypes(): Promise<GetFieldTypesResponse> {
		this.method = Request.Type.GET;
		this.url = `/lists/fields/types`;
		this.data = {};

		return this.send();
	}
}

export default ListFields;
