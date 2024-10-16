// import React, { useState, useEffect } from "react";
// import "./ViewServices.css"; // Import the custom CSS

// const ViewServices = () => {
//   const [freeLancer, setFreelancer] = useState([]);
//   const [selectedService, setSelectedService] = useState(null); // State to track selected service
//   const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
//   const [showDetails, setShowDetails] = useState(null); // State to toggle additional details
//   const [isOrderConfirmed, setOrderConfirmed] = useState(false); // State to track if order is confirmed
//   const [orderStatus, setOrderStatus] = useState(null); // State to track the order status

//   const getFreelancerData = () => {
//     fetch("http://localhost:9090/CityCompanions/freelancer", {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json;charset=UTF-8",
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setFreelancer(data);
//       });
//   };

//   useEffect(() => {
//     getFreelancerData();
//   }, []);

//   const handleBookService = (service) => {
//     setSelectedService(service);
//     setModalOpen(true); // Open the modal when a service is selected
//   };

//   const closeModal = () => {
//     setModalOpen(false); // Close the modal
//     setSelectedService(null); // Reset the selected service
//   };

//   const confirmBooking = () => {
//     setOrderConfirmed(true);
//     setOrderStatus("Pending"); // Set initial order status
//     alert("Service booked successfully!"); // This can be replaced with an API call
//     closeModal();
//   };

//   const checkOrderStatus = () => {
//     // This is a placeholder for checking the order status, it can be updated with an API call
//     setOrderStatus("In Progress");
//     alert(`Your order status is: ${orderStatus}`);
//   };

//   const toggleDetails = (serviceIndex) => {
//     setShowDetails(serviceIndex === showDetails ? null : serviceIndex); // Toggle details view
//   };

//   return (
//     <div className="services-container">
//       <div className="services-card">
//         <div className="services-header">
//           <h2>List of Services Offered</h2>
//         </div>

//         {freeLancer.length > 0 && (
//           <div className="services-body">
//             {freeLancer.map((fl, index) => (
//               <div className="service-item" key={index}>
//                 <div className="service-info">
//                   <p>
//                     <b>Contact Person Name:</b> {fl.fPerson}
//                   </p>
//                   <p>
//                     <b>Contact Number:</b> {fl.contactno}
//                   </p>
//                   <p>
//                     <b>Mail ID:</b> {fl.mailid}
//                   </p>
//                   <p>
//                     <b>Technician:</b> {fl.fwork}
//                   </p>
//                   <p>
//                     <b>Price per Hour:</b> ${fl.w_price}
//                   </p>
//                 </div>

//                 <div className="service-action">
//                   <button
//                     className="btn-book-service"
//                     onClick={() => handleBookService(fl)}
//                   >
//                     Book Service
//                   </button>
//                   {isOrderConfirmed && (
//                     <button
//                       className="btn-view-status"
//                       onClick={checkOrderStatus}
//                     >
//                       View Status of Your Order
//                     </button>
//                   )}
//                   <button
//                     className="btn-view-details"
//                     onClick={() => toggleDetails(index)}
//                   >
//                     View More Details
//                   </button>
//                 </div>

//                 {showDetails === index && (
//                   <div className="service-details">
//                     <p>
//                       <b>Reviews:</b> {fl.reviews}
//                     </p>
//                     <p>
//                       <b>Rating:</b> {fl.rating} / 5
//                     </p>
//                   </div>
//                 )}

//                 <hr />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Modal for booking confirmation */}
//         {isModalOpen && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <h3>Confirm Booking</h3>
//               <p>
//                 Are you sure you want to book the service with{" "}
//                 <b>{selectedService?.fPerson}</b> for{" "}
//                 <b>{selectedService?.w_price} per hour</b>?
//               </p>
//               <div className="modal-actions">
//                 <button className="btn-confirm" onClick={confirmBooking}>
//                   Confirm
//                 </button>
//                 <button className="btn-cancel" onClick={closeModal}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewServices;

import React, { useState, useEffect } from "react";
import "./ViewServices.css"; // Import the custom CSS

const DUMMY_FREELANCERS = [
  {
    id: 1,
    fPerson: "John Doe",
    contactno: "1234567890",
    mailid: "john@example.com",
    fwork: "Plumbing",
    w_price: 30,
    reviews: "Great service!",
    rating: 4.5,
    providerId: 101,
  },
  {
    id: 2,
    fPerson: "Jane Smith",
    contactno: "0987654321",
    mailid: "jane@example.com",
    fwork: "Electrical Work",
    w_price: 25,
    reviews: "Very professional.",
    rating: 4.7,
    providerId: 102,
  },
];

const ViewServices = () => {
  const [freeLancer, setFreelancer] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    // Use dummy data for now, replace with getFreelancerData() when API is ready
    setFreelancer(DUMMY_FREELANCERS);
    // getFreelancerData();
  }, []);

  /*
  const getFreelancerData = () => {
    fetch("http://localhost:9090/CityCompanions/freelancer", {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setFreelancer(data))
      .catch((error) => console.error("Error fetching freelancers:", error));
  };
  */

  const handleBookService = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const confirmBooking = () => {
    setOrderConfirmed(true);
    setOrderStatus("Pending");
    alert("Service booked successfully!");
    closeModal();
  };

  const checkOrderStatus = () => {
    setOrderStatus("In Progress");
    alert(`Your order status is: ${orderStatus}`);
  };

  const toggleDetails = (serviceIndex) => {
    setShowDetails(serviceIndex === showDetails ? null : serviceIndex);
  };

  return (
    <div className="services-container">
      <div className="services-card">
        <div className="services-header">
          <h2>List of Services Offered</h2>
        </div>

        {freeLancer.length > 0 ? (
          <div className="services-body">
            {freeLancer.map((fl, index) => (
              <div className="service-item" key={fl.id}>
                <div className="service-info">
                  <p>
                    <b>Contact Person Name:</b> {fl.fPerson}
                  </p>
                  <p>
                    <b>Contact Number:</b> {fl.contactno}
                  </p>
                  <p>
                    <b>Mail ID:</b> {fl.mailid}
                  </p>
                  <p>
                    <b>Technician:</b> {fl.fwork}
                  </p>
                  <p>
                    <b>Price per Hour:</b> ${fl.w_price}
                  </p>
                </div>

                <div className="service-action">
                  <button
                    className="btn-book-service"
                    onClick={() => handleBookService(fl)}
                  >
                    Book Service
                  </button>

                  {isOrderConfirmed && (
                    <button
                      className="btn-view-status"
                      onClick={checkOrderStatus}
                    >
                      View Status of Your Order
                    </button>
                  )}

                  <button
                    className="btn-view-details"
                    onClick={() => toggleDetails(index)}
                  >
                    View More Details
                  </button>
                </div>

                {showDetails === index && (
                  <div className="service-details">
                    <p>
                      <b>Reviews:</b> {fl.reviews}
                    </p>
                    <p>
                      <b>Rating:</b> {fl.rating} / 5
                    </p>
                  </div>
                )}

                <hr />
              </div>
            ))}
          </div>
        ) : (
          <p>No services available at the moment.</p>
        )}

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Confirm Booking</h3>
              <p>
                Are you sure you want to book the service with{" "}
                <b>{selectedService?.fPerson}</b> for{" "}
                <b>${selectedService?.w_price} per hour</b>?
              </p>
              <div className="modal-actions">
                <button className="btn-confirm" onClick={confirmBooking}>
                  Confirm
                </button>
                <button className="btn-cancel" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewServices;
