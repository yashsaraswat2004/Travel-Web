import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src="./logo.svg" alt="logo" />
          <p className="mt-4">
            Travel helps people to find their dream destination easily.
          </p>
          <br />

          <div className="social-icons">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </Link>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Company</h2>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Destinations</h2>
          <ul>
            <li>Maldives</li>
            <li>Los Angeles</li>
            <li>Las Vegas</li>
            <li>Toronto</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h2>Join Our Newsletter</h2>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <div className="footer-bottom">
        &copy; 2024 Travel Tour | All Rights Reserved.
      </div>
    </footer>
  );
};

const handleSubscribe = (e) => {
  e.preventDefault();
  console.log("Subscribed successfully!");
};

export default Footer;
