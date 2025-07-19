import React from "react";
import "./CommonButton.css";

function CommonButton({ onClick, label, icon }) {
  return (
    <button className="common-btn" onClick={onClick}>
      {label}
      {icon && <img src={icon} className="btn-icon" />}
    </button>
  );
}

export default CommonButton;
