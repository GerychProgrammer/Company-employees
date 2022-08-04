(function (window) {
	class view {
		constructor(template) {
			this.template = template;

			this.inpName = gElbyID("inputs__spanName");
			this.inpSurname = gElbyID("inputs__spanSurname");
			this.inpPatronymic = gElbyID("inputs__spanPatronymic");
			this.inpAge = gElbyID("inputs__spanAge");
			this.inpSexMale = gElbyID("inputs__male");
			this.inpSexFemale = gElbyID("inputs__female");
			this.inpHe = gElbyID("inputs__spanAvailabilityHE");
			this.list = gElbyID("rightSection");
		}

		bind(type, callback) {
			if (type === "addNewEmployes") {
				let el = gElbyID("confirm");
				addEvListener(el, "click", function () {
					callback();
				});
			}

			if (type === "clearInp") {
				let el = gElbyID("reset");
				addEvListener(el, "click", function () {
					callback();
				});
			}

			if (type === "removeAllEmpl") {
				let el = gElbyID("clearAll");
				addEvListener(el, "click", function () {
					callback();
				});
			}

			if (type === "fireEmpl") {
				let self = this;
				delegate(self.list, "#rightSection__employeeDel", "click", function () {
					callback(self.getId(this));
				});
			}
		}

		show(data) {
			this.list.innerHTML = this.template.showDefaultTemplate(data);
		}

		clearTemplate() {
			this.list.innerHTML = this.template.showClearTemplate();
		}

		clearInputs() {
			this.inpName.value = "";
			this.inpSurname.value = "";
			this.inpPatronymic.value = "";
			this.inpAge.value = "";
			this.inpSexMale.checked = false;
			this.inpSexFemale.checked = false;
			this.inpHe.checked = false;
		}

		getId(element) {
			let parentEl = parent(element, "div");
			return parseInt(parentEl.dataset.id, 10);
		}

		addFireInf(data) {
			let parentId = data.id;
			let date = data.fireDate;
			let elem = qs('[data-id="' + parentId + '"]');
			let elemForTime = qs(".rightSection__fireTime", elem);

			elemForTime.style.display = "block";
			elemForTime.innerHTML = this.template.fireEmpl(date);
		}
	}

	window.app = window.app || {};
	window.app.view = view;
})(window);
