import Request from "./Request";

class ListSubscribers extends Request {
	constructor(config: any) {
		super(config);
	}

	getSubscribers(listUid: string, page: number, perPage: number): Promise<any> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/subscribers`;
		this.data = {
			page: page,
			per_page: perPage
		};

		return this.send();
	}

	getSubscriber(listUid: string, subscriberUid: string): Promise<any> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;
		this.data = {};

		return this.send();
	}

	emailSearch(listUid: string, subscriberEmail: string): Promise<any> {
		this.method = Request.Type.GET;
		this.url = `/lists/${listUid}/subscribers/search-by-email`;
		this.data = {
			EMAIL: subscriberEmail
		};

		return this.send();
	}

	create(listUid: string, data: any): Promise<any> {
		this.method = Request.Type.POST;
		this.url = `/lists/${listUid}/subscribers`;
		this.data = data;

		return this.send();
	}

	update(listUid: string, subscriberUid: string, data: any): Promise<any> {
		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;
		this.data = data;

		return this.send();
	}

	delete(listUid: string, subscriberUid: string): Promise<any> {
		this.method = Request.Type.DELETE;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}`;

		return this.send();
	}

	unsubscribe(listUid: string, subscriberUid: string): Promise<any> {
		this.method = Request.Type.PUT;
		this.url = `/lists/${listUid}/subscribers/${subscriberUid}/unsubscribe`;
		this.data = {};

		return this.send();
	}
}

export default ListSubscribers;
