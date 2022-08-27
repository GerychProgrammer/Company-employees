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

			// filters and sort
			this.view.bind("filterAndSort", this.filterAndSort.bind(this));

			this.view.bind("defaultFiltersAndSort", this.defaultFiltersAndSort());
		}

		add(event) {
			event.preventDefault();

			let data = window.getDataFromForm(event);
			if (this.model.isValid(data)) {
				this.model.create(data, (data) => {
					this.view.show(data);
					this.view.clearInputs();
					this.updateCount();
				});
			} else {
				this.clearInp();
			}
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

		filterAndSort(event) {
			event.preventDefault();

			let { sorting, ...filters } = window.getDataFromForm(event);

			this.model.find(sorting, filters, (data) => {
				this.view.show(data);
			});
		}

		defaultFiltersAndSort() {
			this.view.setDefaultFiltersAndSort();
		}

		updateCount() {
			this.model.getCount((employees) => {
				this.view.renderCount(employees.working);
			});
		}

		addTestData(testData) {
			let data = testData;

			if (this.model.isValid(data)) {
				this.model.create(data, (data) => {
					this.view.show(data);
					this.view.clearInputs();
					this.updateCount();
				});
			} else {
				this.clearInp();
			}
		}
	}

	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);
