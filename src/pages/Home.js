import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="text-center py-5">
            <div className="bg-primary text-white p-5 rounded-3 shadow mb-4">
                <h1 className="display-4 fw-bold">Welcome to MediConnect</h1>
                <p className="lead">Connecting patients and doctors for better healthcare</p>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title text-primary">For Patients</h2>
                            <p className="card-text">
                                Book appointments with top doctors, manage your health records, and get the care you deserve.
                            </p>
                            <Link to="/register-patient" className="btn btn-primary">Register as Patient</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title text-primary">For Doctors</h2>
                            <p className="card-text">
                                Manage your appointments, connect with patients, and build your medical practice.
                            </p>
                            <Link to="/register-doctor" className="btn btn-primary">Register as Doctor</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3>How It Works</h3>
                <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                        <div className="card h-100 border-0">
                            <div className="card-body">
                                <div className="bg-light rounded-circle p-3 mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                    <i className="bi bi-search-heart fs-1 text-primary"></i>
                                </div>
                                <h4>Find a Doctor</h4>
                                <p>Search for specialists based on your needs and location</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100 border-0">
                            <div className="card-body">
                                <div className="bg-light rounded-circle p-3 mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                    <i className="bi bi-calendar-check fs-1 text-primary"></i>
                                </div>
                                <h4>Book Appointment</h4>
                                <p>Schedule your visit at a convenient time</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100 border-0">
                            <div className="card-body">
                                <div className="bg-light rounded-circle p-3 mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                    <i className="bi bi-chat-dots fs-1 text-primary"></i>
                                </div>
                                <h4>Connect & Heal</h4>
                                <p>Have your consultation and get treatment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
