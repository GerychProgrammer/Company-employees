(function (window) {
	class view {
		constructor(template) {
			self = this;
			self.template = template;

			self.inpName = gElbyID("inputs__spanName");
			self.inpSurname = gElbyID("inputs__spanSurname");
			self.inpPatronymic = gElbyID("inputs__spanPatronymic");
			self.inpAge = gElbyID("inputs__spanAge");
			self.inpSexMale = gElbyID("inputs__male");
			self.inpSexFemale = gElbyID("inputs__female");
			self.inpHe = gElbyID("inputs__spanAvailabilityHE");
		}

		bind = function (type, callback) {
			if (type === "addNewEmployes") {
				var el = gElbyID("confirm");
				$on(el, "click", function () {
					callback();
				});
			}

			if (type === "clearInp") {
				var el = gElbyID("reset");
				$on(el, "click", function () {
					callback();
				});
			}

			if (type === "removeAllEmpl") {
				var el = gElbyID("clearAll");
				$on(el, "click", function () {
					callback();
				});
			}
		};

		show = function (data) {
			var list = gElbyID("rightSection");
			list.innerHTML = this.template.showDefaultTemplate(data);
		};

		clearTemplate = function () {
			var list = gElbyID("rightSection");
			list.innerHTML = this.template.showClearTemplate();
		};

		clearInputs = function () {
			this.inpName.value = "";
			this.inpSurname.value = "";
			this.inpPatronymic.value = "";
			this.inpAge.value = "";
			this.inpSexMale.checked = false;
			this.inpSexFemale.checked = false;
			this.inpHe.checked = false;
		};
	}

	window.app = window.app || {};
	window.app.view = view;
})(window);
