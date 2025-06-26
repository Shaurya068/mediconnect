import React, { useState } from 'react';
import ReviewForm from '../../components/ReviewForm';
import ReviewList from '../../components/ReviewList';

export default function Profile() {
    // For demo purposes - in real app, this would come from API
    const doctorId = 'doc123';
    const [doctor] = useState({
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiologist',
        hospital: 'City General Hospital',
        experience: '10 years',
        education: 'MD, Cardiology, Harvard Medical School',
        bio: 'Board-certified cardiologist with extensive experience in non-invasive cardiology and preventive care.'
    });

    const [editMode, setEditMode] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        // In real app, update state
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
                <h2>Doctor Profile</h2>
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

            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body text-center">
                            <div className="bg-light rounded-circle p-2 mb-3 mx-auto" style={{ width: '150px', height: '150px' }}>
                                <i className="bi bi-person-badge fs-1 text-primary" style={{ lineHeight: '150px' }}></i>
                            </div>
                            <h3>{doctor.name}</h3>
                            <p className="text-primary fw-bold">{doctor.specialization}</p>
                            <p className="text-muted">{doctor.hospital}</p>

                            <div className="d-grid gap-2 mt-4">
                                <button className="btn btn-outline-primary">
                                    <i className="bi bi-calendar-plus me-1"></i>Add Availability
                                </button>
                                <button className="btn btn-outline-primary">
                                    <i className="bi bi-pencil-square me-1"></i>Edit Services
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-header bg-info text-white">
                            <h5 className="mb-0">Professional Information</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label fw-bold">Experience</label>
                                {editMode ? (
                                    <input
                                        className="form-control"
                                        value={doctor.experience}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p>{doctor.experience}</p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Education</label>
                                {editMode ? (
                                    <textarea
                                        className="form-control"
                                        value={doctor.education}
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                ) : (
                                    <p>{doctor.education}</p>
                                )}
                            </div>

                            <div>
                                <label className="form-label fw-bold">Specializations</label>
                                {editMode ? (
                                    <input
                                        className="form-control"
                                        value={doctor.specialization}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p>{doctor.specialization}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card shadow-sm mb-4">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">About Me</h5>
                        </div>
                        <div className="card-body">
                            {editMode ? (
                                <textarea
                                    className="form-control"
                                    value={doctor.bio}
                                    onChange={handleChange}
                                    rows="5"
                                />
                            ) : (
                                <p className="lead">{doctor.bio}</p>
                            )}
                        </div>
                    </div>

                    <ReviewForm doctorId={doctorId} />
                    <ReviewList doctorId={doctorId} />
                </div>
            </div>
        </div>
    );
}
