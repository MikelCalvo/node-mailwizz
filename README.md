[![NPM version][npm-version-image]][npm-url]

# Node.JS Integration for Mailwizz

Harness the power of MailWizz, the full-featured, self-hosted email marketing software that's been battle-tested since 2013.
<br>
With top-notch support, extensive documentation, and a developer-friendly environment, MailWizz integrates seamlessly with a plethora of third-party services like Sendgrid, Amazon SES, and Mailgun.

🔗 [MailWizz Official Website](https://www.mailwizz.com/)

## Acknowledgments

A huge shoutout to the brilliant minds behind the evolution of this library:

- **[ntlzz93](https://github.com/ntlzz93)**: For crafting the original library that started it all.
- **[chgonzalez9](https://github.com/chgonzalez9)**: For the sleek migration to TypeScript, enhancing the developer experience.
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

## Subscriber API

<details>
<summary>Click to expand</summary>

### Create a Subscriber

```javascript
import { ListSubscribers } from "node-mailwizz";

const config = {
	publicKey: "yourPublicKey",
	secret: "yourSecretKey",
	baseUrl: "yourMailwizzApiUrl"
};

const subscribers = new ListSubscribers(config);

let userInfo = {
	//Replace the values with your user info
	EMAIL: "spam@mikelcalvo.net",
	FNAME: "Mikel",
	LNAME: "Calvo",
	CUSTOM: "yourCustomField"
};

subscribers
	.create("YOUR-LIST-ID", userInfo)
	.then(result => console.log("Subscriber created:", result))
	.catch(err => console.error("Error:", err));
```

### Update a Subscriber

```javascript
// Similar to creating a subscriber, but with updated info
subscribers
	.update("YOUR-LIST-ID", "SUBSCRIBER-ID", updatedUserInfo)
	.then(result => console.log("Subscriber updated:", result))
	.catch(err => console.error("Error:", err));
```

### Delete a Subscriber

```javascript
subscribers
	.delete("YOUR-LIST-ID", "SUBSCRIBER-ID")
	.then(result => console.log("Subscriber deleted:", result))
	.catch(err => console.error("Error:", err));
```

### Unsubscribe a Subscriber

```javascript
subscribers
	.unsubscribe("YOUR-LIST-ID", "SUBSCRIBER-ID")
	.then(result => console.log("Subscriber unsubscribed:", result))
	.catch(err => console.error("Error:", err));
```

### Retrieve Subscribers

```javascript
// Get a paginated list of subscribers
subscribers
	.getSubscribers("YOUR-LIST-ID", pageNumber, itemsPerPage)
	.then(result => console.log("Subscribers:", result))
	.catch(err => console.error("Error:", err));
```

### Fetch a Subscriber by ID

```javascript
subscribers
	.getSubscriber("YOUR-LIST-ID", "SUBSCRIBER-ID")
	.then(result => console.log("Subscriber details:", result))
	.catch(err => console.error("Error:", err));
```

### Find a Subscriber by Email

```javascript
subscribers
	.emailSearch("YOUR-LIST-ID", "subscriber@example.com")
	.then(result => console.log("Subscriber found:", result))
	.catch(err => console.error("Error:", err));
```

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
	.getLists(pageNumber, itemsPerPage)
	.then(result => console.log("Lists:", result))
	.catch(err => console.error("Error:", err));
```

### Get a Specific List

```javascript
lists
	.getList("YOUR-LIST-ID")
	.then(result => console.log("List details:", result))
	.catch(err => console.error("Error:", err));
```

### Create a New List

```javascript
// Define your list details
let listInfo = {
	//Replace the values with your list info
	name: "Main List", //Required
	description: "This is a test list", //Required
	optIn: "single", //single or double
	optOut: "single", //single or double
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
};

lists
	.create(listInfo)
	.then(result => console.log("List created:", result))
	.catch(err => console.error("Error:", err));
```

### Copy a List

```javascript
lists
	.copy("YOUR-LIST-ID")
	.then(result => console.log("List copied:", result))
	.catch(err => console.error("Error:", err));
```

### Remove a List

```javascript
lists
	.delete("YOUR-LIST-ID")
	.then(result => console.log("List removed:", result))
	.catch(err => console.error("Error:", err));
```

### Update a List

```javascript
// Similar to creating a list, but with updated info
lists
	.update("YOUR-LIST-ID", updatedListInfo)
	.then(result => console.log("List updated:", result))
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
	.getAll()
	.then(countries => console.log("Countries:", countries))
	.catch(err => console.error("Error:", err));
```

### Get Zones of a Country

```javascript
countriesClass
	.getAllZones("COUNTRY-ID")
	.then(zones => console.log("Zones:", zones))
	.catch(err => console.error("Error:", err));
```

</details>

---

[npm-url]: https://npmjs.org/package/node-mailwizz
[npm-version-image]: http://img.shields.io/npm/v/node-mailwizz.svg?style=flat
