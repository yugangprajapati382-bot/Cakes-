
import React from "react";
import "./Footer.css";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaEnvelope,
    FaSnapchatGhost,
    FaChevronUp
} from "react-icons/fa";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">

            <div className="footer-content">

             <div className="footer-logo">
                    <h1>
                        <span>LE</span> BRIDGE
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipis
                    </p>
                </div>
                <div className="footer-social">

                    <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                        <FaFacebookF />
                    </a>

                    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </a>

                    <a href="https://pinterest.com" target="_blank" aria-label="Pinterest">
                        <FaPinterestP />
                    </a>

                    <a href="mailto:hello@example.com" target="_blank" aria-label="Email">
                        <FaEnvelope />
                    </a>

                    <a href="https://snapchat.com" target="_blank" aria-label="Snapchat">
                        <FaSnapchatGhost />
                    </a>

                </div>
                <div className="footer-nav">

                    <a href="/">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                    <a href="/lunch">LUNCH</a>
                    <a href="/time">PASTRY</a>
                    <a href="/seafood">SEAFOOD</a>

                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>
                    Copyright @ Qode Interactive 2021
                </p>
            </div>

            {/* Scroll To Top */}
            <button
                className="footer-top"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FaChevronUp />
            </button>

        </footer>
    );
}

export default Footer;
