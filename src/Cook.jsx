
import React, { useEffect, useRef } from "react";
import "./Cook.css";

import bookImg from "./contact-me-image.png";

function Cook() {

    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current.querySelectorAll(".cook-reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been submitted.");
        e.target.reset();
    };

    return (
        <section className="cook-section" ref={sectionRef}>

            {/* Top Heading */}
            <div className="cook-header">
                <div className="cook-header-container">
                    <h2>Contact Me</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="cook-container">

                {/* Left Side */}
                <div className="cook-left cook-reveal">

                    <h2>My Cookbooks</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris
                        nisi ut aliquip ex sit amet,
                        consectetur adipiscing.
                    </p>

                    <div className="cook-book">

                        <img
                            src={bookImg}
                            alt="My Cookbooks"
                        />

                        <a href="/contact" className="cook-order-btn">
                            Order now <span>»</span>
                        </a>

                    </div>

                </div>

                {/* Right Side */}
                <div className="cook-right cook-reveal">

                    <h2>Contact Me</h2>

                    <p>
                        Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas
                        sit dolores eo.
                    </p>

                    <p>
                        At vero eos et accusamus et iusto odio
                        dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias
                        excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa.
                    </p>

                    <p>
                        If you have a question, comment or just want
                        to say hello, feel free to email me at
                        <a href="mailto:email@email.com">
                            {" "}email@email.com
                        </a>.
                        I look forward to chatting with you!
                    </p>

                    {/* Contact Form */}
                    <form className="cook-form" onSubmit={handleSubmit}>

                        <div className="cook-input-row">

                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                            />

                        </div>

                        <textarea
                            placeholder="Write a message..."
                            rows="2"
                            required
                        ></textarea>

                        <button type="submit">
                            Send »
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Cook;
