/**
 * CampaignInfo.ts
 * @exports CampaignInfo
 * @interface CampaignInfo
 * @param {string} name - Campaign name
 * @param {string} type - Campaign type
 * @param {string} fromName - Sender name
 * @param {string} fromEmail - Sender email
 * @param {string} subject - Subject
 * @param {string} replyTo - Reply to
 * @param {string} sendAt - Send at
 * @param {string} listId - List id
 * @param {string} segmentId - Segment id
 * @param {string} urlTracking - Url tracking
 * @param {string} templateId - Template id
 * 
 */

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