import "./Footer.scss";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_parent parent">
      <div className="footer_cont cont">
        <div className="footer_main">
          <div className="footer_brand">
            <a className="footer_logo" href="/" aria-label="1991 Tattoos home">
              <img src={logo} alt="1991 Tattoos" />
            </a>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id nisi
              reiciendis cumque non similique, totam nihil magni facere sunt
              aliquid!
            </p>
          </div>

          <nav className="footer_links" aria-label="Footer navigation">
            <h2>Explore</h2>
            <Link>Home</Link>
            <Link>About 1991</Link>
            <Link>Tattoo Education</Link>
            <Link>1991 Arts</Link>
            <Link>Tattoo Care</Link>
          </nav>
             <nav className="footer_links" aria-label="Footer navigation">
          <h2 style={{opacity: 0}}>Explore</h2>
            <Link>Privacy Policy</Link>
            <Link>Terms & Condition</Link>
            
          </nav>

          <div className="footer_contact">
            <h2>Get in touch</h2>
            <a href="tel:+919881742686">
              <MdOutlineCall aria-hidden="true" />
              +91 98817 42686
            </a>
            <a
              href="https://www.instagram.com/1991tattoos/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              Follow our work
            </a>
          </div>
        </div>

        <div className="footer_bottom">
          <span>
            © {new Date().getFullYear()} 1991 Tattoos. All rights reserved.
          </span>
          <span>
            developed by{" "}
            <a href="https://wavesolutions.in/" target="blank">
              Wave Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
