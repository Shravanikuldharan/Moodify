import React from "react";
import "./ColorButton.css";

function ColorButton({ bgColor, setBgColor, currentBg }) {
  const isSelected = bgColor === currentBg;

  return (
    <div
      className={`color-button ${isSelected ? "selected" : ""}`}
      onClick={() => setBgColor(bgColor)}
      style={{ backgroundColor: bgColor }}
    />
  );
}

export default ColorButton;
