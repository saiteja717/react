import React, { useState } from 'react';
import './EnterNamePage.css'; // For styling

const EnterNamePage = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      setSubmitted(true); // Mark as submitted
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        {!submitted && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnterNamePage;