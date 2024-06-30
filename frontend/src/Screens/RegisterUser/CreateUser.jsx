import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { Avatar } from "../../Avatar"; // Adjust the import path based on your structure

export const CreateUser = () => {


  return (
    <div className="create-account">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Avatar onImageSelect={(file) => setAvatar(file)} />
          <div className="input-group">
            <label className="text-wrapper">First Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="text-wrapper">Last Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="text-wrapper">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="text-wrapper">Confirm Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
