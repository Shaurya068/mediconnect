import React, { useState } from 'react';
import axios from '../../api/axiosConfig';
import { Link } from 'react-router-dom';

export default function RegisterDoctor() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        specialization: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('/auth/register-doctor', form);
            setSuccess(true);
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    if (success) {
        return (
            <div className="container-form text-center">
                <div className="bg-success text-white p-4 rounded mb-4">
                    <i className="bi bi-check-circle fs-1"></i>
                    <h3 className="mt-3">Registration Successful!</h3>
                </div>
                <p>Your doctor account has been created successfully.</p>
                <Link to="/login" className="btn btn-primary">Login to Your Account</Link>
            </div>
        );
    }

    return (
        <div className="container-form">
            <div className="text-center mb-4">
                <h2>Register as Doctor</h2>
                <p className="text-muted">Join our network of healthcare professionals</p>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Full Name</label>
                    <input
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Dr. Jane Smith"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Email Address</label>
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        className="form-control"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder="Create a strong password"
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold">Specialization</label>
                    <input
                        className="form-control"
                        name="specialization"
                        value={form.specialization}
                        onChange={handleChange}
                        required
                        placeholder="Cardiology, Neurology, etc."
                    />
                </div>
                <button className="btn btn-primary w-100 mb-3">Create Account</button>

                <div className="text-center">
                    <p className="mb-0">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                    <Link to="/register-patient" className="text-muted small">
                        Register as Patient instead
                    </Link>
                </div>
            </form>
        </div>
    );
}
