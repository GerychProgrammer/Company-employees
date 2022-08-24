(function (window) {
	class Model {
		constructor(storage) {
			this.storage = storage;
		}

		create(data, callback) {
			data = {
				name: data.name,
				surname: data.surname,
				patronymic: data.patronymic,
				sex: data.sex,
				higher_education: data.higher_education,
				age: data.age,
				confirmDate: new Date(),
				status: "working"
			};

			this.storage.save(data, callback);
		}

		// find(data, callback) {

		// }

		findAll(callback) {
			this.storage.findAll(callback);
		}

		removeAllEmpl(callback) {
			this.storage.removeAll(callback);
		}

		fireEmpl(id, callback) {
			let updateData = {
				id: id,
				fireDate: new Date(),
				status: "fired",
			};

			this.storage.update(updateData, id, callback);
		}

		getCount(callback) {
			let employees = {
				working: 0,
				fired: 0,
			};

			this.storage.findAll((data) => {
				data.forEach(function (employee) {
					if (employee.status == "working") {
						employees.working++;
					} else {
						employees.fired++;
					}
				});
				callback(employees);
			});
		}
	}

	window.app = window.app || {};
	window.app.Model = Model;
})(window);
