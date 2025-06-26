import React, { useState } from 'react';
import { submitReview } from '../api/reviewApi';

export default function ReviewForm({ doctorId, onReviewSubmitted }) {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await submitReview(doctorId, rating, comment);
            setMessage('✅ Review submitted successfully!');
            setRating(5);
            setComment('');
            if (onReviewSubmitted) onReviewSubmitted();
        } catch (err) {
            setMessage(
                err.response?.data?.message || '❌ Failed to submit review. Please try again.'
            );
        }
    };

    return (
        <div className="review-form mb-4">
            <h4 className="mb-3">Write a Review</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Rating:</label>
                    <div className="d-flex align-items-center">
                        <select
                            className="form-select w-auto me-2"
                            value={rating}
                            onChange={e => setRating(Number(e.target.value))}
                        >
                            {[5, 4, 3, 2, 1].map(val => (
                                <option key={val} value={val}>{val} Star{val > 1 ? 's' : ''}</option>
                            ))}
                        </select>
                        <span className="text-warning fs-5">
                            {'★'.repeat(rating)}
                            {'☆'.repeat(5 - rating)}
                        </span>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Your Experience:</label>
                    <textarea
                        className="form-control"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        rows={4}
                        placeholder="Share your experience with this doctor..."
                    />
                </div>
                <button className="btn btn-primary w-100">Submit Review</button>
                {message && <div className={`mt-2 ${message.includes('✅') ? 'text-success' : 'text-danger'}`}>{message}</div>}
            </form>
        </div>
    );
}
