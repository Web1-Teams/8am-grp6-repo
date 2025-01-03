
import React from "react";

import PageContent from './components/gastrointesti/PageContent';
import Homepage from "../src/compontents/Homepage/Homepage";
import Feedback from "../src/compontents/Feedback/Feedback";
import Footer from "../src/compontents/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <div className="Homepage">
        <Homepage />
       <PageContent />
    <Feedback />
     <Footer />
      


  );
}

export default App;