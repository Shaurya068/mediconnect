import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <nav className="col-md-3 col-lg-2 d-md-block sidebar">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="bi bi-house-door me-2"></i>Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/patient/dashboard">
                            <i className="bi bi-person me-2"></i>Patient Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/doctor/dashboard">
                            <i className="bi bi-heart-pulse me-2"></i>Doctor Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
