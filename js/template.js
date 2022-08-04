(function (window) {
	class template {
		constructor() {
			this.defaultTemplate = `
            <div data-id="{{id}}" class="rightSection__listOfEmployees">
                <ol id="rightSection__employeeList" class="rightSection__employeeList">
                    <li class="rightSection__employeeName"><span class="rightSection__employeeDefaultText rightSection__employeeDefaultText_italic">{{surname}} {{name}} {{patronymic}}</span></li>
                    <li class="rightSection__employeeSex"><span class="rightSection__employeeDefaultText">Пол: </span>{{sex}}</li>
                    <li class="rightSection__employeeEducation"><span class="rightSection__employeeDefaultText">Высшее образвание : </span>{{he}}</li>
                    <li class="rightSection__employeeStartWorkDate"><span class="rightSection__employeeDefaultText">Дата рождения: </span>{{age}}</li>
                    <button id="rightSection__employeeDel" class="rightSection__employeeDel"><i class="fa-solid fa-trash-can"></i></button>
                </ol>
                <div id="rightSection__joinAndLeave" class="rightSection__joinAndLeave">
                    <span><i class="fa-solid fa-check fa-lg"></i>Дата приема на работу: {{currentDate}}</span>
                    <span class="rightSection__fireTime" style ="display: none"><i class="fa-solid fa-xmark fa-lg"></i></span>
                </div>
            </div>  
            `;

			this.clearTemplate = `
            <div id="rightSection__listOfEmployees" class="rightSection__listOfEmployees">
                <h2 class="rightSection__noEmployees">Компания без сотрудников</h2>
            </div> 
            `;
		}

		showDefaultTemplate(data) {
			let view = "";

			for (let i = 0; i < data.length; i++) {
				let tmpl = this.defaultTemplate;

				tmpl = tmpl.replace("{{surname}}", data[i].surname);
				tmpl = tmpl.replace("{{name}}", data[i].name);
				tmpl = tmpl.replace("{{patronymic}}", data[i].patronymic);
				tmpl = tmpl.replace("{{sex}}", data[i].sex);
				tmpl = tmpl.replace("{{he}}", data[i].higher_education);
				tmpl = tmpl.replace("{{age}}", data[i].age);
				tmpl = tmpl.replace("{{currentDate}}", data[i].confirmData);
				tmpl = tmpl.replace("{{id}}", data[i].id);

				view = view + tmpl;
			}

			return view;
		}

		showClearTemplate() {
			let view = "";
			let tmpl = this.clearTemplate;

			view = view + tmpl;

			return view;
		}

		fireEmpl(date) {
			let tmpl = `<span class="rightSection__fireTime"><i class="fa-solid fa-xmark fa-lg"></i>Дата увольнения: {{date}}</span>`;

			tmpl = tmpl.replace("{{date}}", date);

			return tmpl;
		}
	}

	window.app = window.app || {};
	window.app.template = template;
})(window);
