let task_contain_section = document.getElementById("task_contain_section");
let form = document.getElementById("form");
let input_title = document.getElementById("input_title");
let input_description = document.getElementById("input_description");
let input_date = document.getElementById("input_date");

// variables
let flag = true;

// array
let tasks = [];
// console.log(tasks);

// functions
function createSectionHTML(id, title, description, date) {
	let section = document.createElement("section");
	section.id = id;

	let div_task_container = document.createElement("div");
	div_task_container.id = "task_container";

	let div_task_details = document.createElement("div");
	div_task_details.id = "task_details";

	let input_tasktitle = document.createElement("input");
	input_tasktitle.id = "input_tasktitle";
	input_tasktitle.type = "text";
	input_tasktitle.value = title;
	input_tasktitle.readOnly = flag; // flag

	let input_taskdate = document.createElement("input");
	input_taskdate.id = "input_taskdate";
	input_taskdate.type = "text";
	input_taskdate.placeholder = "yyyy-mm-dd";
	input_taskdate.value = date;
	input_taskdate.readOnly = flag;

	div_task_details.append(input_tasktitle, input_taskdate);

	let input_taskdescription = document.createElement("input");
	input_taskdescription.id = "input_taskdescription";
	input_taskdescription.type = "text";
	input_taskdescription.value = description;
	input_taskdescription.readOnly = flag; // flag

	div_task_container.append(div_task_details, input_taskdescription);

	let div_btns_container = document.createElement("div");
	div_btns_container.id = "btns_container";

	let edit_btn = document.createElement("button");
	edit_btn.classList.add("transition_025");
	edit_btn.textContent = flag ? "Edit" : "Save";

	let delete_btn = document.createElement("button");
	delete_btn.classList.add("transition_025");
	delete_btn.textContent = "Delete";

	div_btns_container.append(edit_btn, delete_btn);

	section.append(div_task_container, div_btns_container);

	task_contain_section.appendChild(section);

	// edit
	edit_btn.addEventListener("click", (e) => {
		let section_to_edit_id = e.target.parentNode.parentNode.id;
		flag = !flag;

		edit_btn.textContent = flag ? "Edit" : "Save";

		input_tasktitle.readOnly = flag;
		input_taskdescription.readOnly = flag;
		input_taskdate.readOnly = flag;

		tasks = tasks.map((task) =>
			task.id === section_to_edit_id
				? {
						...task,
						user_input_title: input_tasktitle.value,
						user_input_description: input_taskdescription.value,
						user_input_date: input_taskdate.value,
				  }
				: task,
		);
		// console.log(tasks);

		task_contain_section.innerHTML = "";

		tasks.forEach((task) => {
			createSectionHTML(
				task.id,
				task.user_input_title,
				task.user_input_description,
				task.user_input_date,
			);
		});
	});

	// delete
	delete_btn.addEventListener("click", (e) => {
		let section_to_delete_id = e.target.parentNode.parentNode.id;
		tasks = tasks.filter((task) => task.id !== section_to_delete_id);
		// console.log(tasks);

		task_contain_section.innerHTML = "";

		tasks.forEach((task) => {
			createSectionHTML(
				task.id,
				task.user_input_title,
				task.user_input_description,
				task.user_input_date,
			);
		});
	});
}

// events
form.addEventListener("submit", (e) => {
	e.preventDefault();

	let user_input_title = input_title.value;
	let user_input_description = input_description.value;
	let user_input_date = input_date.value;

	let task = {
		id: String(Date.now()),
		user_input_title,
		user_input_description,
		user_input_date,
	};

	tasks.push(task);
	// console.log(tasks);

	input_title.value = input_description.value = input_date.value = "";

	task_contain_section.innerHTML = "";

	tasks.forEach((task) => {
		createSectionHTML(
			task.id,
			task.user_input_title,
			task.user_input_description,
			task.user_input_date,
		);
	});
});
