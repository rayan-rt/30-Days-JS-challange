// Activity 01
//  - Task 01
let para_to_change = document.getElementById("para_to_change");
let change_btn = document.getElementById("change_btn");
change_btn.addEventListener(
	"click",
	() => {
		para_to_change.textContent =
			" ipsum adipisicing dolor sit amet Lorem consectetur  elit. a, asd Ea";
	},
	false,
);

//  - Task 02
let calabria_img = document.getElementById("calabria_img");
calabria_img.addEventListener(
	"dblclick",
	() => {
		calabria_img.style.visibility = "hidden";
	},
	false,
);

// Activity 02
//  - Task 03
let bg_change_div = document.getElementById("bg_change");
bg_change_div.addEventListener(
	"mouseover",
	() => {
		bg_change_div.style.backgroundColor = "yellow";
	},
	false,
);

//  - Task 04
bg_change_div.addEventListener(
	"mouseout",
	() => {
		bg_change_div.style.backgroundColor = "blue";
	},
	false,
);

// Activity 03
//  - Task 05
let key_event_container = document.getElementById("key_event_container");
let input = document.getElementById("input");
input.addEventListener(
	"keydown",
	(e) => {
		console.log(e.key);
	},
	false,
);

//  - Task 06
let p = document.createElement("p");
input.addEventListener(
	"keyup",
	(e) => {
		p.textContent += e.key;

		key_event_container.appendChild(p);
	},
	false,
);

// Activity 04
//  - Task 07
let form = document.getElementById("form");
form.addEventListener(
	"submit",
	(e) => {
		e.preventDefault();
		const form_data = new FormData(form);
		let name = form_data.get("name");
		let email = form_data.get("email");
		console.log(`Name: ${name} - Email: ${email}`);
	},
	false,
);

//  - Task 08
let change_event_container = document.getElementById("change_event_container");
let select_container = document.getElementById("select");
let p2 = document.createElement("p");
select_container.addEventListener(
	"change",
	(e) => {
		if (e.target.value == "default") return;
		p2.textContent += e.target.value;
		change_event_container.appendChild(p2);
	},
	false,
);

// Activity 05
//  - Task 09
let list = document.getElementById("list");
list.addEventListener(
	"click",
	(e) => {
		if (e.target && e.target.nodeName === "LI")
			console.log(e.target.textContent);
		// else console.log(e.target);
	},
	false,
);

//  - Task 10
let add_btn = document.getElementById("add_btn");
add_btn.addEventListener(
	"click",
	() => {
		let new_li = document.createElement("li");
		new_li.textContent = `Item${list.children.length + 1}`;
		list.appendChild(new_li);
	},
	false,
);
