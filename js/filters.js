(function (window) {
	function to_25(age) {
		return age < 25;
	}
	function from_25_to_45(age) {
		return 25 <= age && age < 45;
	}
	function from_45(age) {
		return 45 <= age;
	}

	window.app = window.app || {};
	window.app.filters = {
		to_25,
		from_25_to_45,
		from_45,
	};
})(window);
