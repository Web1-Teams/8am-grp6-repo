import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function PageContent() {
    const [services, setServices] = React.useState([
   
      "Chemotherapy, biological therapy, immunotherapy, and other services are provided for all cancer patients.",
      "Bone marrow biopsies.",
      "Blood disorders and bone marrow transplantation.",
      "Administration of intravenous and oral chemotherapy treatments.",
      "Advanced radiotherapy techniques, including IMRT, IGRT, and stereotactic radiosurgery.",
      "Specialized cancer surgeries, including tumor removal and reconstructive procedures.",
      "Cutting-edge treatments that harness the immune system to fight cancer.",
      "Personalized treatments based on genetic profiles of tumors.",
      "Treatments for hormone-sensitive cancers like breast and prostate cancer.",
      "Services for blood cancers, including leukemia, lymphoma, and multiple myeloma.",
      
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
              src="src/assets/images/Oncology.jpg"
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

export default PageContent;