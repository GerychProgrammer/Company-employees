(function (window) {
	class View {
		constructor(template) {
			this.template = template;

			this.list = gElbyID("rightSection");
			this.inputsForm = gElbyID("inputs__form");
			this.filtersAndSortForm = gElbyID("filterAndSort__form");
			this.clearBnt = gElbyID("clear");
			this.deleteAll = gElbyID("deleteAll");
			this.counter = gElbyID("employeesCount__counter");
			this.resetFilters = gElbyID("filterAndSort__reset");
		}

		bind(type, callback) {
			if (type === "addNewEmployes") {
				addEvListener(this.inputsForm, "submit", callback);
			}

			if (type === "clearInp") {
				addEvListener(this.clearBnt, "reset", callback);
			}

			if (type === "removeAllEmpl") {
				addEvListener(this.deleteAll, "click", callback);
			}

			if (type === "fireEmpl") {
				let self = this;
				delegate(self.list, "#rightSection__employeeDel", "click", function () {
					callback(self.getId(this));
				});
			}

			if (type === "filterAndSort") {
				addEvListener(this.filtersAndSortForm, "submit", callback);
			}

			if (type === "defaultFiltersAndSort") {
				addEvListener(this.resetFilters, "reset", callback);
			}
		}

		show(data) {
			this.list.innerHTML = this.template.showDefaultTemplate(data);
		}

		clearTemplate(data) {
			this.list.innerHTML = this.template.showClearTemplate(data);
		}

		clearInputs() {
			this.inputsForm.reset();
		}

		getId(element) {
			let parentEl = getParent(element, "div");
			return parseInt(parentEl.dataset.id, 10);
		}

		addFireInf(updateData) {
			let parentId = updateData.id;
			let date = updateData.fireDate;
			let elem = qs('[data-id="' + parentId + '"]');
			let elemForTime = qs(".rightSection__fireTime", elem);

			elemForTime.style.display = "block";
			elemForTime.innerHTML = this.template.fireEmpl(date);
		}

		renderCount(count) {
			this.counter.innerHTML = this.template.showCount(count);
		}

		setDefaultFiltersAndSort() {
			this.filtersAndSortForm.reset();
		}
	}

	window.app = window.app || {};
	window.app.View = View;
})(window);
