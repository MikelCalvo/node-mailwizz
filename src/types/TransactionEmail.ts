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

/**
 * @description Interface for the parameters of the API call to get all transactional emails
 * @interface GetAllTransactionalEmailsParams
 * @memberof TransactionEmail
 */
export interface GetAllTransactionalEmailsParams {
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all transactional emails
 * @interface GetAllTransactionalEmailsResponse
 * @memberof TransactionEmail
 */
export interface GetAllTransactionalEmailsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: TransactionalEmailRecord[];
	};
}

/**
 * @description Interface for a transactional email record
 * @interface TransactionalEmailRecord
 * @memberof TransactionEmail
 */
export interface TransactionalEmailRecord {
	email_uid: string;
	to_email: string;
	to_name: string;
	from_email: string;
	from_name: string;
	subject: string;
	status: string;
	date_added: string;
}

/**
 * @description Interface for the parameters of the API call to get a transactional email
 * @interface GetTransactionalEmailParams
 * @memberof TransactionEmail
 */
export interface GetTransactionalEmailParams {
	emailUid: string;
}

/**
 * @description Interface for the response of the API call to get a transactional email
 * @interface GetTransactionalEmailResponse
 * @memberof TransactionEmail
 */
export interface GetTransactionalEmailResponse {
	status: string;
	data: {
		record: TransactionalEmailDetailRecord;
	};
}

/**
 * @description Interface for a transactional email detail record
 * @interface TransactionalEmailDetailRecord
 * @memberof TransactionEmail
 */
export interface TransactionalEmailDetailRecord {
	email_uid: string;
	to_email: string;
	to_name: string;
	from_email: string;
	from_name: string;
	reply_to_email: string;
	reply_to_name: string;
	subject: string;
	body: string;
	plain_text: string;
	status: string;
	date_added: string;
	send_at: string;
}

/**
 * @description Interface for the parameters of the API call to delete a transactional email
 * @interface DeleteTransactionalEmailParams
 * @memberof TransactionEmail
 */
export interface DeleteTransactionalEmailParams {
	emailUid: string;
}

/**
 * @description Interface for the response of the API call to delete a transactional email
 * @interface DeleteTransactionalEmailResponse
 * @memberof TransactionEmail
 */
export interface DeleteTransactionalEmailResponse {
	status: string;
}
