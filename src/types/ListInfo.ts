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