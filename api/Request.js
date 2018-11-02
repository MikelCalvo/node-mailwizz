let encrypt = require('../utils/encrypt');
let rp = require('request-promise');

const url = require('url');
const querystring = require('querystring');

const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

class Request {
    constructor({publicKey, secret, baseUrl}) {
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
            'X-MW-PUBLIC-KEY': this.config.publicKey,
            'X-MW-TIMESTAMP':  parseInt(new Date().valueOf() / 1000, 10),
            'X-MW-REMOTE-ADDR': ''
        }
    }

    static get Type() {
        return METHOD;
    }

    send() {
        if (this.data && this.method === METHOD.GET) {
            this.query = this.data;
            this.data = {};
        }

        this.__sign();
        this.__setXHttpMethodOverride();

        let options = {
            method: this.method,
            baseUrl: this.config.baseUrl,
            url: this.url,
            headers: this.header
        };
        
        if (this.data) {
            options.form = this.data;
        }

        if (this.query) {
            options.qs = this.query;
        }

        delete options.uri;

        return new Promise((resolve, reject) => {
            rp(options)
                .then(result => {
                    return resolve(result);
                })
                .catch(err => {
                    if (!err.response) return reject(err);
                    if (!err.response.body) return reject(err.response);
                    return reject(err.response.body);
                });
        });
        
    }

    __setXHttpMethodOverride() {
        this.header['X-HTTP-Method-Override'] = this.method
    }

    __sign() {
        let specialHeaderParams = this.header;
        let privateKey = this.config.secret;
        let method = this.method;
        let paramPost = this.data || {};
        let paramGet = this.query || {};
        let separator;
        
        if (this.method === METHOD.GET && Object.keys(paramGet).length > 0) {
            separator = '&';
        } else {
            separator = '?';
        }
        
        let params = Object.assign({}, specialHeaderParams, paramPost);
        params = encrypt.ksort(params);

        var apiUrl = this.config.baseUrl + this.url;

        if (method === METHOD.GET) {
            apiUrl += ('?' + querystring.stringify(paramGet));
        }

        let signatureString = `${method} ${apiUrl}${separator}${encrypt.serialize(params)}`;
        let hash = encrypt.hmac_sha(privateKey, signatureString);

        this.header['X-MW-SIGNATURE'] = hash;
    }

}

module.exports = Request;
