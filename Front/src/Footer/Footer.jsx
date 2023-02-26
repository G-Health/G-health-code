import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
        <div className="footer-text">
          <button className="join-us-btn">Join Us</button>
        </div>
        <div className="footer-text-middle">
          <h2>We Keep Your Data Secure !!! Do not Panic</h2>
        </div>
        <div className="footer-text">
          <p>G-Health: Your online hospital</p>
          <p>Address: Guinea</p>
          <p>Contact: e-hospital@gmail.com</p>
        </div>
      <div className="row">
        <div className="footer-text">
          <p>&copy; 2023 G-Hospital Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
