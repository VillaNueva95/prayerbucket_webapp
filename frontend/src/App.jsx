import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Screens/Sign Up/SignUp"; // Ensure path is correct
import CreateUser from "./Screens/RegisterUser/CreateUser"; // Corrected the typo
import CreateOrganization from "./Screens/RegisterOrg/CreateOrganization"; // Ensure path is correct
import Admin from "Screens/AdminHome/Admin"; // Ensure path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-organization" element={<CreateOrganization />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
