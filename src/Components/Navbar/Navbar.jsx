import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
    // Toggle body class for hiding elements
    if (!navActive) {
      document.body.classList.add("hamburger-active"); // Add class when menu opens
    } else {
      document.body.classList.remove("hamburger-active"); // Remove class when menu closes
    }
  };

  const closeMenu = () => {
    setNavActive(false);
    document.body.classList.remove("hamburger-active"); // Ensure class is removed when closing the menu
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setNavActive(false); // Close the menu on resize
        document.body.classList.remove("hamburger-active"); // Ensure class is removed on resize
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar`}>
      <div className="title-navbar">AT</div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
