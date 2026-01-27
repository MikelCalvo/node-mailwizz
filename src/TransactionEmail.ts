import Request from "./Request";
import { base64Encode } from "./utils/encrypt";
import {
	CreateTransactionalEmailParams,
	CreateTransactionalEmailResponse,
	GetAllTransactionalEmailsParams,
	GetAllTransactionalEmailsResponse,
	GetTransactionalEmailParams,
	GetTransactionalEmailResponse,
	DeleteTransactionalEmailParams,
	DeleteTransactionalEmailResponse
} from "./types/TransactionEmail";
import { Config } from "./types/Config";

const path: string = "/transactional-emails";

class TransactionEmail extends Request {
	/**
	 * @description Creates an instance of TransactionEmail.
	 * @see https://api-docs.mailwizz.com/#transactional-emails
	 * @memberof TransactionEmail
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Create a transactional email
	 * @param {CreateTransactionalEmailParams} params - Params of the request
	 * @param {string} params.toName - Name of the recipient
	 * @param {string} params.toEmail - Email of the recipient
	 * @param {string} params.fromName - Name of the sender
	 * @param {string} params.subject - Subject of the email
	 * @param {string} params.body - Body of the email
	 * @param {string} params.sendAt - UTC datetime (Y-m-d H:i:s format)
	 * @param {string} params.plainText - Plain text of the email
	 * @param {string} params.replyToName - Reply to name
	 * @param {string} params.replyToEmail - Reply to email
	 * @returns {Promise<CreateTransactionalEmailResponse>} - Promise of the response
	 * @memberof TransactionEmail
	 * @see https://api-docs.mailwizz.com/#create-a-transactional-email
	 */
	create({
		toName,
		toEmail,
		fromName,
		subject,
		body,
		plainText,
		sendAt,
		replyToName,
		replyToEmail
	}: CreateTransactionalEmailParams): Promise<CreateTransactionalEmailResponse> {
		if (!toName || !toEmail || !fromName || !subject || !body || !sendAt) {
			return Promise.reject(
				new Error("ParamInvalid: Missing required parameters")
			);
		}

		let data: any = {
			to_name: toName,
			to_email: toEmail,
			from_name: fromName,
			reply_to_email: replyToEmail,
			reply_to_name: replyToName,
			subject: subject,
			send_at: sendAt
		};

		if (body) data.body = base64Encode(body);
		if (plainText) data.plain_text = base64Encode(plainText);

		this.url = path;
		this.method = Request.Type.POST;
		this.data = { email: data };

		return this.send();
	}

	/**
	 * @description Get all transactional emails
	 * @param {GetAllTransactionalEmailsParams} params - Params of the request
	 * @param {number} [params.page] - Page number
	 * @param {number} [params.per_page] - Items per page
	 * @returns {Promise<GetAllTransactionalEmailsResponse>} - Promise of the response
	 * @memberof TransactionEmail
	 * @see https://api-docs.mailwizz.com/#get-all-transactional-emails
	 */
	getAll({
		page,
		per_page
	}: GetAllTransactionalEmailsParams = {}): Promise<GetAllTransactionalEmailsResponse> {
		this.method = Request.Type.GET;
		this.url = path;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Get a transactional email by UID
	 * @param {GetTransactionalEmailParams} params - Params of the request
	 * @param {string} params.emailUid - Email UID
	 * @returns {Promise<GetTransactionalEmailResponse>} - Promise of the response
	 * @memberof TransactionEmail
	 * @see https://api-docs.mailwizz.com/#get-one-transactional-email
	 */
	getOne({
		emailUid
	}: GetTransactionalEmailParams): Promise<GetTransactionalEmailResponse> {
		this.method = Request.Type.GET;
		this.url = `${path}/${emailUid}`;
		this.data = {};

		return this.send();
	}

	/**
	 * @description Delete a transactional email
	 * @param {DeleteTransactionalEmailParams} params - Params of the request
	 * @param {string} params.emailUid - Email UID
	 * @returns {Promise<DeleteTransactionalEmailResponse>} - Promise of the response
	 * @memberof TransactionEmail
	 * @see https://api-docs.mailwizz.com/#delete-a-transactional-email
	 */
	delete({
		emailUid
	}: DeleteTransactionalEmailParams): Promise<DeleteTransactionalEmailResponse> {
		this.method = Request.Type.DELETE;
		this.url = `${path}/${emailUid}`;

		return this.send();
	}
}

export default TransactionEmail;
