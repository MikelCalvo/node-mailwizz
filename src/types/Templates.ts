/**
 * @description Interface for the parameters of the API call to get all the templates
 * @interface GetAllTemplatesParams
 * @property {number} page - Page of the response
 * @property {number} per_page - Items per page of the response
 * @memberof Templates
 * @see https://api-docs.mailwizz.com/#get-all-templates
 */
export interface GetAllTemplatesParams {
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all the templates
 * @interface GetAllTemplatesResponse
 * @property {string} status - Status of the response
 * @property {GetAllTemplatesResponseData} data - Data of the response
 * @property {GetAllTemplatesResponseRecord[]} data.records - Records of the response
 * @memberof Templates
 * @see https://api-docs.mailwizz.com/#get-all-templates
 * @memberof Templates
 */
export interface GetAllTemplatesResponse {
	status: string;
	data: {
		records: GetAllTemplatesResponseRecord[];
	};
}

/**
 * @description Interface for the response of the API call to get all the templates
 * @interface GetAllTemplatesResponseRecord
 * @property {string} template_uid - Template UID
 * @property {string} name - Template Name
 * @property {string} screenshot - Template Screenshot
 * @memberof Templates
 * @see https://api-docs.mailwizz.com/#get-all-templates
 */
export interface GetAllTemplatesResponseRecord {
	template_uid: string;
	name: string;
	screenshot: string;
}

/**
 * @description Interface for the parameters of the API call to get a template by UID
 * @interface GetTemplateParams
 * @property {string} templateUid - Template UID
 * @memberof Templates
 * @see https://api-docs.mailwizz.com/#get-a-template
 */
export interface GetTemplateParams {
	templateUid: string;
}

/**
 * @description Interface for the response of the API call to get a template by UID
 * @interface GetTemplateResponse
 * @property {string} status - Status of the response
 * @property {GetTemplateResponseData} data - Data of the response
 * @property {GetTemplateResponseRecord} data.record - Record of the response
 * @memberof Templates
 * @see https://api-docs.mailwizz.com/#get-a-template
 */
export interface GetTemplateResponse {
	status: string;
	data: {
		record: GetTemplateResponseRecord;
	};
}

/**
 * @description Interface for the response of the API call to get a template by UID
 * @interface GetTemplateResponseRecord
 * @property {string} name - Template Name
 * @property {string} content - Template Content
 * @property {string} screenshot - Template Screenshot
 * @memberof Templates
 * @see https://api-docs.mailwizz.com/#get-a-template
 */
export interface GetTemplateResponseRecord {
	name: string;
	content: string;
	screenshot: string;
}
