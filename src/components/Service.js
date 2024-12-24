import React, { useState, useEffect } from "react";
import "../Service.css";

const ServicesList = ({ services }) => {
  const [displayedServices, setDisplayedServices] = useState(services);

  useEffect(() => {
    setDisplayedServices(services);
  }, [services]);

  return (
    <ul className="services-list">
      {displayedServices.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  );
};

export default ServicesList;
