
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
    { name: "LUNCH", href: "/lunch" },
    { name: "PASTRY", href: "/time" },
    { name: "SEAFOOD", href: "/seafood" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      console.log("Searching:", searchText);
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="nav-logo">
          <span className="logo-small">LE</span>
          <span className="logo-main">BRIDGE</span>
        </a>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${index === 0 ? "active-link" : ""}`}
              style={{ "--i": index }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="nav-social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/?lang=en-in"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          <div className="search-wrapper">
            <button
              className="search-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
            >
              {searchOpen ? <FaTimes /> : <FaSearch />}
            </button>

            <form
              className={`search-box ${searchOpen ? "search-active" : ""}`}
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search here..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
};

export default Nav;
