// components/PageContent.jsx
import React, { useState, useEffect } from 'react';
import DoctorsSection from './DoctorSection';
import ServicesList from './Service';

function PageContent() {
  const [services, setServices] = useState([
    "Nutritional Assessment: Identifying the patient’s nutritional needs.",
    "Diet Plans: Preparing meals according to the health condition.",
    "IV Nutrition: Providing food through the IV for patients.",
    "Tube Feeding: Providing food through a feeding tube.",
    "Nutritional Education: Teaching patients healthy eating habits.",
    "Special Meals: Preparing customized meals for patients.",
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
          src="src\assets\تغذية.jpg"
          alt="Nutrition "
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