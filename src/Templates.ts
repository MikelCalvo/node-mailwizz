import Request from "./Request";
import { Config } from "./types/Config";
import {
	GetAllTemplatesParams,
	GetAllTemplatesResponse,
	GetTemplateParams,
	GetTemplateResponse
} from "./types/Templates";

const path: string = "/templates";

class Templates extends Request {
	/**
	 * @description Creates an instance of Templates.
	 * @see https://api-docs.mailwizz.com/#templates
	 * @memberof Templates
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Get all templates
	 * @param {GetAllTemplatesParams} params - Params of the request
	 * @param {number} params.page - Page of the response
	 * @param {number} params.per_page - Items per page of the response
	 * @returns {Promise<GetAllTemplatesResponse>} - Promise of the response
	 * @memberof Templates
	 * @see https://api-docs.mailwizz.com/#get-all-templates
	 */
	getTemplates({
		page,
		per_page
	}: GetAllTemplatesParams): Promise<GetAllTemplatesResponse> {
		this.url = path;
		this.method = Request.Type.GET;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Get a template by UID
	 * @param {GetTemplateParams} params - Params of the request
	 * @param {string} params.templateUid - Template UID
	 * @returns {Promise<GetTemplateResponse>} - Promise of the response
	 * @memberof Templates
	 * @see https://api-docs.mailwizz.com/#get-a-template
	 */
	getTemplate({
		templateUid
	}: GetTemplateParams): Promise<GetTemplateResponse> {
		this.method = Request.Type.GET;
		this.url = `${path}/${templateUid}`;
		this.data = {};

		return this.send();
	}
}

export default Templates;
