(function (window) {
	window.currentDate = function employeesDate() {
		const employeesFullDate = new Date();
		const employeesYear = employeesFullDate.getFullYear();
		const employeesMoth = employeesFullDate.getMonth();
		const employeesDay = employeesFullDate.getDate();
		const employeesHour = employeesFullDate.getHours();
		const employeesMins = employeesFullDate.getMinutes();
		const employeesSec = employeesFullDate.getSeconds();

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

	// window.clearInp = function () {

	// }

	window.getData = function () {
		const employeesName = document.getElementById("inputs__spanName").value;
		const employeesSurname = document.getElementById("inputs__spanSurname").value;
		const employeesPatronymic = document.getElementById("inputs__spanPatronymic").value;
		const employeesAge = document.getElementById("inputs__spanAge").value;
		const employeesSexMale = document.getElementById("inputs__male");
		const employeesHE = document.getElementById("inputs__spanAvailabilityHE");

		if (employeesSexMale.checked) {
			var sex = "мужcкой";
		} else {
			var sex = "женский";
		}

		if (employeesHE.checked) {
			var he = "имеется";
		} else {
			var he = "не имеется";
		}

		var dat = {
			name: employeesName,
			surname: employeesSurname,
			patronymic: employeesPatronymic,
			age: employeesAge,
			sex: sex,
			higher_education: he,
		};

		return dat;
	};

	window.gElbyID = function (id) {
		return document.getElementById(id);
	};

	window.$on = function (element, type, callback) {
		element.addEventListener(type, callback);
	};
})(window);
