"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("./Request"));
const path = "./src/api/lists";
class Lists extends Request_1.default {
    constructor(config) {
        super(config);
    }
    getLists(page, perPage) {
        this.method = Request_1.default.Type.GET;
        this.url = path;
        this.data = {
            page: page,
            per_page: perPage
        };
        return this.send();
    }
    getList(listUid) {
        this.method = Request_1.default.Type.GET;
        this.url = `${path}/${listUid}`;
        this.data = {};
        return this.send();
    }
    create(info) {
        let postData = {
            //required
            general: {
                name: info.name,
                description: info.description,
                opt_in: info.optIn || "single",
                opt_out: info.optOut || "single"
            },
            //required
            defaults: {
                from_name: info.fromName,
                from_email: info.fromEmail,
                reply_to: info.replyTo,
                subject: info.subject || ""
            },
            notifications: {
                //notification when new subscriber added
                subscribe: info.notificationSubscribe || "no",
                unsubscribe: info.notificationUnsubscribe || "no",
                //where to send the notification
                subscribe_to: info.notificationSubscribeTo || "",
                unsubscribe_to: info.notificationUnsubscribeTo || ""
            },
            company: {
                name: info.companyName || null,
                country: info.companyCountry || null,
                zone: info.companyZone || null,
                address_1: info.companyAddress1 || null,
                address_2: info.companyAddress2 || null,
                zone_name: info.companyZoneName || null,
                city: info.companyCity || null,
                zip_code: info.companyZipCode || null
            }
        };
        // if (info.notificationSubscribe
        //     && info.notificationUnsubscribe
        //     && ['yes', 'no'].indexOf(info.notificationSubscribe) > -1
        //     && ['yes', 'no'].indexOf(info.notificationUnsubscribe) > -1 ) {
        //
        //     postData.notifications = {
        //         //notification when new subscriber added
        //         subscribe: info.notificationSubscribe, //'yes'|'no'
        //         unsubscribe: info.notificationUnsubscribe, //'yes'|'no'
        //         //where to send the notification
        //         subscribe_to: info.notificationSubscribeTo,
        //         unsubscribe_to: info.notificationUnsubscribeTo
        //     };
        // }
        if (info.companyName &&
            info.companyCountry &&
            info.companyZone &&
            info.companyAddress1) {
            postData.company = {
                name: info.companyName,
                country: info.companyCountry,
                zone: info.companyZone,
                address_1: info.companyAddress1,
                address_2: info.companyAddress2 || null,
                zone_name: info.companyZoneName || null,
                city: info.companyCity || null,
                zip_code: info.companyZipCode || null
            };
        }
        this.method = Request_1.default.Type.POST;
        this.url = path;
        this.data = postData;
        return this.send();
    }
    copy(listUid) {
        this.method = Request_1.default.Type.POST;
        this.url = `${path}/${listUid}/copy`;
        return this.send();
    }
    delete(listUid) {
        this.method = Request_1.default.Type.DELETE;
        this.url = `${path}/${listUid}`;
        return this.send();
    }
    update(listUid, info) {
        let postData = {
            //required
            general: {
                name: info.name,
                description: info.description,
                opt_in: info.optIn || "single",
                opt_out: info.optOut || "single"
            },
            //required
            defaults: {
                from_name: info.fromName,
                from_email: info.fromEmail,
                reply_to: info.replyTo,
                subject: info.subject || ""
            },
            notifications: {
                //notification when new subscriber added
                subscribe: info.notificationSubscribe || "no",
                unsubscribe: info.notificationUnsubscribe || "no",
                //where to send the notification
                subscribe_to: info.notificationSubscribeTo || "",
                unsubscribe_to: info.notificationUnsubscribeTo || ""
            },
            company: {
                name: info.companyName || null,
                country: info.companyCountry || null,
                zone: info.companyZone || null,
                address_1: info.companyAddress1 || null,
                address_2: info.companyAddress2 || null,
                zone_name: info.companyZoneName || null,
                city: info.companyCity || null,
                zip_code: info.companyZipCode || null
            }
        };
        // if (info.notificationSubscribe
        //     && info.notificationUnsubscribe
        //     && ['yes', 'no'].indexOf(info.notificationSubscribe) > -1
        //     && ['yes', 'no'].indexOf(info.notificationUnsubscribe) > -1 ) {
        //
        //     postData.notifications = {
        //         //notification when new subscriber added
        //         subscribe: info.notificationSubscribe, //'yes'|'no'
        //         unsubscribe: info.notificationUnsubscribe, //'yes'|'no'
        //         //where to send the notification
        //         subscribe_to: info.notificationSubscribeTo,
        //         unsubscribe_to: info.notificationUnsubscribeTo
        //     };
        // }
        if (info.companyName &&
            info.companyCountry &&
            info.companyZone &&
            info.companyAddress1) {
            postData.company = {
                name: info.companyName,
                country: info.companyCountry,
                zone: info.companyZone,
                address_1: info.companyAddress1,
                address_2: info.companyAddress2 || null,
                zone_name: info.companyZoneName || null,
                city: info.companyCity || null,
                zip_code: info.companyZipCode || null
            };
        }
        this.method = Request_1.default.Type.PUT;
        this.url = `${path}/${listUid}`;
        this.data = postData;
        return this.send();
    }
}
exports.default = Lists;
