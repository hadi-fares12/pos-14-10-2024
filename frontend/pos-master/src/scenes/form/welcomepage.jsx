import React from "react";
import { Button } from "@mui/material"; // Assuming you're using Material-UI
import { useNavigate } from "react-router-dom";
import paradoxlogo from './paradoxlogo.jpg'; // Correct way to import the image

const WelcomePage = () => {
  const navigate = useNavigate(); // Hook to navigate to other routes

  return (
    <div style={{ height: "100%" }}>
      <img
        src={paradoxlogo}
        alt="Paradox Logo"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default WelcomePage;
