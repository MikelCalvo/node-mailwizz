[![NPM version][npm-version-image]][npm-url]

# Node.JS Integration for Mailwizz

Harness the power of MailWizz, the full-featured, self-hosted email marketing software that's been battle-tested since 2013.

With top-notch support, extensive documentation, and a developer-friendly environment, MailWizz integrates seamlessly with a plethora of third-party services like Sendgrid, Amazon SES, and Mailgun.

## Documentation

### **[View Full API Documentation](https://mikelcalvo.github.io/node-mailwizz/)**

Interactive OpenAPI documentation with code examples for all endpoints.

## Installation

```bash
npm install node-mailwizz --save
```

## Configuration

```javascript
const config = {
  publicKey: "yourPublicKey",
  secret: "yourSecretKey",
  baseUrl: "https://your-mailwizz-instance.com/api"
};
```

## Quick Start

### Create a Subscriber

```javascript
import { ListSubscribers } from "node-mailwizz";

const subscribers = new ListSubscribers(config);

subscribers
  .create({
    listUid: "YOUR-LIST-ID",
    data: {
      EMAIL: "user@example.com",
      FNAME: "John",
      LNAME: "Doe"
    }
  })
  .then(result => console.log("Subscriber created:", result))
  .catch(err => console.error("Error:", err));
```

### Send a Transactional Email

```javascript
import { TransactionEmail } from "node-mailwizz";

const transactional = new TransactionEmail(config);

transactional
  .create({
    toName: "John Doe",
    toEmail: "john@example.com",
    fromName: "My App",
    subject: "Welcome!",
    body: "<html><body><h1>Welcome!</h1></body></html>",
    plainText: "Welcome!",
    sendAt: "2024-01-01 10:00:00"
  })
  .then(result => console.log("Email queued:", result))
  .catch(err => console.error("Error:", err));
```

### Create a Campaign

```javascript
import { Campaigns, CreateCampaignType } from "node-mailwizz";

const campaigns = new Campaigns(config);

campaigns
  .create({
    name: "My Campaign",
    type: CreateCampaignType.REGULAR,
    fromName: "John Doe",
    fromEmail: "john@example.com",
    subject: "Newsletter",
    replyTo: "reply@example.com",
    sendAt: "2024-01-01 10:00:00",
    listId: "YOUR-LIST-ID",
    templateId: "YOUR-TEMPLATE-ID"
  })
  .then(result => console.log("Campaign created:", result))
  .catch(err => console.error("Error:", err));
```

## Available APIs

| API | Description |
|-----|-------------|
| `Lists` | Manage mailing lists |
| `ListSubscribers` | Manage subscribers |
| `ListFields` | Custom fields for lists |
| `ListSegments` | Segment management |
| `Campaigns` | Email campaigns |
| `CampaignBounces` | Bounce management |
| `CampaignTracking` | Track opens/clicks |
| `Templates` | Email templates |
| `TransactionEmail` | Transactional emails |
| `Countries` | Countries and zones |
| `Customers` | Customer management |

For detailed documentation and all available methods, see the **[API Documentation](https://mikelcalvo.github.io/node-mailwizz/)**.

## Contributing

Got an idea or facing an issue? Jump right in with a pull request or spark a discussion with an issue.

## Acknowledgments

A huge shoutout to the brilliant minds behind the evolution of this library:

- **[ntlzz93](https://github.com/ntlzz93)**: For crafting the original library that started it all.
- **[chgonzalez9](https://github.com/chgonzalez9)**: For helping with the migration to TypeScript.
- **[kodjunkie](https://github.com/kodjunkie)**: For contributing the unsubscribe method.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

---

[npm-url]: https://npmjs.org/package/node-mailwizz
[npm-version-image]: http://img.shields.io/npm/v/node-mailwizz.svg?style=flat
