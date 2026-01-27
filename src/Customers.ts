import Request from "./Request";
import { Config } from "./types/Config";
import {
	CreateCustomerParams,
	CreateCustomerResponse
} from "./types/Customers";

const path: string = "/customers";

class Customers extends Request {
	/**
	 * @description Creates an instance of Customers.
	 * @see https://api-docs.mailwizz.com/#customers
	 * @memberof Customers
	 */
	constructor({ publicKey, secret, baseUrl }: Config) {
		super({
			publicKey: publicKey,
			secret: secret,
			baseUrl: baseUrl
		});
	}

	/**
	 * @description Create a new customer
	 * @param {CreateCustomerParams} params - Params of the request
	 * @param {string} params.firstName - Customer first name
	 * @param {string} params.lastName - Customer last name
	 * @param {string} params.email - Customer email
	 * @param {string} params.password - Customer password
	 * @param {string} [params.timezone] - Customer timezone
	 * @param {string} [params.birthDate] - Customer birth date (Y-m-d format)
	 * @param {string} [params.phone] - Customer phone
	 * @param {CustomerCompany} [params.company] - Customer company details
	 * @returns {Promise<CreateCustomerResponse>} - Promise of the response
	 * @memberof Customers
	 * @see https://api-docs.mailwizz.com/#create-a-customer
	 */
	create({
		firstName,
		lastName,
		email,
		password,
		timezone,
		birthDate,
		phone,
		company
	}: CreateCustomerParams): Promise<CreateCustomerResponse> {
		const data: Record<string, any> = {
			customer: {
				first_name: firstName,
				last_name: lastName,
				email: email,
				password: password,
				confirm_password: password
			}
		};

		if (timezone) data.customer.timezone = timezone;
		if (birthDate) data.customer.birth_date = birthDate;
		if (phone) data.customer.phone = phone;

		if (company) {
			data.customer.company = {};
			if (company.name) data.customer.company.name = company.name;
			if (company.country) data.customer.company.country = company.country;
			if (company.zone) data.customer.company.zone = company.zone;
			if (company.city) data.customer.company.city = company.city;
			if (company.zipCode) data.customer.company.zip_code = company.zipCode;
			if (company.address1) data.customer.company.address_1 = company.address1;
			if (company.address2) data.customer.company.address_2 = company.address2;
			if (company.phone) data.customer.company.phone = company.phone;
			if (company.website) data.customer.company.website = company.website;
		}

		this.method = Request.Type.POST;
		this.url = path;
		this.data = data;

		return this.send();
	}
}

export default Customers;
