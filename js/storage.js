(function (window) {
	class storage {
		constructor(name) {
			this.name = name;
			if (!localStorage.getItem(name)) {
				var empl = [];

				localStorage.setItem(name, JSON.stringify(empl));
			}
		}

		save = function (data, callback) {
			var empl = JSON.parse(localStorage.getItem(this.name));

			callback = callback || function () {};

			data.id = new Date().getTime();

			empl.push(data);
			localStorage.setItem(this.name, JSON.stringify(empl));

			callback(empl);
		};

		findAll = function (callback) {
			callback = callback || function () {};
			callback.call(this, JSON.parse(localStorage.getItem(this.name)));
		};

		removeAll = function (callback) {
			callback = callback || function () {};
			var empl = [];
			localStorage.setItem(this.name, JSON.stringify(empl));
			callback();
		};
	}

	window.app = window.app || {};
	window.app.storage = storage;
})(window);
