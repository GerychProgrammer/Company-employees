(function (window) {
	class model {
		constructor(storage) {
			self = this;
			self.storage = storage;
		}

		create = function (data, callback) {
			data = window.getData();

			this.storage.save(data, callback);
		};

		findAll = function (callback) {
			this.storage.findAll(callback);
		};

		removeAllEmpl = function (callback) {
			console.log("model");
			this.storage.removeAll(callback);
		};
	}

	window.app = window.app || {};
	window.app.model = model;
})(window);
