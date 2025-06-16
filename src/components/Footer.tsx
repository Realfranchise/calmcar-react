import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 CalmCar. Artificial Intelligence & Intelligent Driving & Future Technology</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/certifications">ISO Certifications</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;