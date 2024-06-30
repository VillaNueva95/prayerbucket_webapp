import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const [orgID, setOrgID] = useState(""); // State to store the organization ID
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation or API call here
    if (orgID === "5e418543-9ffb-43a1-95e9-f70aa05d1b1e") { // Replace with actual validation logic
      navigate("/create-user"); // Navigate to the dashboard or next page
    } else {
      setErrorMessage("Invalid Organization ID"); // Set error message if validation fails
    }
  };

  const handleCreateIDClick = () => {
    navigate("/create-organization");
  };

  return (
    <div className="sign-up">
      <div className="form-container">
        <img className="logo" alt="Prayerbucket Logo" src="https://c.animaapp.com/GsVwRUe8/img/slice-2--2--1@2x.png" />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="text-wrapper-3">Organization ID</label>
            <input
              type="text"
              className="input-field"
              placeholder="#####"
              value={orgID}
              onChange={(e) => setOrgID(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="link-text" onClick={handleCreateIDClick}>Create ID</span>
          </div>
          <button type="submit" className="login-button">Join</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
