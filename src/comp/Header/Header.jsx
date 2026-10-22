import { useEffect, useState } from "react";
import "./Header.scss";
import { FiHeart } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About 1991",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Tattoo Education",
      link: "/",
    },
    {
      name: "Art",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/",
    },
    {
      name: "Tattoo Care",
      link: "/",
    },
  ];

  return (
    <>
      <div class="header_parent parent">
        <div
          class="header_bottom_line"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        <div class="header_cont cont">
          <div class="left_side">
            <img src={logo} alt="" />

            <div className={`hamburger ${isOpen ? "active" : ""}`}>
              <label>
                <input
                  type="checkbox"
                  checked={isOpen}
                  onChange={() => setIsOpen(!isOpen)}
                  onBlur={() => setIsOpen(false)}
                />

                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />

                  <path className="line--2" d="M0 50h70" />

                  <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                </svg>
              </label>
            </div>
          </div>

          <div class="right_side">
            <a href="https://www.instagram.com/1991tattoos/" target="_blank" >
              <span>
                <FaInstagram />
              </span>
              <span className="text">Visit Instagram</span>
            </a>
            
            <a href="to:+919881742686">
              <span>
                <MdOutlineCall />
              </span>
              <span className="text">+91 98817 42686</span>
            </a>
          </div>
        </div>
        <div
          class={isOpen ? "main_header_section active" : "main_header_section"}
        >
          {navs?.map((item, index) => (
            <a href="" key={index}>
              <p>{item.name}</p>
              {/* <span>+</span> */}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
