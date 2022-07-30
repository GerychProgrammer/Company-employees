(function (window) {
	class companyEmployees {
		constructor(name) {
			this.storage = new app.storage(name);
			this.template = new app.template();
			this.view = new app.view(this.template);
			this.model = new app.model(this.storage);
			this.controller = new app.controller(this.model, this.view);
		}
	}

	var companyemployees = new companyEmployees("EmpList");

	function setView() {
		companyemployees.controller.showAll();
	}
	$on(window, "load", setView);
})(window);
