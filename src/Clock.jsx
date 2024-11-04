import React from "react";
import "./clock.css";

export default function clock() {
  return (
    <>
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand"></div>
          <div className="hand min-hand"></div>
          <div className="hand sec-hand"></div>
        </div>
      </div>
      <script>
        {function setDate() {
          console.log("aopa");
          setInterval(setDate, 1000);
        }}
      </script>
    </>
  );
}
