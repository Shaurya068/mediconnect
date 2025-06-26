import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    // Mock data for demo
    const upcomingAppointments = [
        { id: 1, doctor: 'Dr. Smith', date: '2025-07-10', time: '10:00 AM' },
        { id: 2, doctor: 'Dr. Johnson', date: '2025-07-15', time: '2:30 PM' }
    ];

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Patient Dashboard</h2>
                <Link to="/patient/book" className="btn btn-primary">
                    <i className="bi bi-plus-circle me-1"></i>Book Appointment
                </Link>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">Upcoming Appointments</h5>
                        </div>
                        <div className="card-body">
                            {upcomingAppointments.length > 0 ? (
                                <div className="list-group">
                                    {upcomingAppointments.map(app => (
                                        <div key={app.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-1">{app.doctor}</h6>
                                                <small className="text-muted">{app.date} at {app.time}</small>
                                            </div>
                                            <div>
                                                <button className="btn btn-sm btn-outline-primary me-1">Reschedule</button>
                                                <button className="btn btn-sm btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-4">
                                    <p className="text-muted">You have no upcoming appointments</p>
                                    <Link to="/patient/book" className="btn btn-primary mt-2">Book Your First Appointment</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header bg-info text-white">
                            <h5 className="mb-0">Quick Actions</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-grid gap-2">
                                <Link to="/patient/book" className="btn btn-outline-primary text-start">
                                    <i className="bi bi-calendar-plus me-2"></i>Book Appointment
                                </Link>
                                <Link to="/patient/profile" className="btn btn-outline-primary text-start">
                                    <i className="bi bi-person me-2"></i>Update Profile
                                </Link>
                                <Link to="/" className="btn btn-outline-primary text-start">
                                    <i className="bi bi-file-medical me-2"></i>View Health Records
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-header bg-success text-white">
                            <h5 className="mb-0">Health Tips</h5>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-info">
                                <strong>Stay Hydrated!</strong> Drink at least 8 glasses of water daily.
                            </div>
                            <div className="alert alert-info">
                                <strong>Regular Exercise:</strong> Aim for 30 minutes of activity daily.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
