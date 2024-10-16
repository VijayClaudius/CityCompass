// // src/pages/Dashboard.js
// import React from 'react';
// import { useUser } from '../UserContext'; // Assume you have a UserContext for user data

// const Dashboard = () => {
//   const { user } = useUser();

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Dashboard</h1>
//       <h2>Welcome, {user?.name || 'User'}</h2>
//       {user?.role === 'client' ? (
//         <p>Your client-specific content here.</p>
//       ) : (
//         <p>Your freelancer-specific content here.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
