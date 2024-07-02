import { NavLink, Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import '../css/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="cen">
        <p data-testid="footer-logo" className="paragraph colwhite">
          Food Court
        </p>
        <p className="paragraph colwhite cen">
          Developed by Khalid{" "}
          <a href="https://github.com/Khaliditsme">
            {" "}
            <FiGithub color="white" size="1rem" to="/about" />{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
