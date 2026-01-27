import Request from "./Request";
import { Config } from "./types/Config";
import {
	GetAllTemplatesParams,
	GetAllTemplatesResponse,
	GetTemplateParams,
	GetTemplateResponse,
	SearchTemplatesParams,
	CreateTemplateParams,
	CreateTemplateResponse,
	UpdateTemplateParams,
	UpdateTemplateResponse,
	DeleteTemplateParams,
	DeleteTemplateResponse
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

	/**
	 * @description Search templates with filters
	 * @param {SearchTemplatesParams} params - Params of the request
	 * @param {number} [params.page] - Page of the response
	 * @param {number} [params.per_page] - Items per page of the response
	 * @param {string} [params.name] - Filter by template name
	 * @returns {Promise<GetAllTemplatesResponse>} - Promise of the response
	 * @memberof Templates
	 * @see https://api-docs.mailwizz.com/#search-templates
	 */
	search({
		page,
		per_page,
		name
	}: SearchTemplatesParams = {}): Promise<GetAllTemplatesResponse> {
		this.url = path;
		this.method = Request.Type.GET;
		this.data = {
			page: page,
			per_page: per_page,
			name: name
		};

		return this.send();
	}

	/**
	 * @description Create a template
	 * @param {CreateTemplateParams} params - Params of the request
	 * @param {string} params.name - Template name
	 * @param {string} params.content - Template content (HTML)
	 * @param {string} [params.inlineCss] - Inline CSS (yes/no)
	 * @param {string} [params.minify] - Minify (yes/no)
	 * @returns {Promise<CreateTemplateResponse>} - Promise of the response
	 * @memberof Templates
	 * @see https://api-docs.mailwizz.com/#create-a-template
	 */
	create({
		name,
		content,
		inlineCss,
		minify
	}: CreateTemplateParams): Promise<CreateTemplateResponse> {
		const data: Record<string, any> = {
			name: name,
			content: content
		};

		if (inlineCss) data.inline_css = inlineCss;
		if (minify) data.minify = minify;

		this.method = Request.Type.POST;
		this.url = path;
		this.data = { template: data };

		return this.send();
	}

	/**
	 * @description Update a template
	 * @param {UpdateTemplateParams} params - Params of the request
	 * @param {string} params.templateUid - Template UID
	 * @param {string} [params.name] - Template name
	 * @param {string} [params.content] - Template content (HTML)
	 * @param {string} [params.inlineCss] - Inline CSS (yes/no)
	 * @param {string} [params.minify] - Minify (yes/no)
	 * @returns {Promise<UpdateTemplateResponse>} - Promise of the response
	 * @memberof Templates
	 * @see https://api-docs.mailwizz.com/#update-a-template
	 */
	update({
		templateUid,
		name,
		content,
		inlineCss,
		minify
	}: UpdateTemplateParams): Promise<UpdateTemplateResponse> {
		const data: Record<string, any> = {};

		if (name) data.name = name;
		if (content) data.content = content;
		if (inlineCss) data.inline_css = inlineCss;
		if (minify) data.minify = minify;

		this.method = Request.Type.PUT;
		this.url = `${path}/${templateUid}`;
		this.data = { template: data };

		return this.send();
	}

	/**
	 * @description Delete a template
	 * @param {DeleteTemplateParams} params - Params of the request
	 * @param {string} params.templateUid - Template UID
	 * @returns {Promise<DeleteTemplateResponse>} - Promise of the response
	 * @memberof Templates
	 * @see https://api-docs.mailwizz.com/#delete-a-template
	 */
	delete({
		templateUid
	}: DeleteTemplateParams): Promise<DeleteTemplateResponse> {
		this.method = Request.Type.DELETE;
		this.url = `${path}/${templateUid}`;

		return this.send();
	}
}

export default Templates;
