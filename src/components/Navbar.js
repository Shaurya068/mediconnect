import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-heart-pulse me-2"></i>MediConnect
                </Link>
                <div>
                    <Link className="btn btn-outline-light me-2" to="/login">
                        Login
                    </Link>
                    <div className="btn-group">
                        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Register
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/register-patient">As Patient</Link></li>
                            <li><Link className="dropdown-item" to="/register-doctor">As Doctor</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
