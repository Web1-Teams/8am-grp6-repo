import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage/Homepage";
import PageContent from "./components/medical/PageContent"; 
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import AppointmentForm from "./components/AppointmentForm";

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
      <div className="AppointmentForm">
        <AppointmentForm />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
