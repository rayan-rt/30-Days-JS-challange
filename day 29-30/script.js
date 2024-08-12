// redirection -> ./posts/post_feed.html

// variables
let user_form = document.getElementById("user_form");
let input_name = document.getElementById("input_name");
let input_password = document.getElementById("input_password");

// events
user_form.addEventListener("submit", (e) => {
	e.preventDefault();

	let user_name = input_name.value;
	let user_password = input_password.value;

	input_name.value = input_password.value = "";

	let loggedIn_user = {
		id: String(Date.now()),
		user_name,
		user_password,
	};

	localStorage.removeItem("loggedIn_user");

	localStorage.setItem("loggedIn_user", JSON.stringify(loggedIn_user));

	window.location.href = "./posts/post_feed.html";
});

// --
