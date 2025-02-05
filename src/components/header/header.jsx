import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Switch from "react-switch";
import "./header.css";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = ["home", "experience", "skill", "work"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    const headerHeight = document.querySelector(".nav").offsetHeight;
    const element = document.getElementById(id);

    if (element) {
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        !e.target.closest(".nav__menu") &&
        !e.target.closest(".hamburger")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`nav ${isScrolled ? "scrolled" : ""} ${
        isMobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      <div className="nav__container">
        <div className="nav__brand">陳 怡 秀</div>

        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav__menu ${isMobileMenuOpen ? "active" : ""}`}>
          {sections.map((section) => (
            <li
              key={section}
              className={`nav__item ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => handleScroll(section)}
            >
              <a className="nav__link">{section.toUpperCase()}</a>
            </li>
          ))}
          <li className="nav__switch">
            <Switch
              checked={isDarkTheme}
              onChange={toggleTheme}
              height={24}
              width={48}
              onColor="#4D4D4D"
              offColor="#ccc"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
