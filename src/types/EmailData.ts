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