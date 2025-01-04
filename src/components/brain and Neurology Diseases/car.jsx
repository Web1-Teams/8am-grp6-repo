import React, { useState, useEffect } from "react";
import "./DoctorSection.css";

const DoctorsList = ({ doctors }) => {
  return (
    <div className="doctors-container">
      {doctors.map((doctor, index) => (
        <div className="doctor-card" key={index}>
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <h3 className="doctor-name">{doctor.name}</h3>
          <button className="appointment-button">Make Appointment</button> 
        </div>
      ))}
    </div>
  );
};


const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([
    { name: "Dr. Ahmad ", image: "DR - Ahmad.jpg" },
    
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
      <DoctorsList doctors={doctors} />
    </div>
  );
};


export default DoctorsSection;