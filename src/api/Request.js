"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../utils/data"));
const querystring_1 = require("querystring");
const encrypt_1 = __importDefault(require("../utils/encrypt"));
const axios_1 = __importDefault(require("axios"));
let qs = require("qs");
class Request {
    constructor({ publicKey, secret, baseUrl }) {
        this.config = {
            publicKey: publicKey,
            secret: secret,
            baseUrl: baseUrl
        };
        this.url = null;
        this.method = null;
        this.data = {};
        this.query = {};
        this.header = {
            "X-MW-PUBLIC-KEY": this.config.publicKey,
            "X-MW-TIMESTAMP": Math.floor(new Date().valueOf() / 1000).toString(),
            "X-MW-REMOTE-ADDR": ""
        };
    }
    static get Type() {
        return data_1.default;
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.data && this.method === data_1.default.GET) {
                this.query = this.data;
                this.data = {};
            }
            this.__sign();
            this.__setXHttpMethodOverride();
            let options = {
                method: this.method || 'GET',
                baseURL: this.config.baseUrl,
                url: this.url || 'GET',
                headers: this.header || {}
            };
            if (this.method === data_1.default.GET) {
                options.params = this.query;
            }
            else {
                options.data = qs.stringify(this.data);
                options.headers = Object.assign(Object.assign({}, options.headers), { "Content-Type": "application/x-www-form-urlencoded" });
            }
            try {
                const response = yield (0, axios_1.default)(options);
                return response.data;
            }
            catch (err) {
                if (!err.response)
                    throw err;
                if (!err.response.data)
                    throw err.response;
                throw err.response.data;
            }
        });
    }
    __setXHttpMethodOverride() {
        this.header["X-HTTP-Method-Override"] = this.method;
    }
    __sign() {
        let specialHeaderParams = this.header;
        let privateKey = this.config.secret;
        let method = this.method;
        let paramPost = this.method === data_1.default.GET ? {} : this.data || {};
        let paramGet = this.method === data_1.default.GET ? this.data || {} : this.query || {};
        let separator;
        let params = Object.assign({}, specialHeaderParams, paramPost);
        params = encrypt_1.default.ksort(params);
        var apiUrl = this.config.baseUrl + this.url;
        if (this.method === data_1.default.GET && Object.keys(paramGet).length > 0) {
            apiUrl += "?" + (0, querystring_1.stringify)(paramGet);
            separator = "&";
        }
        else {
            separator = "?";
        }
        let signatureString = `${method} ${apiUrl}${separator}${encrypt_1.default.serialize(params)}`;
        console.log(apiUrl);
        console.log(signatureString);
        let hash = encrypt_1.default.hmac_sha(privateKey, signatureString);
        this.header["X-MW-SIGNATURE"] = hash;
    }
}
exports.default = Request;
