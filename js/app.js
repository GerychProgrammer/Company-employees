(function (window) {
	class CompanyEmployees {
		constructor(name) {
			this.storage = new app.Storage(name);
			this.template = new app.Template();
			this.view = new app.View(this.template);
			this.model = new app.Model(this.storage);
			this.controller = new app.Controller(this.model, this.view);
		}
	}

	let companyEmployees = new CompanyEmployees("EmpList");

	function setView() {
		companyEmployees.controller.showAll();
	}
	addEvListener(window, "load", setView);
})(window);
