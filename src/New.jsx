
import React, { useEffect, useRef, useState } from "react";
import "./New.css";

import leftImage from "./home-image-23.png";
import rightImage from "./home-image-24.png";

const New = () => {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("new-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="new-section" ref={sectionRef}>

      <div className="new-container">

        <div className="new-side new-left">
          <img
            src={leftImage}
            alt="Fresh delicious breakfast"
          />
        </div>

        <div className="new-content">

          <div className="new-inner">

            <h2>Subscribe To Newsletter</h2>

            <span className="new-decoration">~</span>

            <form className="new-form" onSubmit={handleSubmit}>

              <input
                type="email"
                placeholder="Get Newsletter..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="new-button">
              <span>Subscribe »</span>
              </button>
              {message && (
                <p className="new-message">{message}</p>
              )}

            </form>

          </div>

        </div>

        <div className="new-side new-right">
          <img
            src={rightImage}
            alt="Chocolate cake with figs"
          />
        </div>

      </div>

    </section>
  );
};

export default New;
