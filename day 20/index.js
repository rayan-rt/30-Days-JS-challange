// Activity 01
//  - Task 01
let str_1 = "Chai aur code";
localStorage.setItem("string", str_1);
const string = localStorage.getItem("string");
console.log("Retrieved string from localStorage:", string);

//  - Task 02
const user = {
	name: "John Doe",
	email: "johndoe12@example.com",
};
localStorage.setItem("user", JSON.stringify(user));
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log("Retrieved object from localStorage:", retrievedUser);

// Activity 02
//  - Task 03
let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
form.addEventListener(
	"submit",
	(e) => {
		e.preventDefault();

		let user_name = name.value;
		let user_email = email.value;
		let user = { user_name, user_email };
		localStorage.setItem("user_data", JSON.stringify(user));
		let user_data = JSON.parse(localStorage.getItem("user_data"));
		console.log("Form Data:", user_data);
		name.value = "";
		email.value = "";
	},
	false,
);

//  - Task 04
console.log("LocalStorage before removal:", localStorage);
localStorage.removeItem("string");
console.log("LocalStorage after removal:", localStorage);

// Activity 03
//  - Task 05
sessionStorage.setItem("sessionString", "Chai aur Code");
const sessionString = sessionStorage.getItem("sessionString");
console.log("Retrieved from sessionStorage:", sessionString);

//  - Task 06
const sessionUser = {
	name: "Jane Doe",
	email: "janedoe12@example.com",
};
sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));

const retrievedSessionUser = JSON.parse(sessionStorage.getItem("sessionUser"));
console.log("Retrieved object from sessionStorage:", retrievedSessionUser);

// Activity 04
//  - Task 07
let session_form = document.getElementById("session_form");
let session_name = document.getElementById("session_name");
let session_email = document.getElementById("session_email");
session_form.addEventListener(
	"submit",
	(e) => {
		e.preventDefault();

		let user_name = session_name.value;
		let user_email = session_email.value;
		let user = { user_name, user_email };
		sessionStorage.setItem("session_user_data", JSON.stringify(user));
		let session_user_data = JSON.parse(
			sessionStorage.getItem("session_user_data"),
		);
		console.log("Form Data:", session_user_data);
		session_name.value = "";
		session_email.value = "";
	},
	false,
);

//  - Task 08
console.log("SessionStorage before removal:", sessionStorage);
sessionStorage.removeItem("sessionString");
console.log("SessionStorage after removal:", sessionStorage);

// Activity 05
//  - Task 09
function setStorages(key, value) {
	localStorage.setItem(key, value);
	sessionStorage.setItem(key, value);
	console.log(localStorage.getItem(key));
	console.log(sessionStorage.getItem(key));
}
setStorages("course", "30 days JS Challange");

//  - Task 10
function clearStorages() {
	console.log("SessionStorage before clear:", sessionStorage);
	sessionStorage.clear();
	console.log("SessionStorage after clear:", sessionStorage);

	console.log("LocalStorage before clear:", localStorage);
	localStorage.clear();
	console.log("LocalStorage after clear:", sessionStorage);
}
clearStorages();
