/**
 *@exports Config
 *@interface Config
 *@param {string} publicKey - Public key
 *@param {string} secret - Secret key
 *@param {string} baseUrl - Base url
 *
 */

export default interface Config {
	publicKey: string;
	secret: string;
	baseUrl: string;
}
