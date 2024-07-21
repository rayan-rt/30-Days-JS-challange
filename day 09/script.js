// Activity 01
//  - Task 01
document.getElementById("box1").textContent = "Task 01 👍🏼";

//  - Task 02
document.querySelector(".box").style.backgroundColor = "pink";

// Activity 02
//  - Task 03
let div2 = document.createElement("div");
div2.textContent = "Task 03 👍🏼";
document.body.appendChild(div2);

//  - Task 04
let ul = document.getElementById("list1");
let new_li = document.createElement("li");
new_li.textContent = "Task 04 👍🏼";
ul.appendChild(new_li);

// Activity 03
//  - Task 05
let item_to_remove = document.getElementById("item_to_remove");
ul.removeChild(item_to_remove);

//  - Task 06
let div_with_children = document.getElementById("div_with_children");
div_with_children.removeChild(div_with_children.lastElementChild);

// Activity 04
//  - Task 07
let selected_img = document.getElementById("calabria_img");
selected_img.src =
	"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSr7jjGFqtMUpn1gGHn00rq4CIUnz7W8c2ytIvLyAiw3vT_xhZ2KruTe0Lzoa5j8p5YwfGQcdlP5yaAmuarcPWjNvxRqUm9swZIiDbrig";

//  - Task 08
div2.classList.add("rounded_10");
div2.classList.remove("rounded_10");

// Activity 05
//  - Task 09
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

//  - Task 10
let div_of_border = document.getElementById("border");
div_of_border.addEventListener(
	"mouseover",
	() => {
		div_of_border.style.borderColor = "yellow";
	},
	false,
);
