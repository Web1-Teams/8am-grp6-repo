import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function PageContent() {
const [services,setServices] = React.useState([
   
  "Medication Provision: The pharmacy offers a wide range of medications to meet diverse patient needs.",
  "Dosage Determination: Pharmacists determine appropriate dosages for each patient based on their individual health condition and characteristics.",
  "Medication Timing: Pharmacists provide guidance on the best times to take medication to ensure its effectiveness.",
  "Appropriate Medication Selection: Pharmacists help in choosing the right medication for each condition, considering potential drug interactions.",
  "Patient-Specific Medications: The pharmacy provides medications tailored to meet the unique needs of each patient.",
  "Medication Therapy Monitoring: Pharmacists monitor medication use to ensure effectiveness and minimize side effects.",
  "Collaborative Care: The pharmacy collaborates with medical teams to ensure patients receive the best possible care.",
  "Quality Procedures: Pharmacy procedures are continuously updated to ensure the quality of services provided.",
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
              src="src/assets/images/Cardiology.jpg"
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