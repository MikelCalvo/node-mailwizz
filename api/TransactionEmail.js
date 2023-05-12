let Request = require("./Request");
let base64Encode = require("../utils/encrypt").base64Encode;

const path = "/transactional-emails";

class TransactionEmail extends Request {
	constructor(config) {
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
		toName,
		toEmail,
		fromName,
		fromEmail,
		replyToName,
		replyToEmail,
		subject,
		body,
		plainText,
		sendAt
	) {
		if (!toName || !toEmail || !fromName || !subject || !body || !sendAt) {
			return Promise.reject("ParamInvalid");
		}

		let data = {
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

module.exports = TransactionEmail;
