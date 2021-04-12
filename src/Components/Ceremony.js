import React from "react";

const Ceremony = (props) => {
  const {
    customClass,
    heading,
    datetime,
    address,
    description,
    location,
    image,
  } = props;
  return (
    <div className={customClass}>
      <div className="left">
        <img
          src={
            image ||
            "http://lavelo-react.wpocean.com/static/media/1.9f62dba6.jpg"
          }
          alt=""
        />
      </div>
      <div className="right">
        <h4 className="title">{heading}</h4>
        <span>{datetime}</span>
        <span>{address}</span>
        <p>{description}</p>
        <a href={location} rel="noreferrer" target="_blank" className="btn">
          See Location
        </a>
      </div>
    </div>
  );
};

export default Ceremony;
