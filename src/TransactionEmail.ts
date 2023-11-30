import Request from "./Request";
import { base64Encode } from "./utils/encrypt";
import {
	CreateTransactionalEmailParams,
	CreateTransactionalEmailResponse
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
			return Promise.reject("ParamInvalid");
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
}

export default TransactionEmail;
