import React from "react";
import DocumentPage from "./pages/DocumentPage";
import Login from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Document from "./pages/Document";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/editor" exact element={<DocumentPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/docs" exact element={<Document />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
