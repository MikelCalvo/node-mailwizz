/**
 * @description Interface for the parameters of the API call to get all countries
 * @interface GetAllCountriesParams
 * @property {number} page - Page of the response
 * @property {number} per_page - Items per page of the response
 * @see https://api-docs.mailwizz.com/#get-all-countries
 * @memberof Countries
 */
export interface GetAllCountriesParams {
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all countries
 * @interface GetAllCountriesResponse
 * @property {string} status - Status of the response
 * @property {GetAllCountriesResponseData} data - Data of the response
 * @property {string} data.count - Items Count
 * @property {number} data.total_pages - Total Pages
 * @property {number} data.current_page - Current Page
 * @property {number} data.next_page - Next Page
 * @property {number} data.prev_page - Previous Page
 * @property {GetAllCountriesResponseRecord[]} data.records - Records of the response
 * @see https://api-docs.mailwizz.com/#get-all-countries
 * @memberof Countries
 */
export interface GetAllCountriesResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: GetAllCountriesResponseRecord[];
	};
}

/**
 * @description Interface for the response of the API call to get all countries
 * @interface GetAllCountriesResponseRecord
 * @property {string} country_id - Country ID
 * @property {string} name - Country Name
 * @property {string} code - Country Code
 * @see https://api-docs.mailwizz.com/#get-all-countries
 * @memberof Countries
 */
export interface GetAllCountriesResponseRecord {
	country_id: string;
	name: string;
	code: string;
}

/**
 * @description Interface for the parameters of the API call to get all zones of a country
 * @interface GetAllZonesParams
 * @property {string} countryID - Country ID
 * @property {number} page - Page of the response
 * @property {number} per_page - Items per page of the response
 * @see https://api-docs.mailwizz.com/#get-all-zones-of-a-country
 */
export interface GetAllZonesParams {
	countryID: string;
	page?: number;
	per_page?: number;
}

/**
 * @description Interface for the response of the API call to get all zones of a country
 * @interface GetAllZonesResponse
 * @property {string} status - Status of the response
 * @property {GetAllZonesResponseData} data - Data of the response
 * @property {string} data.count - Items Count
 * @property {number} data.total_pages - Total Pages
 * @property {number} data.current_page - Current Page
 * @property {number} data.next_page - Next Page
 * @property {number} data.prev_page - Previous Page
 * @see https://api-docs.mailwizz.com/#get-all-zones-of-a-country
 * @memberof Countries
 */
export interface GetAllZonesResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: GetAllZonesResponseRecord[];
	};
}

/**
 * @description Interface for the response of the API call to get all zones of a country
 * @interface GetAllZonesResponseRecord
 * @property {string} zone_id - Zone ID
 * @property {string} name - Zone Name
 * @property {string} code - Zone Code
 * @see https://api-docs.mailwizz.com/#get-all-zones-of-a-country
 * @memberof Countries
 */
export interface GetAllZonesResponseRecord {
	zone_id: string;
	name: string;
	code: string;
}
