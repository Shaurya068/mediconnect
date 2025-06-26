import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import RegisterDoctor from './pages/auth/RegisterDoctor';
import RegisterPatient from './pages/auth/RegisterPatient';
import PatientDashboard from './pages/patient/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import BookAppointment from './pages/patient/BookAppointment';
import ManageAppointments from './pages/doctor/ManageAppointments';
import PatientProfile from './pages/patient/Profile';
import DoctorProfile from './pages/doctor/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import RoleRoute from './routes/RoleRoute';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register-doctor" element={<RegisterDoctor />} />
              <Route path="/register-patient" element={<RegisterPatient />} />

              {/* Patient Routes */}
              <Route path="/patient/dashboard" element={
                <ProtectedRoute>
                  <RoleRoute role="patient">
                    <PatientDashboard />
                  </RoleRoute>
                </ProtectedRoute>
              } />
              <Route path="/patient/book" element={
                <ProtectedRoute>
                  <RoleRoute role="patient">
                    <BookAppointment />
                  </RoleRoute>
                </ProtectedRoute>
              } />
              <Route path="/patient/profile" element={
                <ProtectedRoute>
                  <RoleRoute role="patient">
                    <PatientProfile />
                  </RoleRoute>
                </ProtectedRoute>
              } />

              {/* Doctor Routes */}
              <Route path="/doctor/dashboard" element={
                <ProtectedRoute>
                  <RoleRoute role="doctor">
                    <DoctorDashboard />
                  </RoleRoute>
                </ProtectedRoute>
              } />
              <Route path="/doctor/appointments" element={
                <ProtectedRoute>
                  <RoleRoute role="doctor">
                    <ManageAppointments />
                  </RoleRoute>
                </ProtectedRoute>
              } />
              <Route path="/doctor/profile" element={
                <ProtectedRoute>
                  <RoleRoute role="doctor">
                    <DoctorProfile />
                  </RoleRoute>
                </ProtectedRoute>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
