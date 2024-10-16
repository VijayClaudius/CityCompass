import React, { useState, useEffect } from "react";
import "./UserDashboard.css"; // Import custom CSS for layout and styles

const DUMMY_USER_REQUESTS = [
  {
    id: 1,
    serviceName: "Plumbing",
    providerName: "John Doe",
    status: "Pending",
  },
  {
    id: 2,
    serviceName: "Electrical Work",
    providerName: "Jane Smith",
    status: "Accepted",
  },
  {
    id: 3,
    serviceName: "House Cleaning",
    providerName: "Emily Brown",
    status: "Rejected",
  },
];

const UserDashboard = () => {
  const [userRequests, setUserRequests] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Profile"); // Track active sidebar menu selection

  useEffect(() => {
    // Using dummy data; replace with API call when backend is ready
    setUserRequests(DUMMY_USER_REQUESTS);

    /*
    fetch("http://localhost:9090/api/user-requests?userId=1") 
      .then((response) => response.json())
      .then((data) => setUserRequests(data))
      .catch((error) => console.error("Error fetching user requests:", error));
    */
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>User Dashboard</h3>
        <ul className="sidebar-menu">
          <li
            className={activeMenu === "Profile" ? "active" : ""}
            onClick={() => setActiveMenu("Profile")}
          >
            Profile
          </li>
          <li
            className={activeMenu === "My Requests" ? "active" : ""}
            onClick={() => setActiveMenu("My Requests")}
          >
            My Requests
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
        {/* Navbar */}
        <nav className="navbar">
          <h2>Welcome, User</h2>
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-pic"
            />
            <span className="username">John Doe</span>
          </div>
        </nav>

        {/* Conditional Rendering Based on Active Menu */}
        {activeMenu === "My Requests" && (
          <div className="user-requests">
            <h2>Your Service Requests</h2>

            {userRequests.length > 0 ? (
              <div className="request-list">
                {userRequests.map((request) => (
                  <div key={request.id} className="request-item">
                    <p>
                      <b>Service:</b> {request.serviceName}
                    </p>
                    <p>
                      <b>Provider:</b> {request.providerName}
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

        {activeMenu === "Profile" && (
          <div className="profile-info">
            <h2>Your Profile</h2>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
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

export default UserDashboard;
