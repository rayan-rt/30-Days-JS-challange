// local storage
let posts = JSON.parse(localStorage.getItem("posts")) || [];
let loggedIn_user = JSON.parse(localStorage.getItem("loggedIn_user"));

// variables
let post_form = document.getElementById("post_form");
let input_caption = document.getElementById("input_caption");
let input_image = document.getElementById("input_image");

// event
post_form.addEventListener("submit", (e) => {
	e.preventDefault();

	let post_caption = input_caption.value;
	let post_image = input_image.files[0];

	if (post_image) {
		let reader = new FileReader();

		reader.onload = (e) => {
			let post_image_DataUrl = e.target.result;

			let post_createdBy = loggedIn_user.user_name;

			let timestamps = Date.now();
			let date = new Date(timestamps);
			let post_createdAt = date.toLocaleDateString();

			let post_likes_count = 0;
			let post_comments = [
				// { username, usercomment }
			];

			let new_post = {
				post_id: String(Date.now()),
				post_createdBy,
				post_createdAt,
				post_image_DataUrl,
				post_caption,
				post_likes_count,
				post_comments,
			};

			posts.push(new_post);

			localStorage.setItem("posts", JSON.stringify(posts));

			post_form.reset();

			console.log("posts:", posts);
		};

		reader.readAsDataURL(post_image);
	}

	window.location.href = "./post_feed.html";
});
