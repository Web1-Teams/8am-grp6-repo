import React, { useState, useEffect } from "react";
import "./DoctorSection.css";

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
    { name: "Dr. Jehad ismail", image: "src/assets/images/جهاد اسماعيل.png" },
    { name: "Dr. Jawad zeyada", image: "src/assets/images/جواد زيادة.png" },
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

  return <DoctorsList doctors={doctors} />;
};

export default DoctorsSection;
