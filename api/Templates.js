const Request = require("./Request");

const path = "/templates";

class Template extends Request {
	constructor(config) {
		super(config);
	}

	getTemplates(page = 1, limit = 10) {
		this.url = path;
		this.method = Request.Type.GET;
		this.data = {
			page: page,
			per_page: limit
		};

		return this.send();
	}

	getTemplate(templateUid) {
		this.method = Request.Type.GET;
		this.url = `${path}/${templateUid}`;
		this.data = {};

		return this.send();
	}
}

module.exports = Template;
