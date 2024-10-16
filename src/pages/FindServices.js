// src/components/FindServices.js
import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import "./FindServices.css";

const FindServices = () => {
  const [services, setServices] = useState([]);

  // Simulated API call (useEffect can be used to fetch real data)
  useEffect(() => {
    const dummyServices = [
      {
        id: 1,
        name: "Plumbing",
        description: "Fix leaks, install taps.",
        provider: "John Doe",
      },
      {
        id: 2,
        name: "Electrician",
        description: "Wiring, repairs.",
        provider: "Jane Smith",
      },
      {
        id: 3,
        name: "AC Repair",
        description: "Cooling system fixes.",
        provider: "Mike Ross",
      },
    ];
    setServices(dummyServices);
  }, []);

  return (
    <div className="find-services">
      <h1>Available Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default FindServices;
