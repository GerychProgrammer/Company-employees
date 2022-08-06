(function (window) {
	class model {
		constructor(storage) {
			this.storage = storage;
		}

		create(data, callback) {
			data = window.getData();

			this.storage.save(data, callback);
		}

		find(data, callback) {
			for (let key in object) {
				if (data[key] != "all") {
					this.storage.find(data, callback);
				}
			}
		}

		findAll(callback) {
			this.storage.findAll(callback);
		}

		removeAllEmpl(callback) {
			this.storage.removeAll(callback);
		}

		fireEmpl(id, callback) {
			this.storage.fire(id, callback);
		}
	}

	window.app = window.app || {};
	window.app.model = model;
})(window);
