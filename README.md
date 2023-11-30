[![NPM version][npm-version-image]][npm-url]

# Node.JS Integration for Mailwizz

Harness the power of MailWizz, the full-featured, self-hosted email marketing software that's been battle-tested since 2013.
<br>
With top-notch support, extensive documentation, and a developer-friendly environment, MailWizz integrates seamlessly with a plethora of third-party services like Sendgrid, Amazon SES, and Mailgun.

🔗 [MailWizz Official Website](https://www.mailwizz.com/)

## Acknowledgments

A huge shoutout to the brilliant minds behind the evolution of this library:

- **[ntlzz93](https://github.com/ntlzz93)**: For crafting the original library that started it all.
- **[chgonzalez9](https://github.com/chgonzalez9)**: For helping with the migration to TypeScript, enhancing the developer experience.
- **[kodjunkie](https://github.com/kodjunkie)**: For contributing the unsubscribe method, a crucial feature for email marketing.

Your contributions have been instrumental in shaping `node-mailwizz` into the tool it is today!

## Getting Started

### Installation

Install `node-mailwizz` via npm to jumpstart your email marketing campaigns:

```bash
npm install node-mailwizz --save
```

🔥 **Got an idea or facing an issue?** Jump right in with a pull request or spark a discussion with an issue.

📂 For a sneak peek at the available APIs and their parameters, take a dive into the `src` directory, some of them are available but not documented yet.

## Table of Contents

- [Acknowledgments](#acknowledgments)
- [Installation](#installation)
- [Config Object](#config-object)
- [Campaigns API](#campaigns-api)
  - [Create a Campaign](#create-a-campaign)
- [Templates API](#templates-api)
  - [Get all Templates](#get-all-templates)
  - [Get a Specific Template](#get-a-specific-template)
- [Subscriber API](#subscriber-api)
  - [Create a Subscriber](#create-a-subscriber)
  - [Update a Subscriber](#update-a-subscriber)
  - [Delete a Subscriber](#delete-a-subscriber)
  - [Unsubscribe a Subscriber](#unsubscribe-a-subscriber)
  - [Retrieve Subscribers](#retrieve-subscribers)
  - [Fetch a Subscriber by ID](#fetch-a-subscriber-by-id)
  - [Find a Subscriber by Email](#find-a-subscriber-by-email)
- [List API](#list-api)
  - [Get Lists](#get-lists)
  - [Get a Specific List](#get-a-specific-list)
  - [Create a New List](#create-a-new-list)
  - [Copy a List](#copy-a-list)
  - [Remove a List](#remove-a-list)
  - [Update a List](#update-a-list)
- [Countries API](#countries-api)
  - [Get All Countries](#get-all-countries)
  - [Get Zones of a Country](#get-zones-of-a-country)

---

## Config Object

<details>
<summary>Click to expand</summary>

The config object is required to initialize the API classes. It contains the following properties:

```javascript
const config = {
	publicKey: "yourPublicKey",
	secret: "yourSecretKey",
	baseUrl: "yourMailwizzApiUrl"
};
```

</details>

## Campaigns API

<details>
<summary>Click to expand</summary>

### Create a Campaign

```javascript
import { Campaigns, CreateCampaignType } from "node-mailwizz";

const campaigns = new Campaigns(config);

campaigns
	.create({
		name: "Campaign Name",
		type: CreateCampaignType.REGULAR,
		fromName: "Mikel Calvo",
		fromEmail: "spam@mikelcalvo.net",
		subject: "Hi!",
		replyTo: "spam@mikecalvo.net",
		sendAt: "2021-01-01 00:00:00",
		listId: "YOUR-LIST-ID",
		segmentId: "YOUR-SEGMENT-ID",
		urlTracking: "yes",
		templateId: "YOUR-TEMPLATE-ID"
	})
	.then(result => console.log("Campaign created:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateCampaignResponse {
	status: string;
	campaign_uid: string;
}
```

</details>
</details>

## Templates API

<details>
<summary>Click to expand</summary>

### Get all Templates

```javascript
import { Templates } from "node-mailwizz";

const templates = new Templates(config);

templates
	.getAll({
		page: 1,
		per_page: 10
	})
	.then(result => console.log("Templates:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetAllTemplatesResponse {
	status: string;
	data: {
		records: GetAllTemplatesResponseRecord[];
	};
}

GetAllTemplatesResponseRecord {
	template_uid: string;
	name: string;
	screenshot: string;
}

```

</details>

### Get a Specific Template

```javascript
import { Templates } from "node-mailwizz";

const templates = new Templates(config);

templates
	.getTemplate({
		templateID: "YOUR-TEMPLATE-ID"
	})
	.then(result => console.log("Template details:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetTemplateResponse {
	status: string;
	data: {
		record: GetTemplateResponseRecord;
	};
}

GetTemplateResponseRecord {
    template_uid: string;
    name: string;
    screenshot: string;
}
```

</details>
</details>

## Subscriber API

<details>
<summary>Click to expand</summary>

### Create a Subscriber

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

let userInfo: CreateSubscriberParamsData = {
	//Replace the values with your user info
	email: "spam@mikelcalvo.net",
	FNAME: "Mikel",
	LNAME: "Calvo",
	CUSTOM: "yourCustomField"
};

subscribers
	.create({
        listUid: "YOUR-LIST-ID",
        data: userInfo,
    })
	.then(result => console.log("Subscriber created:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateSubscriberResponse {
	status: string;
	data: CreateSubscriberResponseData;
}

CreateSubscriberResponseData {
	record: CreateSubscriberResponseRecord;
}

CreateSubscriberResponseRecord {
	subscriber_uid: string;
	email: string;
	ip_address: string;
	source: string;
	date_added: CreateSubscriberResponseRecordDateAdded;
}

CreateSubscriberResponseRecordDateAdded {
	expression: string;
	params: any;
}
```

</details>

### Update a Subscriber

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);
// Similar to creating a subscriber, but with updated info

let updatedUserInfo: UpdateSubscriberParamsData = {
	//Replace the values with your user info
	EMAIL: "spam@mikelcalvo.net",
	FNAME: "Mikel",
	LNAME: "Calvo",
	CUSTOM: "yourCustomField"
};

subscribers
	.update({
        listUid: "YOUR-LIST-ID",
        subscriberUid: "SUBSCRIBER-ID",
        data: updatedUserInfo,
    })
	.then(result => console.log("Subscriber updated:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
UpdateSubscriberResponse {
	status: string;
	data: UpdateSubscriberResponseData;
}

UpdateSubscriberResponseData {
    record: UpdateSubscriberResponseRecord;
}

UpdateSubscriberResponseRecord {
    subscriber_uid: string;
    email: string;
    ip_address: string;
    source: string;
    date_added: UpdateSubscriberResponseRecordDateAdded;
}

UpdateSubscriberResponseRecordDateAdded {
    expression: string;
    params: any;
}
```

</details>

### Delete a Subscriber

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.delete({
		listUid: "YOUR-LIST-ID",
		subscriberUid: "SUBSCRIBER-ID"
	})
	.then(result => console.log("Subscriber deleted:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
DeleteSubscriberResponse {
	status: string;
}
```

</details>

### Unsubscribe a Subscriber

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.unsubscribe({
		listUid: "YOUR-LIST-ID",
		subscriberUid: "SUBSCRIBER-ID"
	})
	.then(result => console.log("Subscriber unsubscribed:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
UnsubscribeSubscriberResponse {
    status: string;
}
```

</details>

### Retrieve Subscribers

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);
// Get a paginated list of subscribers
subscribers
	.getSubscribers({
		listUid: "YOUR-LIST-ID",
		page: 1,
		per_page: 10
	})
	.then(result => console.log("Subscribers:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetSubscribersResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: GetSubscribersResponseRecord[];
	};
}

GetSubscribersResponseRecord {
	subscriber_uid: string;
	EMAIL: string;
	FNAME: string;
	LNAME: string;
	status: string;
	source: string;
	ip_address: string;
	date_added: string;
    [key: string]: any;
}

```

</details>

### Fetch a Subscriber by ID

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.getSubscriber({
		listUid: "YOUR-LIST-ID",
		subscriberUid: "SUBSCRIBER-ID"
	})
	.then(result => console.log("Subscriber details:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetSubscriberResponse {
	status: string;
	data: GetSubscriberResponseData;
}

GetSubscriberResponseData {
	subscriber_uid: string;
	EMAIL: string;
	FNAME: string;
	LNAME: string;
	status: string;
	source: string;
	ip_address: string;
	date_added: string;
	[key: string]: any;
}
```

</details>

### Find a Subscriber by Email

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.emailSearch({
		listUid: "YOUR-LIST-ID",
		email: "spam@mikelcalvo.net"
	})
	.then(result => console.log("Subscriber found:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
EmailSearchResponse {
	status: string;
	data: EmailSearchResponseData;
}

EmailSearchResponseData {
	subscriber_uid: string;
	status: string;
	date_added: string;
}
```

</details>
</details>

## List API

<details>
<summary>Click to expand</summary>

### Get Lists

```javascript
import { Lists } from "node-mailwizz";

const lists = new Lists(config);

// Retrieve your lists with pagination
lists
	.getLists({
		page: 1,
		per_page: 10
	})
	.then(result => console.log("Lists:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetAllListsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: GetAllListsResponseRecord[];
	};
}

GetAllListsResponseRecord {
	general: GetAllListsResponseRecordGeneral;
	defaults: GetAllListsResponseRecordDefaults;
	notifications: GetAllListsResponseRecordNotifications;
	company: GetAllListsResponseRecordCompany;
}

GetAllListsResponseRecordGeneral {
	list_uid: string;
	name: string;
	display_name: string;
	description: string;
}

GetAllListsResponseRecordDefaults {
	from_name: string;
	reply_to: string;
	subject: string;
}

GetAllListsResponseRecordNotifications {
	subscribe: string;
	unsubscribe: string;
	subscribe_to: string;
	unsubscribe_to: string;
}

GetAllListsResponseRecordCompany {
	name: string;
	address_1: string;
	address_2: string;
	zone_name: string;
	city: string;
	zip_code: string;
	phone: string;
	address_format: string;
	country: GetAllListsResponseRecordCompanyCountry;
}

GetAllListsResponseRecordCompanyCountry {
	country_id: string;
	name: string;
	code: string;
}
```

</details>

### Get a Specific List

```javascript
import { Lists } from "node-mailwizz";

const lists = new Lists(config);

lists
	.getList({
		listID: "YOUR-LIST-ID"
	})
	.then(result => console.log("List details:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetListResponse {
	status: string;
	data: {
		record: GetListResponseRecord;
	};
}

GetListResponseRecord {
	general: GetListResponseRecordGeneral;
	defaults: GetListResponseRecordDefaults;
	notifications: GetListResponseRecordNotifications;
	company: GetListResponseRecordCompany;
}

GetListResponseRecordGeneral {
	list_uid: string;
	name: string;
	display_name: string;
	description: string;
}

GetListResponseRecordDefaults {
	from_name: string;
	reply_to: string;
	subject: string;
}

GetListResponseRecordNotifications {
	subscribe: string;
	unsubscribe: string;
	subscribe_to: string;
	unsubscribe_to: string;
}

GetListResponseRecordCompany {
	name: string;
	address_1: string;
	address_2: string;
	zone_name: string;
	city: string;
	zip_code: string;
	phone: string;
	address_format: string;
	country: GetListResponseRecordCompanyCountry;
}

GetListResponseRecordCompanyCountry {
	country_id: string;
	name: string;
	code: string;
}
```

</details>

### Create a New List

```javascript
import { Lists } from "node-mailwizz";

const lists = new Lists(config);

lists
	.create({
		//Replace the values with your list info
		name: "Main List", //Required
		description: "This is a test list", //Required
		fromName: "Mikel Calvo", //Required
		fromEmail: "spam@mikelcalvo.net", //Required
		replyTo: "spam@mikelcalvo.net", //Required
		subject: "Hi!",
		//notification when new subscriber added
		notificationSubscribe: "yes", //yes or no
		notificationUnsubscribe: "yes", //yes or no
		//where to send the notification
		notificationSubscribeTo: "spam@mikelcalvo.net",
		notificationUnsubscribeTo: "spam@mikelcalvo.net",
		//This is optional, if not set customer company data will be used:
		companyName: "Mikel Calvo SL", //required
		companyCountry: "Spain", //required
		companyZone: "Basque Country", //required
		companyAddress1: "Some street address", //required
		companyAddress2: "",
		companyZoneName: "", //when country doesn't have required zone
		companyCity: "",
		companyZipCode: ""
	})
	.then(result => console.log("List created:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateListResponse {
	status: string;
	list_uid: string;
}
```

</details>

### Copy a List

```javascript
import { Lists } from "node-mailwizz";

const lists = new Lists(config);

lists
	.copy({
		listID: "YOUR-LIST-ID"
	})
	.then(result => console.log("List copied:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CopyListResponse {
    status: string;
    list_uid: string;
}
```

</details>

### Remove a List

```javascript
import { Lists } from "node-mailwizz";

const lists = new Lists(config);

lists
	.delete({
		listID: "YOUR-LIST-ID"
	})
	.then(result => console.log("List removed:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
DeleteListResponse {
	status: string;
}
```

</details>

### Update a List

```javascript
// Similar to creating a list, but with updated info
import { Lists } from "node-mailwizz";

const lists = new Lists(config);

lists
	.update({
        listID: "YOUR-LIST-ID",
        name: "Main List", //Required
        description: "This is a test list", //Required
        fromName: "Mikel Calvo", //Required
        fromEmail: "spam@mikelcalvo.net", //Required
        replyTo: "spam@mikelcalvo.net", //Required
        subject: "Hi!",
        //notification when new subscriber added
        notificationSubscribe: "yes", //yes or no
        notificationUnsubscribe: "yes", //yes or no
        //where to send the notification
        notificationSubscribeTo: "
        notificationUnsubscribeTo: "
        //This is optional, if not set customer company data will be used:
        companyName: "Mikel Calvo SL", //required
        companyCountry: "Spain", //required
        companyZone: "Basque Country", //required
        companyAddress1: "Some street address", //required
        companyAddress2: "",
        companyZoneName: "", //when country doesn't have required zone
        companyCity: "",
        companyZipCode: ""
    })
	.then(result => console.log("List updated:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
UpdateListResponse {
	status: string;
}
```

</details>
</details>

## Countries API

<details>
<summary>Click to expand</summary>

### Get All Countries

```javascript
import { Countries } from "node-mailwizz";

const countriesClass = new Countries(config);

countriesClass
	.getAll({
		page: 1,
		per_page: 10
	})
	.then(countries => console.log("Countries:", countries))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetAllCountriesResponse {
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

GetAllCountriesResponseRecord {
	country_id: string;
	name: string;
	code: string;
}
```

</details>

### Get Zones of a Country

```javascript
import { Countries } from "node-mailwizz";

const countriesClass = new Countries(config);

countriesClass
	.getAllZones({
		countryID: "ES",
		page: 1,
		per_page: 10
	})
	.then(zones => console.log("Zones:", zones))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetAllZonesResponse {
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

GetAllZonesResponseRecord {
    zone_id: string;
    name: string;
    code: string;
}
```

</details>
</details>

---

<br>
<br>

# License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

---

[npm-url]: https://npmjs.org/package/node-mailwizz
[npm-version-image]: http://img.shields.io/npm/v/node-mailwizz.svg?style=flat
