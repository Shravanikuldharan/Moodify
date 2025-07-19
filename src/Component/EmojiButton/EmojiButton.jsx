import React from "react";
import "./EmojiButton.css";

function EmojiButton({ emoji, setEmoji, currentEmoji }) {
  const isSelected = currentEmoji === emoji;

  return (
    <div
      className={`emoji-option ${isSelected ? "selected" : ""}`}
      onClick={() => setEmoji(emoji)}
    >
      {emoji}
    </div>
  );
}

export default EmojiButton;
