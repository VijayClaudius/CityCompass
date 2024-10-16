// src/pages/Booking.js
import React, { useState } from 'react';

const Booking = () => {
  const [service, setService] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Add booking logic here (e.g., API call)
    console.log('Booking service:', service);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book a Service</h2>
      <form onSubmit={handleBooking}>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
        >
          <option value="">Select a service</option>
          <option value="plumbing">Plumbing</option>
          <option value="cleaning">Cleaning</option>
          <option value="electrical">Electrical Work</option>
          {/* Add more services as needed */}
        </select>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Book Service</button>
      </form>
    </div>
  );
};

export default Booking;
