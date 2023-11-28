import Config from "./types/Config";
import Request from "./Request";

const path: string = "/templates";

class Template extends Request {
	constructor(config: Config) {
		super(config);
	}

	getTemplates(page = 1, limit = 10): Promise<any> {
		this.url = path;
		this.method = Request.Type.GET;
		this.data = {
			page: page,
			per_page: limit
		};

		return this.send();
	}

	getTemplate(templateUid: string): Promise<any> {
		this.method = Request.Type.GET;
		this.url = `${path}/${templateUid}`;
		this.data = {};

		return this.send();
	}
}

export default Template;
