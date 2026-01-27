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
  - [Get All Campaigns](#get-all-campaigns)
  - [Get a Campaign](#get-a-campaign)
  - [Create a Campaign](#create-a-campaign)
  - [Update a Campaign](#update-a-campaign)
  - [Copy a Campaign](#copy-a-campaign)
  - [Pause/Unpause a Campaign](#pauseunpause-a-campaign)
  - [Mark Campaign as Sent](#mark-campaign-as-sent)
  - [Delete a Campaign](#delete-a-campaign)
  - [Get Campaign Stats](#get-campaign-stats)
- [Campaign Bounces API](#campaign-bounces-api)
  - [Get Campaign Bounces](#get-campaign-bounces)
  - [Create a Campaign Bounce](#create-a-campaign-bounce)
- [Templates API](#templates-api)
  - [Get All Templates](#get-all-templates)
  - [Get a Specific Template](#get-a-specific-template)
  - [Search Templates](#search-templates)
  - [Create a Template](#create-a-template)
  - [Update a Template](#update-a-template)
  - [Delete a Template](#delete-a-template)
- [Subscriber API](#subscriber-api)
  - [Create a Subscriber](#create-a-subscriber)
  - [Create Subscribers in Bulk](#create-subscribers-in-bulk)
  - [Create or Update a Subscriber](#create-or-update-a-subscriber)
  - [Update a Subscriber](#update-a-subscriber)
  - [Delete a Subscriber](#delete-a-subscriber)
  - [Delete a Subscriber by Email](#delete-a-subscriber-by-email)
  - [Unsubscribe a Subscriber](#unsubscribe-a-subscriber)
  - [Unsubscribe by Email](#unsubscribe-by-email)
  - [Unsubscribe from All Lists](#unsubscribe-from-all-lists)
  - [Retrieve Subscribers](#retrieve-subscribers)
  - [Fetch a Subscriber by ID](#fetch-a-subscriber-by-id)
  - [Find a Subscriber by Email](#find-a-subscriber-by-email)
  - [Search by Email in All Lists](#search-by-email-in-all-lists)
  - [Search by Custom Fields](#search-by-custom-fields)
- [List API](#list-api)
  - [Get Lists](#get-lists)
  - [Get a Specific List](#get-a-specific-list)
  - [Create a New List](#create-a-new-list)
  - [Copy a List](#copy-a-list)
  - [Remove a List](#remove-a-list)
  - [Update a List](#update-a-list)
- [List Fields API](#list-fields-api)
  - [Get All Fields](#get-all-fields)
  - [Get a Field](#get-a-field)
  - [Create a Field](#create-a-field)
  - [Update a Field](#update-a-field)
  - [Delete a Field](#delete-a-field)
  - [Get Field Types](#get-field-types)
- [List Segments API](#list-segments-api)
  - [Get All Segments](#get-all-segments)
  - [Get a Segment](#get-a-segment)
  - [Get Segment Subscribers](#get-segment-subscribers)
  - [Create a Segment](#create-a-segment)
  - [Update a Segment](#update-a-segment)
  - [Delete a Segment](#delete-a-segment)
  - [Get Condition Operators](#get-condition-operators)
- [Transactional Emails API](#transactional-emails-api)
  - [Get All Transactional Emails](#get-all-transactional-emails)
  - [Get a Transactional Email](#get-a-transactional-email)
  - [Create a Transactional Email](#create-a-transactional-email)
  - [Delete a Transactional Email](#delete-a-transactional-email)
- [Countries API](#countries-api)
  - [Get All Countries](#get-all-countries)
  - [Get Zones of a Country](#get-zones-of-a-country)
- [Customers API](#customers-api)
  - [Create a Customer](#create-a-customer)

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

### Get All Campaigns

```javascript
import { Campaigns } from "node-mailwizz";

const campaigns = new Campaigns(config);

campaigns
	.getCampaigns({ page: 1, per_page: 10 })
	.then(result => console.log("Campaigns:", result))
	.catch(err => console.error("Error:", err));
```

### Get a Campaign

```javascript
campaigns
	.getCampaign({ campaignUid: "CAMPAIGN-UID" })
	.then(result => console.log("Campaign:", result))
	.catch(err => console.error("Error:", err));
```

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

### Update a Campaign

```javascript
campaigns
	.update({
		campaignUid: "CAMPAIGN-UID",
		name: "Updated Name",
		subject: "Updated Subject"
	})
	.then(result => console.log("Campaign updated:", result))
	.catch(err => console.error("Error:", err));
```

### Copy a Campaign

```javascript
campaigns
	.copy({ campaignUid: "CAMPAIGN-UID" })
	.then(result => console.log("Campaign copied:", result))
	.catch(err => console.error("Error:", err));
```

### Pause/Unpause a Campaign

```javascript
campaigns
	.pauseUnpause({ campaignUid: "CAMPAIGN-UID" })
	.then(result => console.log("Campaign toggled:", result))
	.catch(err => console.error("Error:", err));
```

### Mark Campaign as Sent

```javascript
campaigns
	.markSent({ campaignUid: "CAMPAIGN-UID" })
	.then(result => console.log("Campaign marked as sent:", result))
	.catch(err => console.error("Error:", err));
```

### Delete a Campaign

```javascript
campaigns
	.delete({ campaignUid: "CAMPAIGN-UID" })
	.then(result => console.log("Campaign deleted:", result))
	.catch(err => console.error("Error:", err));
```

### Get Campaign Stats

```javascript
campaigns
	.getStats({ campaignUid: "CAMPAIGN-UID" })
	.then(result => console.log("Campaign stats:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response Types (Click to expand)</summary>

```typescript
// getCampaigns response
GetCampaignsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: CampaignRecord[];
	};
}

// getStats response
CampaignStats {
	campaign_status: string;
	subscribers_count: number;
	processed_count: number;
	delivery_success_count: number;
	delivery_success_rate: string;
	opens_count: number;
	opens_rate: string;
	unique_opens_count: number;
	clicks_count: number;
	clicks_rate: string;
	unsubscribes_count: number;
	bounces_count: number;
	hard_bounces_count: number;
	soft_bounces_count: number;
}
```

</details>
</details>

## Campaign Bounces API

<details>
<summary>Click to expand</summary>

### Get Campaign Bounces

```javascript
import { CampaignBounces } from "node-mailwizz";

const bounces = new CampaignBounces(config);

bounces
	.getBounces({ campaignUid: "CAMPAIGN-UID", page: 1, per_page: 10 })
	.then(result => console.log("Bounces:", result))
	.catch(err => console.error("Error:", err));
```

### Create a Campaign Bounce

```javascript
import { CampaignBounces, BounceType } from "node-mailwizz";

const bounces = new CampaignBounces(config);

bounces
	.createBounce({
		campaignUid: "CAMPAIGN-UID",
		subscriberUid: "SUBSCRIBER-UID",
		bounceType: BounceType.HARD,
		message: "Mailbox not found"
	})
	.then(result => console.log("Bounce created:", result))
	.catch(err => console.error("Error:", err));
```

</details>

## Templates API

<details>
<summary>Click to expand</summary>

### Get All Templates

```javascript
import { Templates } from "node-mailwizz";

const templates = new Templates(config);

templates
	.getTemplates({
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
		templateUid: "YOUR-TEMPLATE-UID"
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

### Search Templates

```javascript
import { Templates } from "node-mailwizz";

const templates = new Templates(config);

templates
	.search({
		page: 1,
		per_page: 10,
		name: "newsletter"
	})
	.then(result => console.log("Templates found:", result))
	.catch(err => console.error("Error:", err));
```

### Create a Template

```javascript
import { Templates } from "node-mailwizz";

const templates = new Templates(config);

templates
	.create({
		name: "My Template",
		content: "<html><body>Hello [FNAME]!</body></html>",
		inlineCss: "yes",
		minify: "yes"
	})
	.then(result => console.log("Template created:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateTemplateResponse {
	status: string;
	template_uid: string;
}
```

</details>

### Update a Template

```javascript
import { Templates } from "node-mailwizz";

const templates = new Templates(config);

templates
	.update({
		templateUid: "YOUR-TEMPLATE-UID",
		name: "Updated Template Name",
		content: "<html><body>Updated content!</body></html>"
	})
	.then(result => console.log("Template updated:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
UpdateTemplateResponse {
	status: string;
}
```

</details>

### Delete a Template

```javascript
import { Templates } from "node-mailwizz";

const templates = new Templates(config);

templates
	.delete({
		templateUid: "YOUR-TEMPLATE-UID"
	})
	.then(result => console.log("Template deleted:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
DeleteTemplateResponse {
	status: string;
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
	EMAIL: "spam@mikelcalvo.net",
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

### Create Subscribers in Bulk

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.bulk({
		listUid: "YOUR-LIST-ID",
		subscribers: [
			{ EMAIL: "user1@example.com", FNAME: "User", LNAME: "One" },
			{ EMAIL: "user2@example.com", FNAME: "User", LNAME: "Two" },
			{ EMAIL: "user3@example.com", FNAME: "User", LNAME: "Three" }
		]
	})
	.then(result => console.log("Bulk operation result:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
BulkSubscribersResponse {
	status: string;
	data: {
		records: BulkSubscriberRecord[];
	};
}

BulkSubscriberRecord {
	data: {
		subscriber_uid?: string;
		email: string;
		status?: string;
	};
}
```

</details>

### Create or Update a Subscriber

Creates a new subscriber if the email doesn't exist, or updates the existing subscriber if it does (upsert operation).

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.createOrUpdate({
		listUid: "YOUR-LIST-ID",
		data: {
			EMAIL: "spam@mikelcalvo.net",
			FNAME: "Mikel",
			LNAME: "Calvo"
		}
	})
	.then(result => console.log("Subscriber created/updated:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateOrUpdateSubscriberResponse {
	status: string;
	data: {
		record: {
			subscriber_uid: string;
			email: string;
			ip_address: string;
			source: string;
			date_added: object;
		};
	};
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

### Delete a Subscriber by Email

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.deleteByEmail({
		listUid: "YOUR-LIST-ID",
		email: "spam@mikelcalvo.net"
	})
	.then(result => console.log("Subscriber deleted:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
DeleteByEmailResponse {
    status: string;
}
```

</details>

### Unsubscribe by Email

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.unsubscribeByEmail({
		listUid: "YOUR-LIST-ID",
		email: "spam@mikelcalvo.net"
	})
	.then(result => console.log("Subscriber unsubscribed:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
UnsubscribeByEmailResponse {
    status: string;
}
```

</details>

### Unsubscribe from All Lists

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.unsubscribeByEmailFromAllLists({
		email: "spam@mikelcalvo.net"
	})
	.then(result => console.log("Unsubscribed from all lists:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
UnsubscribeByEmailFromAllListsResponse {
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
		subscriberEmail: "spam@mikelcalvo.net"
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

### Search by Email in All Lists

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.searchByEmailInAllLists({
		email: "spam@mikelcalvo.net"
	})
	.then(result => console.log("Subscriber found in lists:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
SearchByEmailInAllListsResponse {
	status: string;
	data: {
		records: SearchByEmailInAllListsRecord[];
	};
}

SearchByEmailInAllListsRecord {
	subscriber_uid: string;
	list_uid: string;
	status: string;
	date_added: string;
}
```

</details>

### Search by Custom Fields

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
	.searchByCustomFields({
		listUid: "YOUR-LIST-ID",
		fields: {
			FNAME: "Mikel",
			LNAME: "Calvo"
		}
	})
	.then(result => console.log("Subscribers found:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
SearchByCustomFieldsResponse {
	status: string;
	data: {
		records: SearchByCustomFieldsRecord[];
	};
}

SearchByCustomFieldsRecord {
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

## List Fields API

<details>
<summary>Click to expand</summary>

### Get All Fields

```javascript
import { ListFields } from "node-mailwizz";

const fields = new ListFields(config);

fields
	.getFields({
		listUid: "YOUR-LIST-ID"
	})
	.then(result => console.log("Fields:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetFieldsResponse {
	status: string;
	data: {
		records: FieldRecord[];
	};
}

FieldRecord {
	field_id: string;
	tag: string;
	label: string;
	type: string;
	required: string;
	visibility: string;
	sort_order: string;
}
```

</details>

### Get a Field

```javascript
import { ListFields } from "node-mailwizz";

const fields = new ListFields(config);

fields
	.getField({
		listUid: "YOUR-LIST-ID",
		fieldUid: "FIELD-UID"
	})
	.then(result => console.log("Field:", result))
	.catch(err => console.error("Error:", err));
```

### Create a Field

```javascript
import { ListFields } from "node-mailwizz";

const fields = new ListFields(config);

fields
	.create({
		listUid: "YOUR-LIST-ID",
		type: "text",
		label: "Company Name",
		tag: "COMPANY",
		required: "no",
		visibility: "visible",
		sortOrder: 0
	})
	.then(result => console.log("Field created:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateFieldResponse {
	status: string;
	data: {
		record: FieldRecord;
	};
}
```

</details>

### Update a Field

```javascript
import { ListFields } from "node-mailwizz";

const fields = new ListFields(config);

fields
	.update({
		listUid: "YOUR-LIST-ID",
		fieldUid: "FIELD-UID",
		label: "Updated Company Name"
	})
	.then(result => console.log("Field updated:", result))
	.catch(err => console.error("Error:", err));
```

### Delete a Field

```javascript
import { ListFields } from "node-mailwizz";

const fields = new ListFields(config);

fields
	.delete({
		listUid: "YOUR-LIST-ID",
		fieldUid: "FIELD-UID"
	})
	.then(result => console.log("Field deleted:", result))
	.catch(err => console.error("Error:", err));
```

### Get Field Types

```javascript
import { ListFields } from "node-mailwizz";

const fields = new ListFields(config);

fields
	.getFieldTypes()
	.then(result => console.log("Field types:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetFieldTypesResponse {
	status: string;
	data: {
		records: string[];  // e.g., ["text", "dropdown", "multiselect", "date", "datetime", "textarea", "country", "state", "checkbox", "consent_checkbox", "radiolist", "checkboxlist", "phonenumber", "email", "url", "rating", "years_range", "captcha", "geocity"]
	};
}
```

</details>
</details>

## List Segments API

<details>
<summary>Click to expand</summary>

### Get All Segments

```javascript
import { ListSegments } from "node-mailwizz";

const segments = new ListSegments(config);

segments
	.getSegments({
		listUid: "YOUR-LIST-ID",
		page: 1,
		per_page: 10
	})
	.then(result => console.log("Segments:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetSegmentsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: SegmentRecord[];
	};
}

SegmentRecord {
	segment_uid: string;
	name: string;
	subscribers_count: number;
}
```

</details>

### Get a Segment

```javascript
import { ListSegments } from "node-mailwizz";

const segments = new ListSegments(config);

segments
	.getSegment({
		listUid: "YOUR-LIST-ID",
		segmentUid: "SEGMENT-UID"
	})
	.then(result => console.log("Segment:", result))
	.catch(err => console.error("Error:", err));
```

### Get Segment Subscribers

```javascript
import { ListSegments } from "node-mailwizz";

const segments = new ListSegments(config);

segments
	.getSubscribers({
		listUid: "YOUR-LIST-ID",
		segmentUid: "SEGMENT-UID",
		page: 1,
		per_page: 10
	})
	.then(result => console.log("Segment subscribers:", result))
	.catch(err => console.error("Error:", err));
```

### Create a Segment

```javascript
import { ListSegments } from "node-mailwizz";

const segments = new ListSegments(config);

segments
	.create({
		listUid: "YOUR-LIST-ID",
		name: "Active Users",
		operatorMatch: "all",
		conditions: [
			{
				field_id: "EMAIL",
				operator_id: "contains",
				value: "@gmail.com"
			}
		]
	})
	.then(result => console.log("Segment created:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateSegmentResponse {
	status: string;
	data: {
		record: SegmentRecord;
	};
}
```

</details>

### Update a Segment

```javascript
import { ListSegments } from "node-mailwizz";

const segments = new ListSegments(config);

segments
	.update({
		listUid: "YOUR-LIST-ID",
		segmentUid: "SEGMENT-UID",
		name: "Updated Segment Name"
	})
	.then(result => console.log("Segment updated:", result))
	.catch(err => console.error("Error:", err));
```

### Delete a Segment

```javascript
import { ListSegments } from "node-mailwizz";

const segments = new ListSegments(config);

segments
	.delete({
		listUid: "YOUR-LIST-ID",
		segmentUid: "SEGMENT-UID"
	})
	.then(result => console.log("Segment deleted:", result))
	.catch(err => console.error("Error:", err));
```

### Get Condition Operators

```javascript
import { ListSegments } from "node-mailwizz";

const segments = new ListSegments(config);

segments
	.getConditionOperators()
	.then(result => console.log("Condition operators:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetConditionOperatorsResponse {
	status: string;
	data: {
		records: string[];  // e.g., ["is", "is_not", "contains", "not_contains", "starts_with", "ends_with", "greater_than", "less_than", "is_empty", "is_not_empty"]
	};
}
```

</details>
</details>

## Transactional Emails API

<details>
<summary>Click to expand</summary>

### Get All Transactional Emails

```javascript
import { TransactionEmail } from "node-mailwizz";

const transactional = new TransactionEmail(config);

transactional
	.getAll({
		page: 1,
		per_page: 10
	})
	.then(result => console.log("Transactional emails:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
GetAllTransactionalEmailsResponse {
	status: string;
	data: {
		count: string;
		total_pages: number;
		current_page: number;
		next_page: number;
		prev_page: number;
		records: TransactionalEmailRecord[];
	};
}

TransactionalEmailRecord {
	email_uid: string;
	to_name: string;
	to_email: string;
	from_name: string;
	subject: string;
	status: string;
	date_added: string;
}
```

</details>

### Get a Transactional Email

```javascript
import { TransactionEmail } from "node-mailwizz";

const transactional = new TransactionEmail(config);

transactional
	.getOne({
		emailUid: "EMAIL-UID"
	})
	.then(result => console.log("Transactional email:", result))
	.catch(err => console.error("Error:", err));
```

### Create a Transactional Email

```javascript
import { TransactionEmail } from "node-mailwizz";

const transactional = new TransactionEmail(config);

transactional
	.create({
		toName: "Mikel Calvo",
		toEmail: "spam@mikelcalvo.net",
		fromName: "My App",
		subject: "Welcome!",
		body: "<html><body><h1>Welcome to our service!</h1></body></html>",
		plainText: "Welcome to our service!",
		sendAt: "2024-01-01 10:00:00"
	})
	.then(result => console.log("Email queued:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateTransactionalEmailResponse {
	status: string;
	email_uid: string;
}
```

</details>

### Delete a Transactional Email

```javascript
import { TransactionEmail } from "node-mailwizz";

const transactional = new TransactionEmail(config);

transactional
	.delete({
		emailUid: "EMAIL-UID"
	})
	.then(result => console.log("Email deleted:", result))
	.catch(err => console.error("Error:", err));
```
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

## Customers API

<details>
<summary>Click to expand</summary>

### Create a Customer

```javascript
import { Customers } from "node-mailwizz";

const customers = new Customers(config);

customers
	.create({
		firstName: "Mikel",
		lastName: "Calvo",
		email: "spam@mikelcalvo.net",
		password: "yourPassword123",
		timezone: "Europe/Madrid"
	})
	.then(result => console.log("Customer created:", result))
	.catch(err => console.error("Error:", err));
```

<details>
<summary>Response (Click to expand)</summary>

```javascript
CreateCustomerResponse {
	status: string;
	customer_uid: string;
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
