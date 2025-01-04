import React, { useState, useEffect} from "react"
import "./DoctorSection.css";
import { Link } from 'react-router-dom';

const DoctorsList = ({ doctors }) => {
  return (
    <div className="doctors-container">
      {doctors.map((doctor, index) => (
        <div className="doctor-card" key={index}>
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <h3 className="doctor-name">{doctor.name}</h3>
        </div>
      ))}
    </div>
  );
};


const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([
    { name: "Dr.Abdulkarim", image: "src/assets/images/DR_AbdulKarim.jpg"},
    { name: "Dr.Ihab", image: "src/assets/images/DR_Ihab.jpg"},
    { name: "Dr.Reem", image: "src/assets/images/DR_Reem.jpg"},
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading doctors...</div>;
  }

  return (
    <div>
      <h2 className="doctors-title"></h2>
      <div className="doctors-and-button-container"> {/* New wrapper div */}
        <DoctorsList doctors={doctors} />
        <Link to="/appointmentForm" className="appointment-button ">Make Appointment</Link>
      </div>
    </div>
  );
};

export default DoctorsSection;