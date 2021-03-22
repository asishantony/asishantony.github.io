import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp }) {
  console.log(expiryTimestamp);
  const { isRunning, seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>We are waiting for the big day </h1>
      <p>{isRunning ? "Running" : "Not running"}</p>
      {/* <p>Timer Demo</p> */}
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}
