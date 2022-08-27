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
				higher_education: data.higher_education ? "yes" : "no",
				age: calculateAge(data.age),
				confirmDate: new Date(),
				status: "working",
			};

			this.storage.save(data, callback);
		}

		find(sorting, filters, callback) {
			if (filters) {
				for (let key in filters) {
					if (filters[key] === "all") {
						delete filters[key];
						continue;
					}

					if (key === "age") {
						filters[key] = app.filters[filters[key]];
					}
				}
			}

			if (sorting) {
				const arr = sorting.split(" ");
				const sort = arr[0];
				const sortOrder = arr[1];

				sorting = app.sorters[sort](sortOrder);
			}

			this.storage.find(sorting, filters, callback);
		}

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

		isValid(data) {
			if (data.name.trim() && data.surname.trim() && data.patronymic.trim() && data.age.trim()) {
				return true;
			} else {
				window.alert("Заполните обязательные данные: ФИО, дата рождения, пол");
				return false;
			}
		}
	}

	window.app = window.app || {};
	window.app.Model = Model;
})(window);
