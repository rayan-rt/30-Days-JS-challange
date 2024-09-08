// variables
let loader = document.querySelector(".loader");
let form = document.getElementById("form");
let city_input = document.getElementById("city_input");
let city = document.getElementById("city");
let str = document.querySelector(".str");
let exact_city_name = document.getElementById("exact_city_name");

// arrays
let sections = document.querySelectorAll(".main_sections");

// functions
function createHtmlEle(day, temperature, i) {
	let icon_class = "";
	let temperature_status = "";

	if (temperature < 10) {
		temperature_status = "Cold";
		icon_class = "ri-temp-cold-line";
	} else if (temperature < 25) {
		temperature_status = "Cloudy";
		icon_class = "ri-cloud-line";
	} else {
		temperature_status = "Sunny";
		icon_class = "ri-sun-line";
	}

	let html = `
	<section id="day_2" class="days">
	    <p>${temperature}<sup>∘</sup> <span><i class=${icon_class}></i></span></p>
	    <p>${temperature_status}</p>
	</section>
	<p class=${i === 0 ? "blue" : ""}>${day}</p>`;

	loader.style.display = "none";

	sections.forEach((section) => {
		section.style.display = "inline-block";
	});
	sections[i].innerHTML = html;
}

function getDayOfWeek(d) {
	let date = new Date(d);
	let day_num = date.getDay();
	// console.log("day_num:", day_num);

	let days_of_week = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	return days_of_week[day_num];
}

function getReport(list) {
	for (let i = 0; i < list.length; i++) {
		let day = getDayOfWeek(list[i].dt_txt);
		// console.log(day);

		let temperature = Math.floor(list[i].main.temp - 273);
		// console.log(temperature);

		let section = sections[i];
		// console.log(section);

		createHtmlEle(day, temperature, i);
	}
}

async function getWeather(url) {
	try {
		let response = await fetch(url);
		let data = await response.json();
		if (!data) throw new Error("Couldn't fetch future days data");
		let { list } = data;
		// console.log("Future Forecast Day:", list);

		let uniqueDays = {};

		list.forEach((entry) => {
			let date = entry.dt_txt.split(" ")[0];
			if (!uniqueDays[date]) {
				uniqueDays[date] = entry;
			}
		});

		let filteredList = Object.values(uniqueDays);

		// console.log("Filtered Future Forecast:", filteredList);
		getReport(filteredList);
	} catch (error) {
		console.log("Error:", error);
	}
}

// events
form.addEventListener("submit", async (e) => {
	e.preventDefault();

	let city_name = city_input.value.trim();
	city_input.value = "";

	sections.forEach((section) => (section.style.display = "none"));

	loader.style.display = "inline-block";

	// API call
	const cnt = 31;
	const api_key = "2cb8d317baf8d722add0208f0ec54342";
	const URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&cnt=${cnt}&appid=${api_key}`;

	getWeather(URL2);

	str.textContent = "Weather Report of ";
	exact_city_name.textContent = city_name;
	city.style.visibility = "visible";
});
