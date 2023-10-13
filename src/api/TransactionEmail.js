"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("./Request"));
let base64Encode = require("../utils/encrypt").base64Encode;
const path = "./src/api/TransactionEmail";
class TransactionEmail extends Request_1.default {
    constructor(config) {
        super(config);
    }
    /**
     *
     * @param toName
     * @param toEmail
     * @param fromName
     * @param fromEmail
     * @param replyToName
     * @param replyToEmail
     * @param subject
     * @param body
     * @param plainText
     * @param sendAt
     */
    create(toName, toEmail, fromName, fromEmail, replyToName, replyToEmail, subject, body, plainText, sendAt) {
        if (!toName || !toEmail || !fromName || !subject || !body || !sendAt) {
            return Promise.reject("ParamInvalid");
        }
        let data = {
            to_name: toName,
            to_email: toEmail,
            from_name: fromName,
            reply_to_email: replyToEmail,
            reply_to_name: replyToName,
            subject: subject,
            send_at: sendAt
        };
        if (body)
            data.body = base64Encode(body);
        if (plainText)
            data.plain_text = base64Encode(plainText);
        this.url = path;
        this.method = Request_1.default.Type.POST;
        this.data = { email: data };
        return this.send();
    }
}
exports.default = TransactionEmail;
