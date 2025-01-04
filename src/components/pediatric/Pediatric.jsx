import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function Pediatric() {
    const [services, setServices] = React.useState([
        "Bone marrow biopsies for children",
        "Chemotherapy, biological therapy, immunotherapy, and other services are provided for all pediatric cancer patients",
        "Targeted and Immunotherapy: Innovative therapies using the child’s immune system or targeted drugs.",
        "Surgical Oncology: Tumor removal surgeries performed by pediatric specialists.",
        "Radiation Therapy: Precision radiation techniques to minimize damage to healthy tissues.",
        "Chemotherapy Treatments: Tailored drug therapies targeting specific cancers in children.",
        "Comprehensive Diagnosis: Advanced imaging and biopsy techniques to identify types of childhood cancers.",
        "Palliative and End-of-Life Care: Ensuring quality of life during advanced stages of cancer.",
        "Clinical Trials: Access to new and emerging cancer treatments.",
      ]);
    
      const [loading, setLoading] = React.useState(true);
    
      React.useEffect(() => {
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
              src="src\assets\images\Pediatric.images\p.sec.jpg"
              alt="Medical Laboratories "
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

export default Pediatric;