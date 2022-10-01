import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const DocumentPage = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketConnection = io("ws://localhost:8081");
    setSocket(socketConnection);
  }, []);
  useEffect(() => {
    if (socket) {
      socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });
      socket.on("hello from server", (...args) => {
        console.log(args);
      });
    }
  }, [socket]);
  return <div>DocumentPage</div>;
};

export default DocumentPage;
