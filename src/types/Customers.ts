/**
 * @description Interface for the parameters of the API call to create a customer
 * @interface CreateCustomerParams
 * @memberof Customers
 */
export interface CreateCustomerParams {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	timezone?: string;
	birthDate?: string;
	phone?: string;
	company?: CustomerCompany;
}

/**
 * @description Interface for customer company details
 * @interface CustomerCompany
 * @memberof Customers
 */
export interface CustomerCompany {
	name?: string;
	country?: string;
	zone?: string;
	city?: string;
	zipCode?: string;
	address1?: string;
	address2?: string;
	phone?: string;
	website?: string;
}

/**
 * @description Interface for the response of the API call to create a customer
 * @interface CreateCustomerResponse
 * @memberof Customers
 */
export interface CreateCustomerResponse {
	status: string;
	customer_uid: string;
}
