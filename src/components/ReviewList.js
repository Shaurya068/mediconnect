import React, { useEffect, useState } from 'react';
import { fetchDoctorReviews } from '../api/reviewApi';

export default function ReviewList({ doctorId }) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const response = await fetchDoctorReviews(doctorId);
                setReviews(response.data);
            } catch (error) {
                console.error('Failed to load reviews:', error);
            } finally {
                setLoading(false);
            }
        };

        loadReviews();
    }, [doctorId]);

    if (loading) return <div className="text-center my-4">Loading reviews...</div>;
    if (!reviews.length) return <div className="text-secondary my-4">No reviews yet. Be the first to review!</div>;

    return (
        <div className="mt-4">
            <h4 className="mb-3">Patient Reviews</h4>
            {reviews.map((review, idx) => (
                <div key={idx} className="review-card mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <strong className="me-2">{review.patient?.name || 'Anonymous'}</strong>
                            <span className="review-stars">
                                {'★'.repeat(review.rating)}
                                {'☆'.repeat(5 - review.rating)}
                            </span>
                        </div>
                        <small className="text-muted">
                            {new Date(review.createdAt).toLocaleDateString()}
                        </small>
                    </div>
                    <p className="review-comment mt-2 mb-0">{review.comment}</p>
                </div>
            ))}
        </div>
    );
}
