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

		find(sorting, filters, callback) {
			let empl = JSON.parse(localStorage.getItem(this.name));

			if (filters) {
				empl = empl.filter(function (item) {
					let _return = true;

					for (let key in filters) {
						let value = filters[key];

						if (typeof value === "function") {
							_return = _return && value(item[key]);
						} else {
							_return = _return && item[key] === filters[key];
						}
					}
					return _return;
				});
			}

			if (sorting) {
				empl = empl.sort(sorting);
			}

			callback(empl);
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
