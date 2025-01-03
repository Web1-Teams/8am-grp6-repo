import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function PageContent() {
const [services,setServices] = React.useState([
   
      " Treatment of headaches.",
      "Treatment of brain hemorrhage.",
      "Treatment of epilepsy.",
      "Treatment of neck and back pain.",
      "Treatment of Sciatica.",
      "Neurological Pain Management.",
      "Neuropsychiatric Assessments.",
      "Brain Tumor Diagnosis and Treatment.",
      "Balance and Dizziness Clinics.",
      "Autonomic Nervous System Disorders.",
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
              src="src/assets/images/Brain and Neurology Diseases.jpg"
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