import React, { useState, useEffect } from 'react';
import axios from '../../api/axiosConfig';

export default function BookAppointment() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [doctorId, setDoctorId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('/api/doctors');
                setDoctors(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch doctors:', err);
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await axios.post('/api/appointments', { doctorId, date: `${date}T${time}:00.000Z` });
            setMessage('✅ Appointment booked successfully!');
            setDoctorId('');
            setDate('');
            setTime('');
        } catch (err) {
            setMessage('❌ Failed to book appointment. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Book Appointment</h2>
                <Link to="/patient/dashboard" className="btn btn-outline-primary">
                    <i className="bi bi-arrow-left me-1"></i>Back to Dashboard
                </Link>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    {message && (
                        <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-danger'}`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Select Doctor</label>
                                <select
                                    className="form-select"
                                    value={doctorId}
                                    onChange={e => setDoctorId(e.target.value)}
                                    required
                                    disabled={loading}
                                >
                                    <option value="">Choose a doctor</option>
                                    {doctors.map(doctor => (
                                        <option key={doctor._id} value={doctor._id}>
                                            Dr. {doctor.user.name} ({doctor.specialization})
                                        </option>
                                    ))}
                                </select>
                                {loading && <div className="form-text">Loading doctors...</div>}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Date</label>
                                <input
                                    className="form-control"
                                    type="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Time</label>
                                <select
                                    className="form-select"
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                    required
                                >
                                    <option value="">Select time</option>
                                    <option value="09:00">9:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="13:00">1:00 PM</option>
                                    <option value="14:00">2:00 PM</option>
                                    <option value="15:00">3:00 PM</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Reason for Visit</label>
                                <input
                                    className="form-control"
                                    placeholder="Briefly describe your symptoms"
                                />
                            </div>
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-primary" disabled={loading}>
                                {loading ? 'Booking...' : 'Confirm Appointment'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
