import React from 'react';
import DoctorsSection from './DoctorSection.jsx';
import ServicesList from './Service.jsx';

function PageContent() {
const [services,setServices] = React.useState([
   
  "Three rooms are specifically designed for bone marrow transplant patients, each of which contains two beds, with a capacity ranging from 3 to 7 cases per month.",
  "Two rooms are allocated for leukemia patients, each of which contains three beds. One of these rooms is dedicated to new patients or isolation cases.",
  "After 9 years since the units opening, approximately 255 cases of autologous bone marrow transplantation have been performed for patients suffering from lymphatic system cancers or multiple myeloma. The success rate of the procedure is in line with international standards.",
  "After 9 years since the units opening, approximately 255 cases of autologous bone marrow transplantation have been performed for patients suffering from lymphatic system cancers or multiple myeloma. The success rate of the procedure is in line with international standards.",
  "Providing educational sessions for patients and families to understand treatment.",
  "Protocol Development: Reducing transplant complications and enhancing outcomes.",
  "Monitoring Graft-Versus-Host Disease (GVHD): Treating complications from donor cells attacking the recipient's body.",
  "Haploidentical Transplantation: Cells are sourced from a partially matched family donor (e.g., a parent or sibling).",
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
              src="src/assets/images/sec.jpg"
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