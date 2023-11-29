[![NPM version][npm-version-image]][npm-url]

# node-mailwizz

I took [ntlzz93's package](https://github.com/ntlzz93/node-mailwizz-sdk) and added some more features.

Feel free to make a pull request or open an issue.

To to know which API is available and params, go to `api` directory.

This SDK are using native Promise instead of Callback, so you can async/await as you want

# How to use

First, you need to add the configuration:

```
const config = {
    publicKey: "publicKey",
    secret: "secretKey",
    baseUrl: "yourMailwizzApiUrl"
};
```

How to create a subscriber:

```
import { ListSubscribers } from "mailwizz";

const subscribers = new ListSubscribers(config);

var userInfo = { //replace the values with your user info
    EMAIL: "contact@mikelcalvo.net",
    FNAME: "Mikel",
    LNAME: "Calvo",
    CUSTOM: "custom"
};
//You can replace CUSTOM with the parameters you want

subscribers.create("LIST-UNIQUE-ID", userInfo)
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to update a subscriber:

```
import { ListSubscribers } from "mailwizz";

const subscribers = new ListSubscribers(config);

var userInfo = { //replace the values with your user's new info
    EMAIL: "contact@mikelcalvo.net",
    FNAME: "Mikel",
    LNAME: "Calvo",
    CUSTOM: "custom"
};
//You can replace CUSTOM with the parameters you want

subscribers.update("LIST-UNIQUE-ID", "SUBSCRIBER-UNIQUE-ID", userInfo)
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to delete a subscriber:

```
import { ListSubscribers } from "mailwizz";

const subscribers = new ListSubscribers(config);

subscribers.delete("LIST-UNIQUE-ID", "SUBSCRIBER-UNIQUE-ID")
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to unsubscribe:

```
import { ListSubscribers } from "mailwizz";

const subscribers = new ListSubscribers(config);

subscribers.unsubscribe("LIST-UNIQUE-ID", "SUBSCRIBER-UNIQUE-ID")
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to get your subscribers:

```
import { ListSubscribers } from "mailwizz";

const subscribers = new ListSubscribers(config);

/Value 1 is the page number you want to get
//Value 10 is the items per package
//So if you set (1, 10) it will get the first 10 subscribers
subscribers.getSubscribers("LIST-UNIQUE-ID", 1, 10)
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to get a subscriber with their id:

```
import { ListSubscribers } from "mailwizz";

const subscribers = new ListSubscribers(config);

subscribers.getSubscriber("LIST-UNIQUE-ID", "SUBSCRIBER-UNIQUE-ID")
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to get a subscriber with their email:

```
import { ListSubscribers } from "mailwizz";

const subscribers = new ListSubscribers(config);

subscribers.emailSearch("LIST-UNIQUE-ID", "SUBSCRIBER-EMAIL")
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to get your lists:

```
import { Lists } from "mailwizz";

const lists = new Lists(config);

//Value 1 is the page number you want to get
//Value 10 is the items per package
//So if you set (1, 10) it will get the first 10 lists
lists.getLists(1, 10)
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

If you have your list id you can directly get it:

```
import { Lists } from "mailwizz";

const lists = new Lists(config);

lists.getList("LIST-UNIQUE-ID")
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to create a new list:

```
import { Lists } from "mailwizz";

const lists = new Lists(config);

var listInfo = { //Replace the values with your list info
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
    companyZone: "Community of Madrid", //required
    companyAddress1: "Some street address", //required
    companyAddress2: "",
    companyZoneName: "", //when country doesn't have required zone
    companyCity: "Madrid",
    companyZipCode: "28013",

};

lists.create(listInfo)
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to copy a list:

```
import { Lists } from "mailwizz";

const lists = new Lists(config);

lists.copy("LIST-UNIQUE-ID")
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to remove a list:

```
import { Lists } from "mailwizz";

const lists = new Lists(config);

lists.delete("LIST-UNIQUE-ID")
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

How to update a list:

```
import { Lists } from "mailwizz";

const lists = new Lists(config);

var newInfo = { //Replace the values with your updated list info
    name: "Main List", //Required
    description: "This is a test list", //Required
    optIn: "single", //single or double
    optOut: "single", //single or double
    fromName: "Mikel Calvo", //Required
    fromEmail: "contact@mikelcalvo.net", //Required
    replyTo: "contact@mikelcalvo.net", //Required
    subject: "Hi!",
    //notification when new subscriber added
    notificationSubscribe: "yes", //yes or no
    notificationUnsubscribe: "yes", //yes or no
    //where to send the notification
    notificationSubscribeTo: "contact@mikelcalvo.net",
    notificationUnsubscribeTo: "contact@mikelcalvo.net",
    //This is optional, if not set customer company data will be used:
    companyName: "Mikel Calvo SL", //required
    companyCountry: "Spain", //required
    companyZone: "Community of Madrid", //required
    companyAddress1: "Some street address", //required
    companyAddress2: "",
    companyZoneName: "", //when country doesn't have required zone
    companyCity: "Madrid",
    companyZipCode: "28013",

};

lists.update("LIST-UNIQUE-ID", newInfo)
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```

Countries API:
How to get the list of countries:

```
import { Countries } from "mailwizz";

const countriesClass = new Countries(mailingConfig);

countriesClass.getAll()
    .then(function(countries) {
        //TODO: Handle the response
    })
    .catch(function(err) {
        //handle error here
    });
```

How to get the zones of a country:

```
import { Countries } from "mailwizz";

const countriesClass = new Countries(mailingConfig);

countriesClass.getAllZones()
    .then(function(zones) {
        //TODO: Handle the response
    })
    .catch(function(err) {
        //handle error here
    });
```

[npm-url]: https://npmjs.org/package/node-mailwizz
[npm-version-image]: http://img.shields.io/npm/v/node-mailwizz.svg?style=flat
