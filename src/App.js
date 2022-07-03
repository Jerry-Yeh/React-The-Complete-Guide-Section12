/** @format */

import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler}>Toggle ParaGraph!</Button>
    </div>
  );
}

export default App;
