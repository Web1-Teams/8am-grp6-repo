import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function  PediatricOncology() {
const [services,setServices] = React.useState([
   
      "Diagnostic and therapeutic services for various common childhood diseases.",
      "Regular monitoring of children during their growth and development, along with providing special advice related to nutrition problems and appetite deficiency, and their treatment.",
      "Vigilant monitoring of the growth of infants, conducting necessary examinations for early detection, and prevention of some problems faced by this group of children during their growth .",
      "Diagnostic and therapeutic services for pediatric kidney diseases .",
      "Diagnostic and therapeutic services for pediatric blood disorders and tumors.",
      "Diagnostic and therapeutic services for pediatric heart diseases .",
      "Intensive and diligent care for children .",
      
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
              src="src/assets/images/Pediatrics.jpg"
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

export default  PediatricOncology;