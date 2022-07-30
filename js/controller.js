(function (window) {
	class controller {
		constructor(model, view) {
			self = this;
			self.model = model;
			self.view = view;

			self.view.bind("addNewEmployes", function () {
				self.add();
			});

			self.view.bind("clearInp", function () {
				self.clearInp();
			});

			self.view.bind("removeAllEmpl", function () {
				self.removeAllEmpl();
			});
		}

		add = function (data) {
			self.model.create(data, function (data) {
				self.view.show(data);
				self.view.clearInputs();
			});
		};

		showAll = function () {
			self.model.findAll(function (data) {
				if (!(data === [])) {
					self.view.clearTemplate();
				} else {
					self.view.show(data);
				}
			});
		};

		clearInp = function () {
			self.view.clearInputs();
		};

		removeAllEmpl = function () {
			self.model.removeAllEmpl(function () {
				self.view.clearTemplate();
				console.log("controller");
			});
		};
	}

	window.app = window.app || {};
	window.app.controller = controller;
})(window);
