/**
 * @description Interface for the parameters of the API call to create a transactional email
 * @interface CreateTransactionalEmailParams
 * @property {string} toName - Recipient name
 * @property {string} toEmail - Recipient email
 * @property {string} fromName - Sender name
 * @property {string} fromEmail - Sender email
 * @property {string} subject - Email subject
 * @property {string} body - Email body
 * @property {string} sendAt - UTC datetime (Y-m-d H:i:s format)
 * @property {string} plainText - Email plain text. Auto generated if missing
 * @property {string} replyToName - Reply to name
 * @property {string} replyToEmail - Reply to email
 * @memberof TransactionEmail
 * @see https://api-docs.mailwizz.com/#create-a-transactional-email
 */
export interface CreateTransactionalEmailParams {
	toName: string;
	toEmail: string;
	fromName: string;
	fromEmail: string;
	subject: string;
	body: string;
	sendAt: string;
	plainText?: string;
	replyToName?: string;
	replyToEmail?: string;
}

/**
 * @description Interface for the response of the API call to create a transactional email
 * @interface CreateTransactionalEmailResponse
 * @property {string} status - Status of the response
 * @property {string} email_uid - Email UID of the response
 * @memberof TransactionEmail
 * @see https://api-docs.mailwizz.com/#create-a-transactional-email
 */
export interface CreateTransactionalEmailResponse {
	status: string;
	email_uid: string;
}
