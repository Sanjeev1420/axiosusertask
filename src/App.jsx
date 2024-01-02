import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminNav from './Components/adminnav';
import Users from './Components/users';
import AdminDashboard from './Components/dashboard';

function App() {
  return (
    <Router>
      <>
        <AdminNav />
        <Routes>
          <Route path="/*" element={<AdminDashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
