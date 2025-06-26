import React, { useState } from 'react';
import axios from '../../api/axiosConfig';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post('/auth/login', { email, password, role });
            console.log('Login successful:', res.data);
            // Save token and redirect to dashboard
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="container-form">
            <div className="text-center mb-4">
                <h2>Login to MediConnect</h2>
                <p className="text-muted">Access your healthcare dashboard</p>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Email Address</label>
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="your@email.com"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold">I am a</label>
                    <select
                        className="form-select"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <button className="btn btn-primary w-100 mb-3">Sign In</button>

                <div className="text-center mt-4">
                    <p className="mb-0">
                        Don't have an account?
                        <Link to={role === 'patient' ? '/register-patient' : '/register-doctor'} className="ms-1">
                            Register as {role === 'patient' ? 'Patient' : 'Doctor'}
                        </Link>
                    </p>
                    <Link to="/" className="text-muted small">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
}
