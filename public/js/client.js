let socket = io();

const form = document.getElementById("form");
const ul = document.querySelector("ul");
const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("send-message", input.value);
    input.value = "";
  }
});

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("receive-message", function (msg) {
  const item = document.createElement("li");
  item.textContent = msg;
  ul.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
