import React, { useState } from 'react';

export default function Dashboard() {
    const [appointments, setAppointments] = useState([
        { id: 1, patient: 'John Doe', date: '2025-07-10', time: '10:00 AM', status: 'confirmed' },
        { id: 2, patient: 'Jane Smith', date: '2025-07-10', time: '11:30 AM', status: 'confirmed' },
        { id: 3, patient: 'Robert Johnson', date: '2025-07-11', time: '09:00 AM', status: 'pending' }
    ]);

    const [stats] = useState({
        totalPatients: 42,
        upcomingAppointments: 8,
        avgRating: 4.7
    });

    return (
        <div>
            <h2 className="mb-4">Doctor Dashboard</h2>

            <div className="row mb-4">
                <div className="col-md-4 mb-3">
                    <div className="card bg-primary text-white shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5 className="card-title">Patients</h5>
                                    <h2 className="card-text">{stats.totalPatients}</h2>
                                </div>
                                <i className="bi bi-people fs-1 opacity-50"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card bg-info text-white shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5 className="card-title">Appointments</h5>
                                    <h2 className="card-text">{stats.upcomingAppointments}</h2>
                                </div>
                                <i className="bi bi-calendar-check fs-1 opacity-50"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card bg-success text-white shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5 className="card-title">Avg. Rating</h5>
                                    <h2 className="card-text">{stats.avgRating}/5</h2>
                                </div>
                                <i className="bi bi-star-fill fs-1 opacity-50"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Today's Appointments</h5>
                </div>
                <div className="card-body">
                    {appointments.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Patient</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map(app => (
                                        <tr key={app.id}>
                                            <td>{app.patient}</td>
                                            <td>{app.time}</td>
                                            <td>
                                                <span className={`badge ${app.status === 'confirmed' ? 'bg-success' : 'bg-warning'}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">View</button>
                                                <button className="btn btn-sm btn-outline-success">Start</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-4">
                            <p className="text-muted">No appointments scheduled for today</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-info text-white">
                    <h5 className="mb-0">Quick Actions</h5>
                </div>
                <div className="card-body">
                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-primary text-start">
                            <i className="bi bi-calendar-plus me-2"></i>View Full Schedule
                        </button>
                        <button className="btn btn-outline-primary text-start">
                            <i className="bi bi-file-earmark-medical me-2"></i>View Patient Records
                        </button>
                        <button className="btn btn-outline-primary text-start">
                            <i className="bi bi-pencil-square me-2"></i>Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
