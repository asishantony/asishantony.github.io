import React from "react";
import heart from "../Assets/heart.png";

const Landing = () => {
  return (
    <main>
      <div className="landing-content">
        <img src={heart} alt="love" />
        <div className="text-content">
          <h4>WE'RE GETTING MARRIED</h4>
          <h2>Save Our Date</h2>
          <h4>03 May 2021</h4>
        </div>
      </div>
    </main>
  );
};

export default Landing;
