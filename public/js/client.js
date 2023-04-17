let socket = io();

let form = document.getElementById('form');
let input = document.getElementById('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    console.log(input.value)
    socket.emit('message', input.value);
    input.value = '';
  }
});

socket.on('message', function(msg) {
  var item = document.createElement('li');
  console.log(msg)
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});