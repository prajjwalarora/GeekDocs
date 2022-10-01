import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewNav from "../components/NewNav/Newnav";
import HomeContent from "../components/HomeContent/Homecontent";
// import logo from "../../public/logo.png";

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/docs");
    }
  }, []);
  return (
    <div>
      <NewNav isDoc={false} />
      <HomeContent />
    </div>
  );
};
export default Homepage;
