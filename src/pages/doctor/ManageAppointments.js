import React, { useState } from 'react';

export default function ManageAppointments() {
    const [appointments] = useState([
        { id: 1, patient: 'John Doe', date: '2025-07-10', time: '10:00 AM', status: 'confirmed' },
        { id: 2, patient: 'Jane Smith', date: '2025-07-10', time: '11:30 AM', status: 'confirmed' },
        { id: 3, patient: 'Robert Johnson', date: '2025-07-11', time: '09:00 AM', status: 'pending' },
        { id: 4, patient: 'Sarah Williams', date: '2025-07-12', time: '02:00 PM', status: 'confirmed' },
        { id: 5, patient: 'Michael Brown', date: '2025-07-13', time: '10:30 AM', status: 'pending' }
    ]);

    const [filter, setFilter] = useState('all');
    const [dateRange, setDateRange] = useState({
        start: '2025-07-10',
        end: '2025-07-17'
    });

    const filteredAppointments = appointments.filter(app => {
        if (filter === 'all') return true;
        return app.status === filter;
    });

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Manage Appointments</h2>
                <div>
                    <button className="btn btn-primary me-2">
                        <i className="bi bi-plus-circle me-1"></i>Add Slot
                    </button>
                    <button className="btn btn-outline-primary">
                        <i className="bi bi-calendar-range me-1"></i>Calendar View
                    </button>
                </div>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <label className="form-label fw-bold">Filter by Status</label>
                            <select
                                className="form-select"
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                            >
                                <option value="all">All Appointments</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">Start Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={dateRange.start}
                                onChange={e => setDateRange({ ...dateRange, start: e.target.value })}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">End Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={dateRange.end}
                                onChange={e => setDateRange({ ...dateRange, end: e.target.value })}
                            />
                        </div>

                        <div className="col-md-1 d-flex align-items-end">
                            <button className="btn btn-primary w-100">Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Appointments List</h5>
                </div>
                <div className="card-body">
                    {filteredAppointments.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Patient</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAppointments.map(app => (
                                        <tr key={app.id}>
                                            <td>{app.patient}</td>
                                            <td>{app.date}</td>
                                            <td>{app.time}</td>
                                            <td>
                                                <span className={`badge ${app.status === 'confirmed' ? 'bg-success' : 'bg-warning'}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="btn-group">
                                                    <button className="btn btn-sm btn-outline-primary">Details</button>
                                                    <button className="btn btn-sm btn-outline-success">Confirm</button>
                                                    <button className="btn btn-sm btn-outline-danger">Cancel</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-4">
                            <p className="text-muted">No appointments found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
