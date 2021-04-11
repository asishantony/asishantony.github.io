import React, { useState, useEffect } from "react";
import CountDown from "./CountDown";
import Couple from "./Couple";
import Event from "./Event";
import Gallery from "./Gallery";
import Header from "./Header";
import Landing from "./Landing";
import Modal from "./Modal";
// import WelcomeArea from "./WelcomeArea";
import ThankYou from "./ThankYou";
import YoutubePlayer from "./YoutubePlayer";

const Main = () => {
  const [showTimer, setshowTimer] = useState(false);
  const [timeValue, setTimeValue] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    var time = new Date();
    var date2 = new Date("April 26, 2021 10:30:00");
    var seconds = Math.abs(time - date2) / 1000;
    if (date2 < time) {
      setshowTimer(false);
      setTimeValue("");
      time = "";
    } else {
      setshowTimer(true);
      time.setSeconds(time.getSeconds() + seconds);
      setTimeValue(time);
    }
  }, []);
  const onExpire = () => {
    setshowTimer(false);
  };
  return (
    <div className="App">
      <Header />
      <Landing />
      {showTimer ? (
        <CountDown expiryTimestamp={timeValue} expiryFunction={onExpire} />
      ) : (
        <YoutubePlayer />
      )}

      <Couple />
      {/* <WelcomeArea /> */}

      <Event />
      <Gallery setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
      )}
      <ThankYou />
    </div>
  );
};

export default Main;
