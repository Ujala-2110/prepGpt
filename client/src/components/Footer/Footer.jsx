import React from 'react';
import './footer.css'; // Import your footer CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Learn more about our mission and team.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Contact us for support and inquiries.</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay updated with our social media.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 prepGpt</p>
      </div>
    </footer>
  );
}

export default Footer;
