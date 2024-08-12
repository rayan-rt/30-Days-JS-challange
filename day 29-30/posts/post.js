// local storage
let loggedIn_user = JSON.parse(localStorage.getItem("loggedIn_user"));
let posts = JSON.parse(localStorage.getItem("posts"));

// variables
let loggedIn_user_name = document.getElementById("loggedIn_user_name");
let loggedIn_username = loggedIn_user.user_name;
loggedIn_user_name.textContent = loggedIn_username;

let main_posts_container = document.getElementById("main_posts_container");

let isCommentsDisplay = false;

// functions
function createCommentsHTML(post) {
	let comment_section = document.createElement("div");
	comment_section.id = "comment_section";
	comment_section.style.display = isCommentsDisplay ? "flex" : "none";

	let comment_form = document.createElement("form");
	comment_form.id = "comment_form";
	let input_comment = document.createElement("input");
	input_comment.id = "input_comment";
	input_comment.type = "text";
	input_comment.placeholder = "Comment...";
	input_comment.required = true;

	comment_form.appendChild(input_comment);

	if (post.post_comments.length > 0) {
		post.post_comments.forEach((post_comment) => {
			let comments_container = document.createElement("div");
			comments_container.id = "comments_container";

			let particular_user_comment = document.createElement("div");
			particular_user_comment.id = "particular_user_comment";

			let comment_username = document.createElement("p");
			comment_username.id = "comment_username";
			comment_username.textContent = post_comment.username;

			let comment = document.createElement("p");
			comment.id = "comment";
			comment.textContent = post_comment.usercomment;

			particular_user_comment.append(comment_username, comment);

			comments_container.appendChild(particular_user_comment);

			comment_section.append(comment_form, comments_container);
		});
	} else {
		comment_section.append(comment_form);
	}

	comment_form.addEventListener("submit", (e) => {
		e.preventDefault();

		let usercomment = input_comment.value;

		input_comment.value = "";

		let comment_obj = {
			username: loggedIn_username,
			usercomment,
		};

		post.post_comments.push(comment_obj);

		localStorage.setItem("posts", JSON.stringify(posts));

		main_posts_container.innerHTML = "";

		posts.forEach((post) => {
			createPostHTML(post);
		});
	});

	return comment_section;
}

function createPostHTML(post) {
	let section = document.createElement("section");
	section.id = post.post_id;

	let postUsername = document.createElement("p");
	postUsername.id = "post_username";
	postUsername.textContent = post.post_createdBy;

	let postDate = document.createElement("p");
	postDate.id = "post_date";
	postDate.textContent = post.post_createdAt;

	let postImage = document.createElement("img");
	postImage.src = post.post_image_DataUrl;
	postImage.alt = "post";

	let postCaption = document.createElement("p");
	postCaption.id = "post_caption";
	postCaption.textContent = post.post_caption;

	let btnsContainer = document.createElement("div");
	btnsContainer.id = "btns_container";

	let heartContainer = document.createElement("div");

	let heartButton = document.createElement("button");
	heartButton.classList.add("transition_25");
	let heartIcon = document.createElement("i");
	heartIcon.classList.add("ri-heart-line");
	heartButton.append(heartIcon);
	let likesCount = document.createElement("p");
	likesCount.classList.add("count");
	likesCount.textContent = post.post_likes_count;

	heartContainer.append(heartButton, likesCount);

	let commentContainer = document.createElement("div");

	let commentButton = document.createElement("button");
	commentButton.classList.add("transition_25");
	let commentIcon = document.createElement("i");
	commentIcon.classList.add("ri-chat-3-line");
	commentButton.append(commentIcon);
	let commentsCount = document.createElement("p");
	commentsCount.classList.add("count");
	commentsCount.textContent = post.post_comments.length;

	commentContainer.append(commentButton, commentsCount);

	btnsContainer.append(heartContainer, commentContainer);

	let comment_section = createCommentsHTML(post);

	section.append(
		postUsername,
		postDate,
		postImage,
		postCaption,
		btnsContainer,
		comment_section,
	);

	main_posts_container.appendChild(section);

	// like
	heartButton.addEventListener("click", (e) => {
		// <i class="ri-heart-line"></i> --> <i class="ri-heart-fill"></i>
		let liked_post_id =
			e.target.parentNode.parentNode.parentNode.parentNode.id;

		posts = posts.map((post) =>
			post.post_id == liked_post_id
				? {
						...post,
						post_likes_count: post.post_likes_count + 1,
				  }
				: post,
		);

		localStorage.setItem("posts", JSON.stringify(posts));

		main_posts_container.innerHTML = "";

		posts.forEach((post) => {
			createPostHTML(post);
		});
	});

	// comment
	commentButton.addEventListener("click", (e) => {
		isCommentsDisplay = !isCommentsDisplay;
		comment_section.style.display = isCommentsDisplay ? "flex" : "none";
	});
}

// main
if (posts.length > 0) {
	posts.forEach((post) => {
		createPostHTML(post);
	});
}
