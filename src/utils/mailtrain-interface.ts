declare module "mailtrain-interface" {

    interface Config {
        publicKey: string;
        secret: string;
        baseUrl: string;
    }

    interface CampaignInfo {
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

    interface ListInfo {
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

    interface EmailData {
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
    
}