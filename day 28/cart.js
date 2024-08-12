// local storage
let cart_products = JSON.parse(localStorage.getItem("cart_products")) || [];

// variables
let cart_products_container = document.getElementById(
	"cart_products_container",
);
let product_count = document.getElementById("product_count");

product_count.textContent =
	cart_products.length > 0 ? cart_products.length : "0";

// functions
function createCartProductSectionHTML(cart_product) {
	let section = document.createElement("section");
	section.id = cart_product.id;

	let img = document.createElement("img");
	img.src = cart_product.imgURL;
	img.alt = cart_product.title;

	let div_product_details = document.createElement("div");
	div_product_details.id = "product_details";

	let div_product_title_price = document.createElement("div");
	div_product_title_price.id = "product_title_price";

	let h3_title = document.createElement("h3");
	h3_title.id = "title";
	h3_title.textContent = cart_product.title;

	let p_price = document.createElement("p");
	p_price.id = "price";
	p_price.textContent = `$${cart_product.price}`;

	div_product_title_price.append(h3_title, p_price);

	let div_product_count = document.createElement("div");
	div_product_count.id = "product_count";

	let p_count = document.createElement("p");
	p_count.textContent = cart_product.quantity;

	let decrease_btn = document.createElement("button");
	decrease_btn.classList.add("transition_25");
	decrease_btn.textContent = "-";

	let increase_btn = document.createElement("button");
	increase_btn.classList.add("transition_25");
	increase_btn.textContent = "+";

	div_product_count.append(decrease_btn, p_count, increase_btn);

	div_product_details.append(div_product_title_price, div_product_count);

	let remove_btn = document.createElement("button");
	remove_btn.classList.add("transition_25");
	remove_btn.textContent = "Remove";

	section.append(img, div_product_details, remove_btn);

	cart_products_container.appendChild(section);

	remove_btn.addEventListener("click", (e) => {
		let remove_cart_product_id = e.target.parentNode.id;

		cart_products = cart_products.filter(
			(cart_product) => cart_product.id !== remove_cart_product_id,
		);

		localStorage.setItem("cart_products", JSON.stringify(cart_products));

		cart_products_container.innerHTML = "";

		cart_products.forEach((cart_product) =>
			createCartProductSectionHTML(cart_product),
		);
	});

	decrease_btn.addEventListener("click", (e) => {
		let selected_cart_product_id =
			e.target.parentNode.parentNode.parentNode.id;

		cart_products = cart_products.map((cart_product) =>
			cart_product.id == selected_cart_product_id
				? {
						...cart_product,
						quantity:
							cart_product.quantity > 1
								? cart_product.quantity - 1
								: 1,
				  }
				: cart_product,
		);

		p_count.textContent = cart_products.find(
			(cart_product) => cart_product.id == selected_cart_product_id,
		).quantity;

		localStorage.setItem("cart_products", JSON.stringify(cart_products));
	});

	increase_btn.addEventListener("click", (e) => {
		let selected_cart_product_id =
			e.target.parentNode.parentNode.parentNode.id;

		cart_products = cart_products.map((cart_product) =>
			cart_product.id == selected_cart_product_id
				? {
						...cart_product,
						quantity: cart_product.quantity + 1,
				  }
				: cart_product,
		);

		p_count.textContent = cart_products.find(
			(cart_product) => cart_product.id == selected_cart_product_id,
		).quantity;

		localStorage.setItem("cart_products", JSON.stringify(cart_products));
	});
}

cart_products.forEach((cart_product) =>
	createCartProductSectionHTML(cart_product),
);
