export default interface CampaignInfo {
    name: string;
    type?: string;
    fromName: string;
    fromEmail: string;
    subject: string;
    replyTo: string;
    sendAt: string;
    listId: string;
    segmentId?: string;
    urlTracking?: string;
    templateId: string;
}