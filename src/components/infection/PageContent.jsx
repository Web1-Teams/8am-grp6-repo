// components/PageContent.jsx
import React, { useState, useEffect } from 'react';
import DoctorsSection from './DoctorSection';
import ServicesList from './Service';

function PageContent() {
  const [services, setServices] = useState([
    "Disinfection and Sterilization: Implementing regular sterilization programs for surfaces, tools, and public facilities to ensure a germ-free, healthy environment.",
    "Design of Infection Control Signs and Periodic Bulletins: Creating informational signs and bulletins related to infection control. ",
    "Environmental Health Services: Ensuring a healthy and safe environment through waste management, water supplies, and sewage systems.",
    "Vaccinations: Providing vaccination programs against infectious diseases to reduce their spread, such as flu vaccines or measles vaccines.",
    "Personal Protective Measures: Including the use of personal protective equipment such as masks, gloves, and protective gowns, especially for healthcare workers.",
    "Collecting and analyzing data related to infection cases to identify possible causes and effective preventive measures.",
    "Implementing strict preventive measures during surgeries, such as sterilizing tools and attire and ensuring a sterile environment.",
    "Vaccinating hospital staff against certain infectious diseases (such as flu and COVID-19) to reduce the risk of infection.",
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="header-image-container">
        <img
          src="src/assets/images/مكافحة العدوى.jpg"
          alt="Infection control "
          className="header-image"
        />
      </div>
      <h2 className="services-title">Our Available Services:</h2>
      <div className="services-section">
        <ServicesList services={services} />
      </div>
      <h2 className="pbmit-title">Our Doctors</h2>
      <DoctorsSection />
    </div>
  );
}

export default PageContent;