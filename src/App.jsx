import React from "react";
import Homepage from "../src/compontents/Homepage/Homepage";
import Feedback from "../src/compontents/Feedback/Feedback";
import Footer from "../src/compontents/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <div className="Homepage">
        <Homepage />
      </div>
      <div className="Feedback">
        <Feedback />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;