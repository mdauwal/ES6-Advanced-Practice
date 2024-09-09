import React, { useState } from "react";
import './App.css'; 



function App() {
const [heading, setHeading] = useState("Hello") 
const [isMouseOver, setMouseOver] = useState(false)

  function handleClick () {
    setHeading("Submitted")
  };

  function handleMouseOver () {
    setMouseOver(true)   
  };

  function handleMouseOut () {
    setMouseOver(false)
  }


  
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} style={{backgroundColor: isMouseOver ? "black" : "white"}}>Submit</button>
    </div>
  );
}

export default App;
