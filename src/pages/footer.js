import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className="container-fluid pt-3 f-color mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="social-connect">
                <h3 className="footer-heading">Connect With Us</h3>
                <div className="mail">

                  <Link to="/login" className="footer-link"><FontAwesomeIcon icon={faEnvelope} /> bhopal.city.official@gmail.com</Link>
                  <ul className="social-icon">

                    <li><FaYoutube className="icon" /></li>
                    <li><FaFacebookF className="icon"/></li>
                    <li><FaInstagram className="icon"/>
</li>
                  </ul>


                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="f-card">
                <li><Link to="/" className="f-link">Home</Link></li>
                <li><Link to="/login" className="f-link">Login</Link></li>
                <li><Link to="/detail" className="f-link">Register</Link></li>
                <li><Link to="/register" className="f-link">Add Your Business</Link></li>




              </ul>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="f-card">
                <li><Link to="/catagory-list" className="f-link">Blog</Link></li>
                <li><Link to="/contact" className="f-link">Contact Us</Link></li>
                <li><Link to="/company-detail" className="f-link">About Bhopal City</Link></li>
                <li><Link to="/testing" className="f-link">Privacy Policy</Link></li>
                <li><Link to="/profile" className="f-link">Terms And Condition</Link></li>




              </ul>

            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">About Bhopal.City</h3>
              <p className="footer-para">
                Bhopal.city is a bhopal local search engine. Bhopal.city is a local Bhopal Business Listing website and local Bhopal Directory Listing website. Bhopal.city provided the list of business in many categories available in Bhopal.
              </p>

            </div>


          </div>


        </div>


      </div>



    </>

  );
}

export default Footer;