
import React, { useEffect } from "react";
import "./Din.css";

import img1 from "./home-image-1.png";
import img2 from "./home-image-2.png";
import img3 from "./home-image-3.png";
import img4 from "./home-image-4.png";
import img5 from "./home-image-5.png";
import img6 from "./home-image-6.png";
import img7 from "./home-image-7.png";
import img8 from "./home-image-8.png";
import img9 from "./home-image-9.png";

const sections = [
    {
        title: "Occasions",
        items: [
            { image: img1, name: "Superfast Coconut Smoothie Easy To Made" },
            { image: img2, name: "Superfast Coconut Smoothie Easy To Made" },
            { image: img3, name: "Superfast Coconut Smoothie Easy To Made" },
        ],
    },
    {
        title: "Special Diets",
        items: [
            { image: img4, name: "Superfast Coconut Smoothie Easy To Made" },
            { image: img5, name: "Superfast Coconut Smoothie Easy To Made" },
            { image: img6, name: "Superfast Coconut Smoothie Easy To Made" },
        ],
    },
    {
        title: "Super Easy",
        items: [
            { image: img7, name: "Superfast Coconut Smoothie Easy To Made" },
            { image: img8, name: "Fresh Figs With Honey Cream" },
            { image: img9, name: "Whole Roast Turbot With Clams Fennel And Potatoes" },
        ],
    },
];

function Din() {

    useEffect(() => {
        const cards = document.querySelectorAll(".din-card");
        const headings = document.querySelectorAll(".din-heading");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        cards.forEach((card) => observer.observe(card));
        headings.forEach((heading) => observer.observe(heading));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="din-section">
            <div className="din-container">

                <div className="din-grid">

                    {sections.map((section, index) => (
                        <div className="din-column" key={section.title}>

                            <h2
                                className="din-heading"
                                style={{ transitionDelay: `${index * 0.15}s` }}
                            >
                                {section.title}
                            </h2>

                            <div className="din-items">

                                {section.items.map((item, i) => (
                                    <div
                                        className="din-card"
                                        key={i}
                                        style={{
                                            transitionDelay: `${i * 0.15}s`
                                        }}
                                    >
                                        <div className="din-image-box">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="din-image"
                                            />
                                        </div>

                                        <h3 className="din-title">
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Din;
