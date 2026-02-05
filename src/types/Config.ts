/**
 *@exports Config
 *@interface Config
 *@param {string} publicKey - Public key
 *@param {string} secret - Secret key
 *@param {string} baseUrl - Base url
 *@param {number} timeout - Request timeout in ms (optional)
 *@param {string} userAgent - Custom User-Agent header (optional)
 *
 */

export interface Config {
	publicKey: string;
	secret: string;
	baseUrl: string;
	timeout?: number;
	userAgent?: string;
}
