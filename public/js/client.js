let socket = io();

const form = document.getElementById("form");
const ul = document.querySelector("ul");
const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    console.log(socket.id);
    socket.emit("send-message", input.value);

    const item = document.createElement("li");
    item.textContent = input.value;
    item.setAttribute("class", "message my-message");
    ul.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);

    input.value = "";
  }
});

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("receive-message", function (msg) {
  console.log(socket.id);
  const item = document.createElement("li");
  item.textContent = msg;
  item.setAttribute("class", "message");
  ul.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
