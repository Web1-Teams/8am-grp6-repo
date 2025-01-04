import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function RheumatologyDisease() {
const [services,setServices] = React.useState([
   
      " The treatment of rheumatoid arthritis.",
      "Comprehensive treatment of systemic lupus erythematosus.",
      "The treatment of gout.",
      "The treatment of osteoporosis.",
      "The treatment of psoriatic arthritis.",
      "The treatment of ankylosing spondylitis.",
      "The treatment of vasculitis.",
      "The treatment of familial Mediterranean fever.",
      "The treatment of myositis.",
      "The treatment of scleroderma.",
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
              src="src/assets/images/Rheumatology Disease.jpeg"
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

export default RheumatologyDisease;