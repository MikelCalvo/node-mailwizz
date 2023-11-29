import Request from "./Request";
import Config from "./types/Config";
import {
	GetAllCountriesResponse,
	GetAllZonesResponse
} from "./types/Countries";

const path: string = "/countries";

class Countries extends Request {
	/**
	 * @description Creates an instance of Countries.
	 * @param {Config} config - Config object
	 * @see https://api-docs.mailwizz.com/#countries
	 * @memberof Countries
	 */
	constructor(config: Config) {
		super(config);
	}

	/**
	 * @description Get all countries
	 * @param {number} page - Page of the response
	 * @param {number} perPage - Items per page of the response
	 * @returns {Promise<GetAllCountriesResponse>} - Promise of the response
	 * @see https://api-docs.mailwizz.com/#get-all-countries
	 * @memberof Countries
	 */
	getAll(page: number, perPage: number): Promise<GetAllCountriesResponse> {
		this.method = Request.Type.GET;
		this.url = path;
		this.data = {
			page: page,
			per_page: perPage
		};

		return this.send();
	}

	/**
	 * @description Get all zones of a country
	 * @param {string} countryID - Country ID
	 * @param {number} page - Page of the response
	 * @param {number} perPage - Items per page of the response
	 * @returns {Promise<GetAllZonesResponse>} - Promise of the response
	 * @see https://api-docs.mailwizz.com/#get-all-zones-of-a-country
	 * @memberof Countries
	 */
	getAllZones(
		countryID: string,
		page: number,
		perPage: number
	): Promise<GetAllZonesResponse> {
		this.method = Request.Type.GET;
		this.url = `${path}/${countryID}/zones`;
		this.data = {
			page: page,
			per_page: perPage
		};

		return this.send();
	}
}

export default Countries;
