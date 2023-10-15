/**
 * ListInfo.ts
 * @exports ListInfo
 * @interface ListInfo
 * @param {string} name - List name
 * @param {string} description - List description
 * @param {string} optIn - Opt in
 * @param {string} optOut - Opt out
 * @param {string} fromName - From name
 * @param {string} fromEmail - From email
 * @param {string} replyTo - Reply to
 * @param {string} subject - Subject
 * @param {string} notificationSubscribe - Notification subscribe
 * @param {string} notificationUnsubscribe - Notification unsubscribe
 * @param {string} notificationSubscribeTo - Notification subscribe to
 * @param {string} notificationUnsubscribeTo - Notification unsubscribe to
 * @param {string} companyName - Company name
 * @param {string} companyCountry - Company country
 * @param {string} companyZone - Company zone
 * @param {string} companyAddress1 - Company address 1
 * @param {string} companyAddress2 - Company address 2
 * @param {string} companyZoneName - Company zone name
 * @param {string} companyCity - Company city
 * @param {string} companyZipCode - Company zip code
 * 
 */

export default interface ListInfo {
    name: string;
    description: string;
    optIn?: string;
    optOut?: string;
    fromName: string;
    fromEmail: string;
    replyTo: string;
    subject?: string;
    notificationSubscribe?: string;
    notificationUnsubscribe?: string;
    notificationSubscribeTo?: string;
    notificationUnsubscribeTo?: string;
    companyName?: string;
    companyCountry?: string;
    companyZone?: string;
    companyAddress1?: string;
    companyAddress2?: string | null;
    companyZoneName?: string | null;
    companyCity?: string | null;
    companyZipCode?: string | null;
}