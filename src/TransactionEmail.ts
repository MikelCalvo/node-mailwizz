import Config from "./types/Config";
import EmailData from "./types/EmailData";
import Request from "./Request";
import { base64Encode } from "../src/utils/encrypt";

const path: string = "./src/TransactionEmail";

class TransactionEmail extends Request {
	constructor(config: Config) {
		super(config);
	}

	/**
	 *
	 * @param toName
	 * @param toEmail
	 * @param fromName
	 * @param fromEmail
	 * @param replyToName
	 * @param replyToEmail
	 * @param subject
	 * @param body
	 * @param plainText
	 * @param sendAt
	 */

	create(
		toName: string,
		toEmail: string,
		fromName: string,
		fromEmail: string,
		replyToName: string,
		replyToEmail: string,
		subject: string,
		body: string,
		plainText: string,
		sendAt: string
	): Promise<any> {
		if (!toName || !toEmail || !fromName || !subject || !body || !sendAt) {
			return Promise.reject("ParamInvalid");
		}

		let data: EmailData = {
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
