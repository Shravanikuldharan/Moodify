import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://peerlist.io/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Peerlist"
        >
          <i className="fas fa-user-circle"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
