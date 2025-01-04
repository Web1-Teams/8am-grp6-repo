import React from "react";
import { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Rating: ", rating);
    console.log("Feedback: ", feedbackText);
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="feedback-container">
        <p>Thank You For Your Feedback!</p>
      </div>
    );
  }

  return (
    <section className="feedback-container container mt-5">
      <h1 className=" feedback-title mb-4 ">Feedback</h1>
      <h5 className=" feedback mb-3 ">Please Leave Your Feedback</h5>

      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleStarClick(value)}
            className={value <= rating ? "star-filled" : "star-empty"}
          >
            ★
          </span>
        ))}
      </div>
      <div className="feedback-textarea-container">
        <textarea
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="What can we do to improve our experience?"
          className="feedback-textarea"
        ></textarea>
        <button onClick={handleSubmit} className="submit-button">
          Submit My Feedback
        </button>
      </div>
    </section>
  );
}

export default Feedback;
