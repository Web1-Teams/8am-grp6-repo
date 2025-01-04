import "./Navbar.css";
import logo from "../../assets/Internal-Medicine-images/logo.png"
import { Link } from 'react-router-dom';
//import React, {useState} from "react"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
const Homepage = () => {
  
  return (
    <div>
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="An-Najah Hospital Logo" className="logo" />
      </div>
      <div className="contact-info">
        <div className="contact-info-details">
          <FaPhoneAlt className="icon" />
          <div>
            <p>Emergency Number</p>
            <p>+970 592 444 010</p>
          </div>
        </div>
        <div className="contact-info-details">
          <FaMapMarkerAlt className="icon" />
          <div>
            <p>Our Location</p>
            <p>Asira Street - Nablus, Palestine</p>
          </div>
        </div>
      </div>
      
        </header>
          <header className="header-sub">
  <Link to="/home">Home</Link>
  <Link to="/pharmacy">Pharmacy</Link>
 
  <Link to="/appointmentForm">Appointment</Link>
  <div className="dropdown">
    <a href="#" className="dropdown-toggle">Specialiest</a>
    <ul className="dropdown-menu">
      {/* <li><Link to="/cardiologySection">Cardiology Section</Link></li><br /> */}
      <li><Link to="/internalMedicine">Internal Medicine</Link></li><br />
      <li><Link to="/gastrointestinal">Gastrointestinal And Endoscopy Section</Link></li><br />
      {/* <li><a href="/special4">Bone Marrow Transplantion</a></li><br />
      <li><a href="/special5">Brain and Neurology Diseases</a></li><br /> */}
      <li><Link to="/rheumatologyDisease">Rheumatology Disease</Link></li><br />
      <li><Link to="/oncology">Oncology</Link></li><br />
      <li><Link to="/pediatricOncology">Pediatric Oncology</Link></li><br />
      <li><Link to="/pediatric">Pediatric</Link></li>
          </ul>
    </div>
    <div className="dropdown">
    <a href="#" className="dropdown-toggle">Support Services</a>
    <ul className="dropdown-menu">
      <li><Link to="/phsyotherapy">Physiotherapy</Link></li><br />
      <li><Link to="/nutrition">Nutrition</Link></li><br />
      <li><Link to="/medicalLaboratory">Medical Laboratory</Link></li><br />
      <li><Link to="/infectionControl">Infection Control</Link></li><br />
      <li><Link to="/psychologicalSocialServices">Psychological Social Services</Link></li>
    </ul>
  </div>
  <Link to="/feedback">Feedback</Link>
</header>

      </div>
  );
};
export default Homepage;
