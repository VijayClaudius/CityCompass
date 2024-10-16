// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login"; // Assuming you have a Login component
// import Register from "./pages/Register"; // Assuming you have a Register component
// import BookingServices from "./pages/BookingServices";
// import RegFreeLancer from "./pages/RegFreeLancer";
// import ViewServices from "./pages/ViewServices";
// import FLogin from "./pages/FLogin";
// import FindServices from "./pages/FindServices";
// import ProviderDashboard from "./pages/ProviderDashboard";
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/bookingservices" element={<BookingServices />} />
//           <Route path="/RegFreeLancer" element={<RegFreeLancer />} />
//           <Route path="/ViewServices" element={<ViewServices />} />
//           <Route path="/FLogin" element={<FLogin />} />
//           <Route path="/finserives" element={<FindServices />} />
//           <Route path="/dashboard" element={<ProviderDashboard />} />

//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingServices from "./pages/BookingServices";
import RegFreeLancer from "./pages/RegFreeLancer";
import ViewServices from "./pages/ViewServices";
import FLogin from "./pages/FLogin";
import FindServices from "./pages/FindServices";
import ServiceProviderDashboard from "./pages/ServiceProviderDashboard"; // Provider Dashboard
import UserDashboard from "./pages/UserDashboard"; // User Dashboard
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookingservices" element={<BookingServices />} />
          <Route path="/RegFreeLancer" element={<RegFreeLancer />} />
          <Route path="/ViewServices" element={<ViewServices />} />
          <Route path="/FLogin" element={<FLogin />} />
          <Route path="/findservices" element={<FindServices />} />

          {/* Provider Dashboard Route */}
          <Route
            path="/ServiceProviderDashboard"
            element={<ServiceProviderDashboard />}
          />

          {/* User Dashboard Route */}
          <Route path="/user-dashboard" element={<UserDashboard />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
