import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/Navbar/navbar";
import EditorElement from "../components/Editor/EditorElement";
import { useSearchParams } from "react-router-dom";
import Newnav from "../components/NewNav/Newnav";

const DocumentPage = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
      return;
    }
  }, []);
  useEffect(() => {
    const socketConnection = io("ws://10.1.105.126:8081");
    setSocket(socketConnection);
  }, []);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (socket) {
      socket.emit("join-room", searchParams.get("docId"), userId);
    }
  }, [socket]);
  return (
    <div>
      <div className="mainContent">
        <Newnav isDoc={true} isLogin={true} />

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
