import React, { useState } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString(); 
    setTime(newTime);
  };
  setInterval(() => {
    setTime(updateTime);
  }, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default Timer;
