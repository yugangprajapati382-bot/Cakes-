import React, { useEffect, useRef } from "react";
import "./Happy.css";

import happyImg from "./about-image.png";

import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaEnvelope,
    FaSnapchatGhost,
    FaFacebookMessenger
} from "react-icons/fa";

function Happy() {

    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current.querySelectorAll(".happy-reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="happy-section" ref={sectionRef}>

            <div className="happy-header">
                <div className="happy-header-container">
                    <h2>About Me</h2>
                </div>
            </div>

            <div className="happy-container">

                <div className="happy-left happy-reveal">

                    <div className="happy-image-box">

                        <img
                            src={happyImg}
                            alt="Chef Ana"
                            className="happy-image"
                        />

                    </div>
                    <div className="happy-social">

                        <a href="https://facebook.com" aria-label="Facebook">
                            <FaFacebookF />
                        </a>

                        <a href="https://twitter.com" aria-label="Twitter">
                            <FaTwitter />
                        </a>

                        <a href="https://pinterest.com" aria-label="Pinterest">
                            <FaPinterestP />
                        </a>

                        <a href="mailto:hello@example.com" aria-label="Email">
                            <FaEnvelope />
                        </a>

                        <a href="https://snapchat.com" aria-label="Snapchat">
                            <FaSnapchatGhost />
                        </a>

                        <a href="https://messenger.com" aria-label="Messenger">
                            <FaFacebookMessenger />
                        </a>

                    </div>

                </div>

                <div className="happy-right">

                    <h1 className="happy-main-title happy-reveal">
                        Welcome To My Kitchen. I'm Happy You're Here.
                        You Can Call Me Ana, Which Is One Of Many
                        Nicknames, Or Adriana, Which Is My Full First
                        Name. Either Way, I'm A Self-Taught Photographer
                        And Cook From Oklahoma.
                    </h1>

                    <div className="happy-text-grid">

                        <div className="happy-text-column happy-reveal">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo.
                            </p>

                            <p>
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis
                                Facebook voluptatum deleniti atque
                                corrupti quos dolores et.
                            </p>

                            <p>
                                Molestias excepturi sint occaecati
                                cupiditate non provident, similique
                                Pinterest in culpa qui officia deserunt
                                mollitia animi.
                            </p>

                        </div>

                        <div className="happy-text-column happy-reveal">

                            <p>
                                Molestias excepturi sint occaecati
                                cupiditate non provident, similique
                                sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et
                                dolorum fuga. Et harum quidem rerum
                                facilis est et expedita distinctio.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo
                                <a href="/contact"> click here.</a>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Happy;
