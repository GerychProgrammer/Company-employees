(function (window) {
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
		return
	};

	window.formatDate = function (date) {
		let employeesFullDate = date;
		let employeesYear = employeesFullDate.getFullYear();
		let employeesMoth = employeesFullDate.getMonth();
		let employeesDay = employeesFullDate.getDate();
		let employeesHour = employeesFullDate.getHours();
		let employeesMins = employeesFullDate.getMinutes();
		let employeesSec = employeesFullDate.getSeconds();

		if (employeesMoth < 10) {
			employeesMoth = String(employeesMoth).padStart(2, "0"); 
		}

		if (employeesDay < 10) {
			employeesDay = String(employeesDay).padStart(2, "0");
		}

		if (employeesHour < 10) {
			employeesHour = String(employeesHour).padStart(2, "0"); 
		}

		if (employeesMins < 10) {
			employeesMins = String(employeesMins).padStart(2, "0"); 
		}

		if (employeesSec < 10) {
			employeesSec = String(employeesSec).padStart(2, "0");
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

	window.getDataFromForm = function (event) {
		let formData = new FormData(event.target);

		const data = {};
		for (let key of formData.keys()) {
			data[key] = formData.get(key);
		}
		return data;
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

	window.getParent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.getParent(element.parentNode, tagName);
	};
})(window);
