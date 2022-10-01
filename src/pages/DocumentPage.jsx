import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import NavBar from "../components/Navbar/navbar";
import EditorElement from "../components/Editor/EditorElement";
import { useSearchParams } from "react-router-dom";

const DocumentPage = () => {
  const [socket, setSocket] = useState(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const socketConnection = io("ws://localhost:8081");
    setSocket(socketConnection);
  }, []);
  useEffect(() => {
    if (socket) {
      socket.emit(
        "join-room",
        searchParams.get("docId"),
        "6337e050de39fc7d9b8e008b"
      );
    }
  }, [socket]);
  return (
    <div>
      <div className="mainContent">
        <div className="nav-wrapper bg-white w-100vh drop-shadow-lg">
          <div className="w-[80%] m-auto h-14 bg-white">
            <NavBar />
          </div>
        </div>

        <div className="content-area relative">
          <div className="h-[100vh] w-[100%] bg-slate-100 absolute">
            <div className="w-[80%] bg-white mt-5 ml-auto mr-auto  drop-shadow-lg pb-10">
              <EditorElement socket={socket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
