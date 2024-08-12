// variables
let main = document.getElementById("main");
let form = document.getElementById("form");
let movie_input = document.getElementById("movie_input");
let modal = document.querySelector(".modal");
const base_URL = "https://image.tmdb.org/t/p/w200";

// functions
function html(movie) {
	let section = document.createElement("section");
	section.classList.add("transition_025");

	let img = document.createElement("img");
	img.src = base_URL + movie.poster_path;
	img.alt = movie.title;

	let h3 = document.createElement("h3");
	h3.textContent = movie.title;

	let p = document.createElement("p");
	p.textContent = movie.release_date.split("-")[0];

	section.append(img, h3, p);

	main.appendChild(section);

	section.addEventListener("click", (e) => {
		main.innerHTML = "";
		main.appendChild(section);
	});
}

function createHtmlEle(movies) {
	movies.forEach((movie) => {
		html(movie);
	});
}

async function fetchMovies(url) {
	try {
		let response = await fetch(url);
		let data = await response.json();
		if (!data) throw new Error("Error while Fetching...");
		let { results } = data;
		createHtmlEle(results);
	} catch (error) {
		console.log("Error:", error);
	}
}

async function fetchPopularMovies(url) {
	try {
		let response = await fetch(url);
		let data = await response.json();
		if (!data) throw new Error("Error while popular_movies Fetching...");
		let { results } = data;
		return results;
	} catch (error) {
		console.log("Error:", error);
	}
}

async function fetchTopratedMovies(url) {
	try {
		let response = await fetch(url);
		let data = await response.json();
		if (!data) throw new Error("Error while toprated_movies Fetching...");
		let { results } = data;
		return results;
	} catch (error) {
		console.log("Error:", error);
	}
}

async function fetchUpcomingMovies(url) {
	try {
		let response = await fetch(url);
		let data = await response.json();
		if (!data) throw new Error("Error while upcoming_movies Fetching...");
		let { results } = data;
		return results;
	} catch (error) {
		console.log("Error:", error);
	}
}
// --

const api_key = "e2fb1e387df25a87507bc96cc6d67bca";
const my_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
const toprated_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
const upcoming_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

fetchMovies(my_URL);

async function searchMovie(movie_name) {
	let popular_movies = await fetchPopularMovies(my_URL);
	let toprated_movies = await fetchTopratedMovies(toprated_URL);
	let upcoming_movies = await fetchUpcomingMovies(upcoming_URL);

	console.log(popular_movies);

	let all_movies = [
		...popular_movies,
		...toprated_movies,
		...upcoming_movies,
	];

	console.log(all_movies);

	let demanded_movies = all_movies.filter((movie) =>
		movie.title.toLowerCase().includes(movie_name.toLowerCase())
			? movie
			: "",
	);

	main.innerHTML = "";

	demanded_movies.forEach((demanded_movie) => {
		html(demanded_movie);
	});
}

// event
form.addEventListener("submit", (e) => {
	e.preventDefault();

	let movie_name = movie_input.value.trim();

	searchMovie(movie_name.toLowerCase());
});
