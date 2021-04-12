import React from "react";
import CoupleComponent from "./CoupleComponent";
import bibi from "../Assets/bibi2.jpg";
import asish from "../Assets/asi.jpg";
const Couple = () => {
  return (
    <section className="couple">
      <div>
        <h2>Happy Couple</h2>
        <div className="couple-tile">
          <CoupleComponent
            type="bride"
            img={bibi}
            name="Alphonsa Kurian"
            detail=" Working as Finance and Administrative Business Analyst at IBM, Bangalore"
          />

          <div className="tile-seperator">
            <img
              src="http://lavelo-react.wpocean.com/static/media/2.3b18046c.png"
              alt=""
            />
          </div>
          <CoupleComponent
            type="groom"
            img={asish}
            name="Asish K Antony"
            detail="Working as Web Developer at CodePoint Software Pvt Ltd, Kochi"
          />
        </div>
      </div>
    </section>
  );
};

export default Couple;
