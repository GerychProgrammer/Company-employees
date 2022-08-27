(function (window) {
	class TestData {
		constructor(controller) {
			this.controller = controller;
		}

		nameMan = ["Владимир", "Богдан", "Никита", "Егор", "Артём"];
		nameWoman = ["Анна", "Мария", "Анна", "Ксения", "Ульяна"];

		lastNameMan = ["Горячев", "Свешников", "Березин", "Николаев", "Еремин"];
		lastNameWoman = ["Ковалева", "Корчагина", "Кузнецова", "Цветкова", "Сорокина"];

		midleNameMan = ["Владимирович", "Арсентьевич", "Егорович", "Иванович", "Григорьевич"];
		midleNameWoman = ["Данииловна", "Львовна", "Матвеевна", "Львовна", "Александровна"];

		getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		}

		getData() {
			let randomNumber1 = this.getRandomNumber(0, 5);
			let randomNumber2 = this.getRandomNumber(0, 5);
			let randomNumber3 = this.getRandomNumber(0, 5);
			let randomNumber4 = this.getRandomNumber(25, 65);

			let education = "";
			let sex = "";
			let arrName;
			let arrLastName;
			let arrMidleName;

			if (randomNumber1 % 2 !== 0) {
				sex = "man";
				arrName = this.nameMan;
				arrLastName = this.lastNameMan;
				arrMidleName = this.midleNameMan;
			} else {
				sex = "woman";
				arrName = this.nameWoman;
				arrLastName = this.lastNameWoman;
				arrMidleName = this.midleNameWoman;
			}

			if (randomNumber4 % 3) {
				education = "educated";
			}

			return {
				name: arrName[randomNumber1],
				surname: arrLastName[randomNumber2],
				patronymic: arrMidleName[randomNumber3],
				age: `01.01.${2022 - randomNumber4}`,
				sex: sex,
				higher_education: education,
			};
		}

		createTestData(value) {
			for (let i = 0; i <= value; i++) {
				this.controller.addTestData(this.getData());
			}
		}
	}

	window.app = window.app || {};
	window.app.TestData = TestData;
})(window);
