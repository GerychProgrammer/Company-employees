(function (window) {
	class storage {
		constructor(name) {
			this.name = name;
			if (!localStorage.getItem(name)) {
				let empl = [];

				localStorage.setItem(name, JSON.stringify(empl));
			}
		}

		save(data, callback) {
			let empl = JSON.parse(localStorage.getItem(this.name));

			callback = callback || function () {};

			data.id = new Date().getTime();

			empl.push(data);
			localStorage.setItem(this.name, JSON.stringify(empl));

			callback(empl);
		}

		find(query, callback) {
			if (!callback) {
				return;
			}

			let empl = JSON.parse(localStorage.getItem(this.name));

			callback(
				empl.filter(function (todo) {
					for (let q in query) {
						if (query[q] !== todo[q]) {
							return false;
						}
					}
					return true;
				})
			);
		}

		findAll(callback) {
			callback = callback || function () {};
			callback(JSON.parse(localStorage.getItem(this.name)));
		}

		removeAll(callback) {
			callback = callback || function () {};
			let empl = [];
			localStorage.setItem(this.name, JSON.stringify(empl));
			callback();
		}

		fire(id, callback) {
			let empl = JSON.parse(localStorage.getItem(this.name));
			let fireDate = currentDate();
			for (let i = 0; i < empl.length; i++) {
				if (empl[i].id == id) {
					empl[i].fireDate = fireDate;
					empl[i].status = "fired";
					break;
				}
			}

			localStorage.setItem(this.name, JSON.stringify(empl));
			callback({ id: id, fireDate: fireDate });
		}
	}

	window.app = window.app || {};
	window.app.storage = storage;
})(window);
