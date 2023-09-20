import React from "react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  function onHome() {
    navigate("/");
  }
  return <button onClick={onHome}>Home</button>;
}

export default HomeButton;
