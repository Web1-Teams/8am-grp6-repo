import "./App.css";
import React from "react";
import Homepage from "./components/Homepage/Homepage"; 
import PageContent from './components/Rheumatology Disease/PageContent';
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="Homepage">
        <Homepage />
      </div>
      <div className="PageContent">
        <PageContent />
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
