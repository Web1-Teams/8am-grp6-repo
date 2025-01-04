import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function PageContent() {
    const [services, setServices] = React.useState([
        "Diagnosis and treatment of blood disorders",
        "Diagnosis and treatment of gastrointestinal and colon disorders",
        "Diagnosis and treatment of endocrine and metabolic disorders",
        "Treatment of acute and chronic kidney diseases",
        "Diagnosis and treatment of respiratory diseases and sleep disorders",
        "Diagnosis and treatment of acute or chronic cardiovascular disorders",
        "Diagnosis and treatment of neurological disorders",
        "Treatment of critical medical conditions in the intensive care unit (ICU)",
        "Evaluation and treatment of headaches, migraines, and neurological conditions.",
        "Diagnosis and treatment of blood disorders such as anemia and clotting disorders.",
        "Management of liver diseases, including hepatitis and fatty liver.",
        "Diagnosis and treatment of gastrointestinal conditions like IBS, GERD, and ulcers.",
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
              src="src\assets\Internal-Medicine-images\i.sec.jpg"
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