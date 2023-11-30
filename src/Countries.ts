import Request from "./Request";
import { Config } from "./types/Config";
import {
	GetAllCountriesParams,
	GetAllCountriesResponse,
	GetAllZonesParams,
	GetAllZonesResponse
} from "./types/Countries";

const path: string = "/countries";

class Countries extends Request {
	/**
	 * @description Creates an instance of Countries.
	 * @see https://api-docs.mailwizz.com/#countries
	 * @memberof Countries
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Get all countries
	 * @param {GetAllCountriesParams} params - Params of the request
	 * @param {number} params.page - Page of the response
	 * @param {number} params.per_page - Items per page of the response
	 * @returns {Promise<GetAllCountriesResponse>} - Promise of the response
	 * @see https://api-docs.mailwizz.com/#get-all-countries
	 * @memberof Countries
	 */
	getAll({
		page,
		per_page
	}: GetAllCountriesParams): Promise<GetAllCountriesResponse> {
		this.method = Request.Type.GET;
		this.url = path;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}

	/**
	 * @description Get all zones of a country
	 * @param {GetAllZonesParams} params - Params of the request
	 * @param {string} params.countryID - Country ID
	 * @param {number} params.page - Page of the response
	 * @param {number} params.per_page - Items per page of the response
	 * @returns {Promise<GetAllZonesResponse>} - Promise of the response
	 * @see https://api-docs.mailwizz.com/#get-all-zones-of-a-country
	 * @memberof Countries
	 */
	getAllZones({
		countryID,
		page,
		per_page
	}: GetAllZonesParams): Promise<GetAllZonesResponse> {
		this.method = Request.Type.GET;
		this.url = `${path}/${countryID}/zones`;
		this.data = {
			page: page,
			per_page: per_page
		};

		return this.send();
	}
}

export default Countries;
