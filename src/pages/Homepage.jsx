import React from "react";
import NewNav from "../components/NewNav/Newnav";
import HomeContent from "../components/HomeContent/Homecontent";
// import logo from "../../public/logo.png";

const Homepage = () => {
  return (
    <div>
      <NewNav isDoc={false} />
      <HomeContent />
    </div>
  );
};
export default Homepage;
