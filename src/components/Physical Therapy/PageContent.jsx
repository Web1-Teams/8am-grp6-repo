// components/PageContent.jsx
import React, { useState, useEffect } from 'react';
import DoctorsSection from './DoctorSection';
import ServicesList from './Service';

function PageContent() {
    const [services, setServices] = useState([
      "Pain management.",
      "Avoiding surgery.",
      "Improved mobility and movement.",
      "Injury recovery or prevention.",
      "Recovery from stroke or paralysis.",
      "Manage age-related medical issues.",
  
    ]
    );
    
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
              src="src/assets/images/Physical therapy - Copy.webp"
              alt="Physical therapy"
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