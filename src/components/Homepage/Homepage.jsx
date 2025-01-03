import "./Homepage.css";

import logo from "./logo.png"
import logoo from "./logoo.png"


import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import videoSrc from "./video native.mp4"
import React, {useState} from "react"

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
        <div className="social-media">

          <a href="#" target="_blank" rel="noopenernoreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopenernoreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopenernoreferrer">
            <FaYoutube className="social-icon" />
          </a>
         </div>
        </header>
          <header className="header-sub">
  <a href="/" className="logo-1">Our services</a>
  <a href="/">Home +</a>
  <a href="/">Pharmacy +</a>
  <a href="/">Appointment +</a>
  <div className="dropdown">
    <a href="#" className="dropdown-toggle">Specialiest +</a>
    <ul className="dropdown-menu">
      <li><a href="/special1">- Cardiology Section</a></li><br />
      <li><a href="/special2">- Internal Medicine</a></li><br />
      <li><a href="/special3">- Gastrointestinal And Endoscopy Section</a></li><br />
      <li><a href="/special4">- Bone Marrow Transplantion</a></li><br />
      <li><a href="/special5">- Brain and Neurology Diseases</a></li><br />
      <li><a href="/special6">- Rheumatology Disease</a></li><br />
      <li><a href="/special7">- Oncology</a></li><br />
      <li><a href="/special8">- Pediatric Oncology</a></li><br />
      <li><a href="/special9">- Dermatology</a></li>
      <li><a href="/special10">- Nutrition</a></li>
    </ul>
    </div>

    <div className="dropdown">
    <a href="#" className="dropdown-toggle">Support Services +</a>
    <ul className="dropdown-menu">
      <li><a href="/support1">- Physiotherapy</a></li><br />
      <li><a href="/support2">- Pharmacy</a></li><br />
      <li><a href="/support3">- Medical Laboratory</a></li><br />
      <li><a href="/support4">- Infection Control</a></li><br />
      <li><a href="/support4">- Psychological Social Services</a></li>
    </ul>
  </div>
</header>
<section className="video-1">
<video autoPlay loop muted>

<source src={videoSrc}
type="video/mp4" />


</video>  
        
      </section>
      <div className="content-sub"><h2>About An-Najah Hospital</h2>
        <p>
          Our website is an innovative platform designed to enhance the healthcare experience by providing
          comprehensive services that make accessing medical information simple and efficient. Through the
          website, you can explore a detailed list of available doctors, review their specialties and medical
          expertise, and select the doctor best suited to your health needs. The platform also offers accurate
          information about doctors' schedules and hospital services, with the convenience of booking
          appointments online.
        </p><br />
        
        <div className="addition" ><h4>Insurance Company</h4><br />
        <img
            src={logoo}
            alt="logoo.png"
            className="footer-logo"
          />
        </div>
        <br />
      </div>

      </div>

          <button href="#" target="_blank" rel="noopenernoreferrer">
            <FaFacebookF className="social-icon" />
          </button>
          <button href="#" target="_blank" rel="noopenernoreferrer">
            <FaInstagram className="social-icon" />
          </button>
          <button href="#" target="_blank" rel="noopenernoreferrer">
            <FaYoutube className="social-icon" />
          </button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h2>About An-Najah Hospital</h2>
            <p>
              Our website is an innovative platform designed to enhance the
              healthcare experience by providing comprehensive services that
              make accessing medical information simple and efficient. Through
              the website, you can explore a detailed list of available doctors,
              review their specialties and medical expertise, and select the
              doctor best suited to your health needs. The platform also offers
              accurate information about doctors’ schedules and hospital
              services, with the convenience of booking appointments online. We
              believe in the importance of user feedback in improving our
              services. Therefore, the website features a review and rating
              system, allowing users to share their experiences and help others
              make informed decisions. Our goal is to be your trusted gateway to
              a comfortable and outstanding medical experience.
            </p>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Homepage;
