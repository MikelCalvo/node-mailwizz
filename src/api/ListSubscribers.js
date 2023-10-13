"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("./Request"));
class ListSubscribers extends Request_1.default {
    constructor(config) {
        super(config);
    }
    getSubscribers(listUid, page, perPage) {
        this.method = Request_1.default.Type.GET;
        this.url = `/lists/${listUid}/subscribers`;
        this.data = {
            page: page,
            per_page: perPage
        };
        return this.send();
    }
    getSubscriber(listUid, subscriberUid) {
        this.method = Request_1.default.Type.GET;
        this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;
        this.data = {};
        return this.send();
    }
    emailSearch(listUid, subscriberEmail) {
        this.method = Request_1.default.Type.GET;
        this.url = `/lists/${listUid}/subscribers/search-by-email`;
        this.data = {
            EMAIL: subscriberEmail
        };
        return this.send();
    }
    create(listUid, data) {
        this.method = Request_1.default.Type.POST;
        this.url = `/lists/${listUid}/subscribers`;
        this.data = data;
        return this.send();
    }
    update(listUid, subscriberUid, data) {
        this.method = Request_1.default.Type.PUT;
        this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;
        this.data = data;
        return this.send();
    }
    delete(listUid, subscriberUid) {
        this.method = Request_1.default.Type.DELETE;
        this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;
        return this.send();
    }
    unsubscribe(listUid, subscriberUid) {
        this.method = Request_1.default.Type.PUT;
        this.url = `/lists/${listUid}/subscribers/${subscriberUid}/unsubscribe`;
        this.data = {};
        return this.send();
    }
}
exports.default = ListSubscribers;
