const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Middleware
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Socket.io
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Server listener
server.listen(3000, () => {
  console.log("listening on *:3000");
});
