(function (window) {
	class Controller {
		constructor(model, view) {
			this.model = model;
			this.view = view;

			// adding new employee to list
			this.view.bind("addNewEmployes", this.add.bind(this));

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

			//this.view.bind("fireEmpl", this.updateCount());

			

			// filters and sort
			// this.view.bind("filterAndSort", () => {
			// 	this.filterAndSort();
			// });
		}

		add(event) {
			event.preventDefault();

			let data = window.getDataFromForm(event);

			this.model.create(data, (data) => {
				this.view.show(data);
				this.view.clearInputs();
				this.updateCount();
			});			
		}

		showAll() {
			this.model.findAll((data) => {
				// add different template
				if (data.length > 0) {
					this.view.show(data);
				} else {
					this.view.clearTemplate(data);
				}				
			});
			this.updateCount();
		}

		clearInp() {
			this.view.clearInputs();
		}

		removeAllEmpl() {
			this.model.removeAllEmpl(() => {
				this.view.clearTemplate();
				this.updateCount();
			});
			
		}

		fireEmpl(id) {
			this.model.fireEmpl(id, (data) => {
				this.view.addFireInf(data);
				this.updateCount();
			});
		}

		//filters
		// filterAndSort() {

		// }

		updateCount() {
			this.model.getCount((employees) => {
				this.view.renderCount(employees.working);
			});
		}
	}

	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);
