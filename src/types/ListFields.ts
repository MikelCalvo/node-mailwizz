/**
 * @description Interface for the parameters of the API call to get all fields of a list
 * @interface GetFieldsParams
 * @memberof ListFields
 */
export interface GetFieldsParams {
	listUid: string;
}

/**
 * @description Interface for the response of the API call to get all fields
 * @interface GetFieldsResponse
 * @memberof ListFields
 */
export interface GetFieldsResponse {
	status: string;
	data: {
		records: FieldRecord[];
	};
}

/**
 * @description Interface for a field record
 * @interface FieldRecord
 * @memberof ListFields
 */
export interface FieldRecord {
	field_uid: string;
	tag: string;
	label: string;
	required: string;
	visibility: string;
	sort_order: number;
	type: FieldType;
}

/**
 * @description Interface for field type
 * @interface FieldType
 * @memberof ListFields
 */
export interface FieldType {
	name: string;
	identifier: string;
}

/**
 * @description Interface for the parameters of the API call to get a field
 * @interface GetFieldParams
 * @memberof ListFields
 */
export interface GetFieldParams {
	listUid: string;
	fieldUid: string;
}

/**
 * @description Interface for the response of the API call to get a field
 * @interface GetFieldResponse
 * @memberof ListFields
 */
export interface GetFieldResponse {
	status: string;
	data: {
		record: FieldRecord;
	};
}

/**
 * @description Interface for the parameters of the API call to create a field
 * @interface CreateFieldParams
 * @memberof ListFields
 */
export interface CreateFieldParams {
	listUid: string;
	type: string;
	label: string;
	tag: string;
	required?: string;
	visibility?: string;
	sortOrder?: number;
	defaultValue?: string;
	helpText?: string;
	minLength?: number;
	maxLength?: number;
	contentRule?: string;
	options?: Record<string, string>;
}

/**
 * @description Interface for the response of the API call to create a field
 * @interface CreateFieldResponse
 * @memberof ListFields
 */
export interface CreateFieldResponse {
	status: string;
	data: {
		record: {
			field_uid: string;
		};
	};
}

/**
 * @description Interface for the parameters of the API call to update a field
 * @interface UpdateFieldParams
 * @memberof ListFields
 */
export interface UpdateFieldParams {
	listUid: string;
	fieldUid: string;
	label?: string;
	tag?: string;
	required?: string;
	visibility?: string;
	sortOrder?: number;
	defaultValue?: string;
	helpText?: string;
}

/**
 * @description Interface for the response of the API call to update a field
 * @interface UpdateFieldResponse
 * @memberof ListFields
 */
export interface UpdateFieldResponse {
	status: string;
	data: {
		record: {
			field_uid: string;
		};
	};
}

/**
 * @description Interface for the parameters of the API call to delete a field
 * @interface DeleteFieldParams
 * @memberof ListFields
 */
export interface DeleteFieldParams {
	listUid: string;
	fieldUid: string;
}

/**
 * @description Interface for the response of the API call to delete a field
 * @interface DeleteFieldResponse
 * @memberof ListFields
 */
export interface DeleteFieldResponse {
	status: string;
}

/**
 * @description Interface for the response of the API call to get field types
 * @interface GetFieldTypesResponse
 * @memberof ListFields
 */
export interface GetFieldTypesResponse {
	status: string;
	data: {
		records: FieldTypeRecord[];
	};
}

/**
 * @description Interface for a field type record
 * @interface FieldTypeRecord
 * @memberof ListFields
 */
export interface FieldTypeRecord {
	name: string;
	identifier: string;
	description: string;
}
