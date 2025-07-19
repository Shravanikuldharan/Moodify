// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       <a href="https://github.com/yourusername" target="_blank">
//         <i className="fab fa-github"></i>
//       </a>
//       <a href="https://www.linkedin.com/in/yourusername" target="_blank">
//         <i className="fab fa-linkedin"></i>
//       </a>
//       <a href="https://peerlist.io/yourusername" target="_blank">
//         <i className="fa-solid fa-user-group"></i>
//       </a>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-content">
    <h2 className="footer-title">Moodify</h2>
    <div className="social-icons">
      <a href="#"><i className="fab fa-github"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fas fa-user-friends"></i></a>
    </div>
    <p className="footer-copy">© 2025 Moodify · All rights reserved.</p>
  </div>
</footer>

  );
}

export default Footer;
