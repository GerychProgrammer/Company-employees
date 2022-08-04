(function (window) {
	class controller {
		constructor(model, view) {
			this.model = model;
			this.view = view;

			// adding new employee to list
			this.view.bind("addNewEmployes", () => {
				this.add();
			});

			// clearing inputs
			this.view.bind("clearInp", () => {
				this.clearInp();
			});

			// delete all employee from local storage
			this.view.bind("removeAllEmpl", () => {
				this.removeAllEmpl();
			});

			// fire employee
			this.view.bind("fireEmpl", (id) => {
				this.fireEmpl(id);
			});
		}

		add(data) {
			this.model.create(data, (data) => {
				this.view.show(data);
				this.view.clearInputs();
			});
		}

		showAll() {
			this.model.findAll((data) => {
				// add different template
				// if (data !== []) {
				// 	console.log(this.model.findAll());
				// 	this.view.clearTemplate();
				// } else {
				// 	this.view.show(data);
				// }

				this.view.show(data);
			});
		}

		clearInp() {
			this.view.clearInputs();
		}

		removeAllEmpl() {
			this.model.removeAllEmpl(() => {
				this.view.clearTemplate();
			});
		}

		fireEmpl(id) {
			this.model.fireEmpl(id, (data) => {
				this.view.addFireInf(data);
			});
		}
	}

	window.app = window.app || {};
	window.app.controller = controller;
})(window);
