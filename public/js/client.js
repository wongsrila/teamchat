let socket = io();

const form = document.getElementById("form");
const ul = document.querySelector("ul");
const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    console.log(input.value);
    socket.emit("message", input.value);
    input.value = "";
  }
});

socket.on("message", function (msg) {
  const item = document.createElement("li");
  console.log(msg);
  item.textContent = msg;
  ul.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
