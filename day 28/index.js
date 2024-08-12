// imports
import { products } from "./constants/product.js";

// local
let cart_products = JSON.parse(localStorage.getItem("cart_products")) || [];

// variables
let products_container = document.getElementById("products_container");

// functions
function createProductSectionHTML(product) {
	let section = document.createElement("section");
	section.id = product.id;

	let img = document.createElement("img");
	img.src = product.imgURL;
	img.alt = product.title;

	let div_product_details = document.createElement("div");
	div_product_details.id = "product_details";

	let div_product_title_price = document.createElement("div");
	div_product_title_price.id = "product_title_price";

	let h3_title = document.createElement("h3");
	h3_title.id = "title";
	h3_title.textContent = product.title;

	let p_price = document.createElement("p");
	p_price.id = "price";
	p_price.textContent = `$${product.price}`;

	div_product_title_price.append(h3_title, p_price);

	let p_description = document.createElement("p");
	p_description.id = "description";
	p_description.textContent = product.description;

	div_product_details.append(div_product_title_price, p_description);

	let add_button = document.createElement("button");
	add_button.classList.add("transition_25");
	add_button.textContent = "Add";

	section.append(img, div_product_details, add_button);

	products_container.appendChild(section);

	add_button.addEventListener("click", (e) => {
		let add_to_cart_product_id = e.target.parentNode.id;

		let add_to_cart_product = products.find(
			(product) => product.id == add_to_cart_product_id,
		);

		let cart_product = cart_products.find(
			(cart_product) => cart_product.id == add_to_cart_product_id,
		);

		if (cart_product) {
			cart_product.quantity++;
		} else {
			cart_products.push(add_to_cart_product);
		}

		// local storage
		localStorage.setItem("cart_products", JSON.stringify(cart_products));
	});
}

// main
products.forEach((product) => {
	createProductSectionHTML(product);
});
