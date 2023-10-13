"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("./Request"));
const path = "./src/api/templates";
class Template extends Request_1.default {
    constructor(config) {
        super(config);
    }
    getTemplates(page = 1, limit = 10) {
        this.url = path;
        this.method = Request_1.default.Type.GET;
        this.data = {
            page: page,
            per_page: limit
        };
        return this.send();
    }
    getTemplate(templateUid) {
        this.method = Request_1.default.Type.GET;
        this.url = `${path}/${templateUid}`;
        this.data = {};
        return this.send();
    }
}
exports.default = Template;
