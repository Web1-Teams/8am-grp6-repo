import "./Homepage.css";
import logo from "C:\\Users\\إلكتروني\\OneDrive\\سطح المكتب\\web1\\my-project\\src\\compontents\\Homepage\\logo.png";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="An-Najah Hospital Logo" className="logo" />
        </div>
        <div className="contact-info">
          <div className="contact-info-details">
            <FaPhoneAlt className="icon" />
            <div>
              <p>Emergency Number</p>
              <p>+970 592 444 010</p>
            </div>
          </div>
          <div className="contact-info-details">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p>Our Location</p>
              <p>Asira Street - Nablus, Palestine</p>
            </div>
          </div>
        </div>
        <div className="social-media">
          <button href="#" target="_blank" rel="noopenernoreferrer">
            <FaFacebookF className="social-icon" />
          </button>
          <button href="#" target="_blank" rel="noopenernoreferrer">
            <FaInstagram className="social-icon" />
          </button>
          <button href="#" target="_blank" rel="noopenernoreferrer">
            <FaYoutube className="social-icon" />
          </button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h2>About An-Najah Hospital</h2>
            <p>
              Our website is an innovative platform designed to enhance the
              healthcare experience by providing comprehensive services that
              make accessing medical information simple and efficient. Through
              the website, you can explore a detailed list of available doctors,
              review their specialties and medical expertise, and select the
              doctor best suited to your health needs. The platform also offers
              accurate information about doctors’ schedules and hospital
              services, with the convenience of booking appointments online. We
              believe in the importance of user feedback in improving our
              services. Therefore, the website features a review and rating
              system, allowing users to share their experiences and help others
              make informed decisions. Our goal is to be your trusted gateway to
              a comfortable and outstanding medical experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
