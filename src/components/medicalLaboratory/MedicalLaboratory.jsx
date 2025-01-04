// components/PageContent.jsx
import React, { useState, useEffect } from 'react';
import DoctorsSection from './DoctorSection';
import ServicesList from './Service';

function MedicalLaboratory() {
    const [services, setServices] = useState([
      "Diagnostic Tests: Includes blood tests to detect chronic diseases such as diabetes and heart disease,  as well as infection tests for viruses and bacteria.",
      "Diagnostic Services for Surgical Samples: Offering diagnostic services for surgical samples from hospital patients, along with  providing consultative services to external patients and doctors.",
      "Treatment Monitoring and Patient Condition Follow-up: Monitoring treatment and following up on the progression of patient conditions, with the ability to adjust treatment based on results.",
      "Screening for Genetic or Chronic Diseases: Providing early screening for genetic or chronic diseases.",
      "Stem Cell Collection and Storage: Collecting and preserving stem cells until bone marrow transplantation.",
      "Virus Testing: Testing for viruses such as HIV (Human Immunodeficiency Virus) and Hepatitis C and B.",
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
              src="src/assets/images/medical laboratory.jpg"
              alt="medical laboratory"
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

export default MedicalLaboratory;