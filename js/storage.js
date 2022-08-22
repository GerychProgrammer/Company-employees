(function (window) {
	class Storage {
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
				empl.filter(function (employee) {
					for (let q in query) {
						if (query[q] !== employee[q]) {
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

		update(updateData, id, callback) {
			let empl = JSON.parse(localStorage.getItem(this.name));
			for (let i = 0; i < empl.length; i++) {
				if (empl[i].id == id) {
					empl[i] = Object.assign(empl[i], updateData);
					break;
				}
			}

			localStorage.setItem(this.name, JSON.stringify(empl));
			callback(updateData);
		}
	}

	window.app = window.app || {};
	window.app.Storage = Storage;
})(window);
