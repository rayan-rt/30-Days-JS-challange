let username = prompt("Enter Username");

const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", () => {
	console.log("Connected to the WebSocket server");
});

socket.addEventListener("message", (e) => {
	const data = JSON.parse(e.data);
	// console.log(`Message from server: ${data.message}`);
	chat(data.message, data.username === username ? "send" : "receive");
});

socket.addEventListener("close", () => {
	console.log("Disconnected from the WebSocket server");
});

socket.addEventListener("error", (error) => {
	console.error("WebSocket error:", error);
});

// Variables
let form = document.getElementById("form");
let msg_input = document.getElementById("msg_input");
let chat_board = document.getElementById("chat_board");

// Functions
function scrollToBottom() {
	chat_board.scrollTop = chat_board.scrollHeight;
}

function chat(message, user) {
	let html = `<p class=${user}>${message}</p>`;
	chat_board.innerHTML += html;
	scrollToBottom();
}

// Event
form.addEventListener("submit", (e) => {
	e.preventDefault();

	let message = msg_input.value;
	msg_input.value = "";

	// chat(message, "send");

	const messageData = {
		type: "message",
		message,
		username,
	};

	socket.send(JSON.stringify(messageData));
});
