import React from "react";
import Ceremony from "./Ceremony";

const Event = () => {
  const infantMaryLocations =
    "https://www.google.com/maps/place/Holy+Infant+Mary+Church/@12.2123952,75.3230437,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba4680e3e03e901:0x8ae94c3e5e45234f!8m2!3d12.2123952!4d75.3252324";
  const homeLocation =
    "https://www.google.com/maps/place/12%C2%B012'56.4%22N+75%C2%B019'32.4%22E/@12.2146261,75.3236307,17.25z/data=!4m13!1m6!3m5!1s0x3ba4680e3e03e901:0x8ae94c3e5e45234f!2sHoly+Infant+Mary+Church!8m2!3d12.2123952!4d75.3252324!3m5!1s0x3ba4680ec2488199:0xabe270c0388e1dae!7e2!8m2!3d12.215663!4d75.3256519";
  // const sebastiansLocation =
  //   "https://www.google.com/maps/place/Dharmagiri+St.+Sebastian's+Church/@11.4690427,76.4657476,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba8a1835b2c2529:0x37de6b8211a1e322!8m2!3d11.4690427!4d76.4679363";
  return (
    <section className="section-ceremony">
      <h2 className="ceremony-heading">When & Where</h2>
      <div className="ceremony-wrapper">
        {/* <Ceremony
          customClass="ceremony"
          heading="Betrothal Ceremony"
          datetime="Saturday, 24 April 2021, 11.30 AM"
          address="St.Sebastians Church Dharmagiri, Nilgiri District, TamilNadu"
          location={sebastiansLocation}
          description=""
          image={null}
        /> */}
        <Ceremony
          customClass="ceremony"
          heading="Wedding Ceremony"
          datetime="Monday, 26 April 2021, 10.30 AM"
          address="Holy Infant Mary Church, Madakkampoyil, Kannur District, Kerala"
          location={infantMaryLocations}
          description="The Wedding will be solemnised by Rev.Fr. Ashlin Kalathil"
        />
        <Ceremony
          customClass="flip-ceremony"
          heading="Wedding Reception"
          datetime="Monday, 26 April 2021, 01.30 PM"
          address="Kalathil House, Madakkampoyil,Peringome (PO), Kannur District, Kerala"
          location={homeLocation}
          description=""
        />
      </div>
    </section>
  );
};

export default Event;
