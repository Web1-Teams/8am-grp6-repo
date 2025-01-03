// components/PageContent.jsx
import React, { useState, useEffect } from 'react';
import DoctorsSection from './DoctorSection';
import ServicesList from './Service';

function PageContent() {
    const [services, setServices] = useState([
      "Psychological counseling: Providing psychological support to the patient to cope with the psychological pressures associated with the medical diagnosis, anxiety about the future, and adjusting to difficult treatments.",
      "Behavioral therapy: It aims to modify harmful behaviors or adapt to the new health condition, such as overcoming addiction or dealing with sleep disorders.",
       "Providing field training for students specializing in mental health and community health.",
      "Supporting and assisting the hospital staff by providing counseling, psychological debriefing, and training.",
      "Engaging the local community through awareness programs and various community activities.",
  
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
              src="src/assets/images/psoo.jpg"
              alt="Psychological and Social Service "
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