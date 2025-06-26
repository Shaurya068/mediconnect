<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const predefinedLocations = [
  { name: "New Delhi", lat: 28.6139, lon: 77.209 },
  { name: "Mumbai", lat: 19.076, lon: 72.8777 },
  { name: "Chennai", lat: 13.0827, lon: 80.2707 },
  { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
];

const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [1, -34],
});

const AirCast = () => {
  const [aqi, setAqi] = useState(null);
  const [location, setLocation] = useState(predefinedLocations[0]);
  const [aqiData, setAqiData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchAQIData(location.lat, location.lon);
  }, [location]);

  const fetchAQIData = async (lat, lon) => {
    const apiKey = "050c66e5-fb6d-43e9-95ce-f0c0c1fb7d31";
    const url = `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data && response.data.data) {
        const aqiValue = response.data.data.current.pollution.aqius;
        setAqi(aqiValue);
        setAqiData((prevData) => [
          ...prevData.slice(-9),
          { time: new Date().toLocaleTimeString(), aqi: aqiValue },
        ]);
      } else {
        console.error("Invalid response:", response.data);
        setAqi("No Data");
      }
    } catch (error) {
      console.error("Error fetching AQI data:", error);
      setAqi("Error");
    }
  };

  const handleLocationChange = (event) => {
    const selectedLocation = predefinedLocations.find((loc) => loc.name === event.target.value);
    if (selectedLocation) setLocation(selectedLocation);
  };

  return (
    <div className={`container py-4 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h1 className="text-center mb-4">AirCast - AI-Powered AQI Monitoring</h1>
      <button className="btn btn-secondary mb-3" onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <select className="form-select mb-3" onChange={handleLocationChange} value={location.name}>
        {predefinedLocations.map((loc) => (
          <option key={loc.name} value={loc.name}>{loc.name}</option>
        ))}
      </select>
      <div className="row">
        <div className="col-md-6">
          <div className="card border-primary mb-3 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Current AQI: {aqi ?? "Loading..."}</h5>
              <p className="card-text">Location: {location.lat}, {location.lon}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 shadow-lg">
            <Line data={{ labels: aqiData.map((entry) => entry.time), datasets: [{ label: "AQI Levels", data: aqiData.map((entry) => entry.aqi), borderColor: "#007bff", fill: false }] }} />
          </div>
        </div>
      </div>
      <MapContainer center={[location.lat, location.lon]} zoom={12} className="w-100 mt-4 shadow-lg" style={{ height: "350px", borderRadius: "10px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[location.lat, location.lon]} icon={markerIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AirCast;
>>>>>>> d13b663af9b5931e3fe06efe53e7468f00822f26
