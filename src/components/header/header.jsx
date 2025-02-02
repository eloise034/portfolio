import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Switch from "react-switch";
import "./header.css";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="nav__wrapper container">
        <div className="nav__logo"> 陳 怡 秀</div>
        <ul
          className={`nav__menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <li className="nav__menu-items">
            <a href="#HOME">HOME</a>
          </li>
          <li className="nav__menu-items">
            <a href="#EXPERIENCE">EXPERIENCE</a>
          </li>
          <li className="nav__menu-items">
            <a href="#WORKS">WORKS</a>
          </li>
          <li className="nav__menu-items">
            <a href="#EDUCATION">EDUCATION</a>
          </li>
          <Switch
            checked={isDarkTheme}
            onChange={toggleTheme}
            height={24}
            width={48}
            onColor="#4D4D4D"
            offColor="#ccc"
          />
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default Header;
