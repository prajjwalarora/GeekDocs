const { createServer } = require("http");
const { Server } = require("socket.io");
const docController = require("./controllers/docController");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // send a message to the client
  socket.on("join-room", (roomId, userId) => {
    socket.emit("user-connected", userId);
    socket.to(roomId).emit("user-connected", userId);
    socket.join(roomId);
    socket.on("input-by-user", (data, userId) => {
      docController.saveDoc(roomId, data);
      socket.to(roomId).emit("input-by-user", data, userId);
    });
  });
});

httpServer.listen(process.env.SOCKET_PORT);
