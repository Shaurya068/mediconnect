import React, { useState } from 'react';

export default function Profile() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '555-123-4567',
        dob: '1985-05-15',
        address: '123 Main St, City, Country'
    });

    const [editMode, setEditMode] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Patient Profile</h2>
                <button
                    className={`btn ${editMode ? 'btn-success' : 'btn-outline-primary'}`}
                    onClick={() => editMode ? handleSubmit({ preventDefault: () => { } }) : setEditMode(true)}
                >
                    {editMode ? 'Save Profile' : 'Edit Profile'}
                </button>
            </div>

            {saved && (
                <div className="alert alert-success alert-dismissible fade show">
                    Profile updated successfully!
                    <button type="button" className="btn-close" onClick={() => setSaved(false)}></button>
                </div>
            )}

            <div className="card shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Full Name</label>
                                {editMode ? (
                                    <input
                                        className="form-control"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <p>{user.name}</p>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Email Address</label>
                                {editMode ? (
                                    <input
                                        className="form-control"
                                        name="email"
                                        type="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <p>{user.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Phone Number</label>
                                {editMode ? (
                                    <input
                                        className="form-control"
                                        name="phone"
                                        value={user.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <p>{user.phone}</p>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Date of Birth</label>
                                {editMode ? (
                                    <input
                                        className="form-control"
                                        name="dob"
                                        type="date"
                                        value={user.dob}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <p>{new Date(user.dob).toLocaleDateString()}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Address</label>
                            {editMode ? (
                                <textarea
                                    className="form-control"
                                    name="address"
                                    value={user.address}
                                    onChange={handleChange}
                                    required
                                    rows="2"
                                />
                            ) : (
                                <p>{user.address}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Medical History</label>
                            <textarea
                                className="form-control"
                                placeholder="Add any relevant medical history"
                                rows="4"
                                disabled={!editMode}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
