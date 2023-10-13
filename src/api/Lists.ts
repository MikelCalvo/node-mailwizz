import { ListInfo } from "mailtrain-interface";
import Request from"./Request";

const path: string = "./src/api/lists";

class Lists extends Request {
	constructor(config: any) {
		super(config);
	}

	getLists(page: number, perPage: number): Promise<any> {
		this.method = Request.Type.GET;
		this.url = path;
		this.data = {
			page: page,
			per_page: perPage
		};

		return this.send();
	}

	getList(listUid: string): Promise<any> {
		this.method = Request.Type.GET;
		this.url = `${path}/${listUid}`;
		this.data = {};

		return this.send();
	}

	create(info: ListInfo): Promise<any> {
		let postData = {
			//required
			general: {
				name: info.name, //required
				description: info.description, //required
				opt_in: info.optIn || "single",
				opt_out: info.optOut || "single"
			},
			//required
			defaults: {
				from_name: info.fromName, //required
				from_email: info.fromEmail, //required
				reply_to: info.replyTo, //required
				subject: info.subject || ""
			},

			notifications: {
				//notification when new subscriber added
				subscribe: info.notificationSubscribe || "no", //'yes'|'no'
				unsubscribe: info.notificationUnsubscribe || "no", //'yes'|'no'
				//where to send the notification
				subscribe_to: info.notificationSubscribeTo || "",
				unsubscribe_to: info.notificationUnsubscribeTo || ""
			},
			company: {
				name: info.companyName || null,
				country: info.companyCountry || null,
				zone: info.companyZone || null,
				address_1: info.companyAddress1 || null,
				address_2: info.companyAddress2 || null,
				zone_name: info.companyZoneName || null, //when country doesn't have required zone
				city: info.companyCity || null,
				zip_code: info.companyZipCode || null
			}
		};

		// if (info.notificationSubscribe
		//     && info.notificationUnsubscribe
		//     && ['yes', 'no'].indexOf(info.notificationSubscribe) > -1
		//     && ['yes', 'no'].indexOf(info.notificationUnsubscribe) > -1 ) {
		//
		//     postData.notifications = {
		//         //notification when new subscriber added
		//         subscribe: info.notificationSubscribe, //'yes'|'no'
		//         unsubscribe: info.notificationUnsubscribe, //'yes'|'no'
		//         //where to send the notification
		//         subscribe_to: info.notificationSubscribeTo,
		//         unsubscribe_to: info.notificationUnsubscribeTo
		//     };
		// }

		if (
			info.companyName &&
			info.companyCountry &&
			info.companyZone &&
			info.companyAddress1
		) {
			postData.company = {
				name: info.companyName, //required
				country: info.companyCountry, //required
				zone: info.companyZone, //required
				address_1: info.companyAddress1, //required
				address_2: info.companyAddress2 || null,
				zone_name: info.companyZoneName || null, //when country doesn't have required zone
				city: info.companyCity || null,
				zip_code: info.companyZipCode || null
			};
		}

		this.method = Request.Type.POST;
		this.url = path;
		this.data = postData;

		return this.send();
	}

	copy(listUid: string): Promise<any> {
		this.method = Request.Type.POST;
		this.url = `${path}/${listUid}/copy`;

		return this.send();
	}

	delete(listUid: string): Promise<any> {
		this.method = Request.Type.DELETE;
		this.url = `${path}/${listUid}`;

		return this.send();
	}

	update(listUid: string, info: ListInfo): Promise<any> {
		let postData = {
			//required
			general: {
				name: info.name, //required
				description: info.description, //required
				opt_in: info.optIn || "single",
				opt_out: info.optOut || "single"
			},
			//required
			defaults: {
				from_name: info.fromName, //required
				from_email: info.fromEmail, //required
				reply_to: info.replyTo, //required
				subject: info.subject || ""
			},

			notifications: {
				//notification when new subscriber added
				subscribe: info.notificationSubscribe || "no", //'yes'|'no'
				unsubscribe: info.notificationUnsubscribe || "no", //'yes'|'no'
				//where to send the notification
				subscribe_to: info.notificationSubscribeTo || "",
				unsubscribe_to: info.notificationUnsubscribeTo || ""
			},
			company: {
				name: info.companyName || null,
				country: info.companyCountry || null,
				zone: info.companyZone || null,
				address_1: info.companyAddress1 || null,
				address_2: info.companyAddress2 || null,
				zone_name: info.companyZoneName || null, //when country doesn't have required zone
				city: info.companyCity || null,
				zip_code: info.companyZipCode || null
			}
		};

		// if (info.notificationSubscribe
		//     && info.notificationUnsubscribe
		//     && ['yes', 'no'].indexOf(info.notificationSubscribe) > -1
		//     && ['yes', 'no'].indexOf(info.notificationUnsubscribe) > -1 ) {
		//
		//     postData.notifications = {
		//         //notification when new subscriber added
		//         subscribe: info.notificationSubscribe, //'yes'|'no'
		//         unsubscribe: info.notificationUnsubscribe, //'yes'|'no'
		//         //where to send the notification
		//         subscribe_to: info.notificationSubscribeTo,
		//         unsubscribe_to: info.notificationUnsubscribeTo
		//     };
		// }

		if (
			info.companyName &&
			info.companyCountry &&
			info.companyZone &&
			info.companyAddress1
		) {
			postData.company = {
				name: info.companyName, //required
				country: info.companyCountry, //required
				zone: info.companyZone, //required
				address_1: info.companyAddress1, //required
				address_2: info.companyAddress2 || null,
				zone_name: info.companyZoneName || null, //when country doesn't have required zone
				city: info.companyCity || null,
				zip_code: info.companyZipCode || null
			};
		}

		this.method = Request.Type.PUT;
		this.url = `${path}/${listUid}`;
		this.data = postData;

		return this.send();
	}
}

export default Lists;
