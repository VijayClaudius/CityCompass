// src/components/ServiceCard.js
import React, { useState } from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    setRequested(true);
    // Simulate API call for requesting service
    // axios.post('/api/requestService', { serviceId: service.id, userId: currentUser.id })
    //   .then(response => console.log('Service requested successfully:', response.data))
    //   .catch(error => console.error('Error requesting service:', error));
    alert(`Request sent to ${service.provider}`);
  };

  return (
    <div className="service-card">
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <p>
        <strong>Provider:</strong> {service.provider}
      </p>
      <button onClick={handleRequest} disabled={requested}>
        {requested ? "Requested" : "Request Service"}
      </button>
    </div>
  );
};

export default ServiceCard;
