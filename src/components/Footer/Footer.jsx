import "./Footer.css";
import logo from "./logo.png";
import {
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src={logo}
            alt="An-Najah Hospital Logo"
            className="footer-logo"
          />
          <div className="footer-contact">
            <div className="contact-item">
              <FaMapMarkedAlt className="contact-icon" />
              <span className="contact-label">Our Address:</span>
              <p>Asira Street - Nablus, Palestine</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span className="contact-label">Email:</span>
              <p>
                <a href="mailto:nnuh@najah.edu">nnuh@najah.edu</a>
              </p>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <span className="contact-label">Whatsapp:</span>
              <p>+970 592 444 010</p>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <p className="follow-us">Follow Us</p>
          <div className="footer-social">
            <a href="#" target="_blank" aria-label="Follow us on Facebook">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" aria-label="Follow us on Instagram">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" aria-label="Follow us on LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" aria-label="Follow us on YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {currentYear} An-Najah National University Hospital. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
