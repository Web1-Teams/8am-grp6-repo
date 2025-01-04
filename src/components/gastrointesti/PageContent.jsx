import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function PageContent() {
    const [services, setServices] = React.useState([
        "Diagnostic services for gastrointestinal, pancreatic, and biliary tract diseases",
        "Early detection of tumors affecting various organs in the body, with the necessary sampling",
        "Stopping intestinal bleeding",
        "Excision of polyps and tumors",
        "Dilation of various strictures and the insertion of plastic or metal stents to open obstructions in the digestive, pancreatic, and biliary ducts.",
        "Removal of gallstones from the bile ducts and pancreas",
        "Extraction of foreign bodies from the digestive system",
        "Ligation of esophageal varices",
        "Intestinal ablation",
        "Diagnosis and treatment of intestinal and colon inflammations",
        "A set of procedures that provide assistance to patients and can serve as alternatives to major surgeries in many cases, potentially saving lives",
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
              src="src\assets\images\Gastrointesti\g.sec.jpg"
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