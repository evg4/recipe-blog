import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  function onBack() {
    navigate(-1);
  }
  return <button onClick={onBack}>Back</button>;
}

export default BackButton;
