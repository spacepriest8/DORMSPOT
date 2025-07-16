import React from "react";
import services from "./data";

function Hero() {
  return (
    <div className="herocontainer">
      <h1>Our Services</h1>

      <div className="hostelservices">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.offer || service.service} />
            <h2>{service.offer || service.service}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
