import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminLogin from './components/auth/AdminLogin';
import AdminSignup from './components/auth/AdminSignup';
import EmployeeLogin from './components/auth/EmployeeLogin';
import EmployeeSignup from './components/auth/EmployeeSignup'; // ✅ fixed

// Admin Pages
import AdminDashboard from './components/admin/AdminDashboard';
import ManageAssets from './components/admin/ManageAssets';
import ManageEmployees from './components/admin/ManageEmployees';
import ServiceRequests from './components/admin/ServiceRequests';
import ManageCategories from './components/admin/ManageCategories';



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/admin" element={<AdminLogin />} />
        <Route path="/auth/admin/signup" element={<AdminSignup />} />
        <Route path="/auth/employee" element={<EmployeeLogin />} />
        <Route path="/auth/employee/signup" element={<EmployeeSignup />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/assets" element={<ManageAssets />} />
        <Route path="/admin/employees" element={<ManageEmployees />} />
        <Route path="/admin/requests" element={<ServiceRequests />} />
        <Route path="/admin/categories" element={<ManageCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
