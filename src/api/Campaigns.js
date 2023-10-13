"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("./Request"));
const path = "./src/api/campaigns";
class Campaigns extends Request_1.default {
    constructor(config) {
        super(config);
    }
    create(info) {
        let postData = {
            name: info.name,
            type: info.type || "regular",
            from_name: info.fromName,
            from_email: info.fromEmail,
            subject: info.subject,
            reply_to: info.replyTo,
            send_at: info.sendAt,
            list_uid: info.listId,
            segment_uid: info.segmentId || "",
            //optional block, defaults are shown
            options: {
                url_tracking: info.urlTracking || "no",
                json_feed: "no",
                xml_feed: "no",
                plain_text_email: "yes",
                email_stats: "" //a valid email address where we should send the stats after campaign done
            },
            //required block, archive or template_uid or content
            template: {
                template_uid: info.templateId,
                archive: "",
                content: "",
                inline_css: "yes",
                plain_text: "",
                auto_plain_text: "yes"
            }
        };
        this.method = Request_1.default.Type.POST;
        this.url = path;
        this.data = {
            campaign: postData
        };
        return this.send();
    }
}
exports.default = Campaigns;
