// // src/components/ProviderDashboard.js
// import React, { useState } from "react";
// import "./Dashboard.css";

// const ProviderDashboard = () => {
//   const [requests, setRequests] = useState([
//     { id: 1, service: "Plumbing", user: "Alice" },
//     { id: 2, service: "Electrician", user: "Bob" },
//   ]);

//   const handleDecision = (id, status) => {
//     // Simulate API call for decision-making
//     // axios.post('/api/updateRequestStatus', { requestId: id, status })
//     //   .then(response => console.log('Request updated successfully:', response.data))
//     //   .catch(error => console.error('Error updating request:', error));

//     alert(`Request ${id} has been ${status}.`);
//     setRequests(requests.filter((req) => req.id !== id));
//   };

//   return (
//     <div className="dashboard">
//       <h1>Provider Dashboard</h1>
//       <ul>
//         {requests.map((req) => (
//           <li key={req.id}>
//             {req.user} requested {req.service}
//             <button onClick={() => handleDecision(req.id, "accepted")}>
//               Accept
//             </button>
//             <button onClick={() => handleDecision(req.id, "rejected")}>
//               Reject
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProviderDashboard;

// import React, { useState } from "react";

// const DUMMY_REQUESTS = [
//   { id: 1, userName: "Alice", serviceName: "Plumbing", status: "Pending" },
//   { id: 2, userName: "Bob", serviceName: "Electrical Work", status: "Pending" },
// ];

// const ProviderDashboard = () => {
//   const [requests, setRequests] = useState(DUMMY_REQUESTS);

//   const handleRequestStatus = (requestId, status) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req.id === requestId ? { ...req, status } : req
//       )
//     );
//     alert(`Request ${status}!`);
//   };

//   return (
//     <div>
//       <h2>Service Requests</h2>
//       {requests.map((req) => (
//         <div key={req.id}>
//           <p>User: {req.userName}</p>
//           <p>Service: {req.serviceName}</p>
//           <p>Status: {req.status}</p>
//           <button onClick={() => handleRequestStatus(req.id, "Accepted")}>
//             Accept
//           </button>
//           <button onClick={() => handleRequestStatus(req.id, "Rejected")}>
//             Reject
//           </button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProviderDashboard;

import React, { useState, useEffect } from "react";
import "./ServiceProviderDashboard.css"; // Import the shared CSS

const DUMMY_SERVICE_REQUESTS = [
  {
    id: 1,
    userName: "Alice Johnson",
    serviceName: "Plumbing",
    status: "Pending",
  },
  {
    id: 2,
    userName: "Bob Martin",
    serviceName: "Electrical Work",
    status: "Accepted",
  },
  {
    id: 3,
    userName: "Cathy Holmes",
    serviceName: "House Cleaning",
    status: "Rejected",
  },
];

const ServiceProviderDashboard = () => {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    // Using dummy data; replace with API call when backend is ready
    setServiceRequests(DUMMY_SERVICE_REQUESTS);

    /*
    fetch("http://localhost:9090/api/provider-requests?providerId=1")
      .then((response) => response.json())
      .then((data) => setServiceRequests(data))
      .catch((error) => console.error("Error fetching service requests:", error));
    */
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Provider Dashboard</h3>
        <ul className="sidebar-menu">
          <li
            className={activeMenu === "Dashboard" ? "active" : ""}
            onClick={() => setActiveMenu("Dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeMenu === "Requests" ? "active" : ""}
            onClick={() => setActiveMenu("Requests")}
          >
            Service Requests
          </li>
          <li
            className={activeMenu === "Settings" ? "active" : ""}
            onClick={() => setActiveMenu("Settings")}
          >
            Settings
          </li>
          <li
            className={activeMenu === "Logout" ? "active" : ""}
            onClick={() => setActiveMenu("Logout")}
          >
            Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <nav className="navbar">
          <h2>Welcome, Provider</h2>
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-pic"
            />
            <span className="username">Jane Doe</span>
          </div>
        </nav>

        {activeMenu === "Requests" && (
          <div className="service-requests">
            <h2>Service Requests</h2>

            {serviceRequests.length > 0 ? (
              <div className="request-list">
                {serviceRequests.map((request) => (
                  <div key={request.id} className="request-item">
                    <p>
                      <b>User:</b> {request.userName}
                    </p>
                    <p>
                      <b>Service:</b> {request.serviceName}
                    </p>
                    <p>
                      <b>Status:</b> {request.status}
                    </p>

                    <div
                      className={`status-badge ${request.status.toLowerCase()}`}
                    >
                      {request.status}
                    </div>

                    <hr />
                  </div>
                ))}
              </div>
            ) : (
              <p>No service requests found.</p>
            )}
          </div>
        )}

        {activeMenu === "Dashboard" && (
          <div className="dashboard-info">
            <h2>Dashboard Overview</h2>
            <p>Overview content goes here...</p>
          </div>
        )}

        {activeMenu === "Settings" && (
          <div className="settings">
            <h2>Settings</h2>
            <p>Settings content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProviderDashboard;
