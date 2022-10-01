import React from "react";
import EditorElement from "./components/Editor/EditorElement";
import Navbar from "./components/navbar";
import TextEditor from "./components/TextEditor";
import DocumentPage from "./pages/DocumentPage";

const App = () => {
  return (
    <div>
      <div className="mainContent">
        <div className="nav-wrapper bg-white w-100vh drop-shadow-lg">
          <div className="w-[80%] m-auto h-14 bg-white">
            <Navbar />
          </div>
        </div>

        <div className="content-area relative">
          <div className="h-[100%] w-[100%] bg-slate-50 absolute">
            <div className="w-[80%] bg-white h-[100vh] mt-5 ml-auto mr-auto  drop-shadow-lg">
              <EditorElement />
            </div>
          </div>
        </div>
        <Navbar />
        <DocumentPage />
        <TextEditor />
      </div>
    </div>
  );
};

export default App;
