/**
 * EmailData interface
 * @exports EmailData
 * @interface EmailData
 * @param {string} to_name - To name
 * @param {string} to_email - To email
 * @param {string} from_name - From name
 * @param {string} reply_to_email - Reply to email
 * @param {string} reply_to_name - Reply to name
 * @param {string} subject - Subject
 * @param {string} send_at - Send at
 * @param {string} body - Body
 * @param {string} plain_text - Plain text
 * 
 */

export default interface EmailData {
    to_name: string;
    to_email: string;
    from_name: string;
    reply_to_email: string;
    reply_to_name: string;
    subject: string;
    send_at: string;
    body?: string;
    plain_text?: string;
}