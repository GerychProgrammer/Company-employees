(function (window) {
	window.currentDate = function employeesDate() {
		let employeesFullDate = new Date();
		let employeesYear = employeesFullDate.getFullYear();
		let employeesMoth = employeesFullDate.getMonth();
		let employeesDay = employeesFullDate.getDate();
		let employeesHour = employeesFullDate.getHours();
		let employeesMins = employeesFullDate.getMinutes();
		let employeesSec = employeesFullDate.getSeconds();

		if (employeesMoth < 10) {
			employeesMoth = "0" + employeesMoth;
		}

		if (employeesDay < 10) {
			employeesDay = "0" + employeesDay;
		}

		if (employeesHour < 10) {
			employeesHour = "0" + employeesHour;
		}

		if (employeesMins < 10) {
			employeesMins = "0" + employeesMins;
		}

		if (employeesSec < 10) {
			employeesSec = "0" + employeesSec;
		}

		return (
			employeesDay +
			"." +
			employeesMoth +
			"." +
			employeesYear +
			" " +
			employeesHour +
			":" +
			employeesMins +
			":" +
			employeesSec
		);
	};

	window.getData = function () {
		const employeesName = document.getElementById("inputs__spanName").value;
		const employeesSurname = document.getElementById("inputs__spanSurname").value;
		const employeesPatronymic = document.getElementById("inputs__spanPatronymic").value;
		const employeesAge = document.getElementById("inputs__spanAge").value;
		const employeesSexMale = document.getElementById("inputs__male");
		const employeesHE = document.getElementById("inputs__spanAvailabilityHE");
		let sex, he;

		if (employeesSexMale.checked) {
			sex = "мужcкой";
		} else {
			sex = "женский";
		}

		if (employeesHE.checked) {
			he = "имеется";
		} else {
			he = "не имеется";
		}

		let dat = {
			name: employeesName,
			surname: employeesSurname,
			patronymic: employeesPatronymic,
			age: employeesAge,
			sex: sex,
			higher_education: he,
			confirmData: currentDate(),
		};

		return dat;
	};

	window.gElbyID = function (id) {
		return document.getElementById(id);
	};

	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};

	window.addEvListener = function (element, type, callback) {
		element.addEventListener(type, callback);
	};

	window.$ppevent = function (target, selector, type, callback) {
		function findElem(event) {
			var targetElement = event.target.closest(selector);
			var potentialElements = window.qsa(selector, target);
			console.log("potentialElements", potentialElements);
			hasIn = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;
			if (hasIn) {
				callback.call(targetElement, event);
			}
		}
		window.$event(target, type, findElem);
	};

	window.delegate = function (target, selector, type, callback) {
		target.addEventListener(type, (event) => {
			const targetElement = event.target.closest(selector);
			const potentialElements = window.qsa(selector, target);
			let hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				callback.call(targetElement, event);
			}
		});
	};

	window.parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.parent(element.parentNode, tagName);
	};
})(window);
