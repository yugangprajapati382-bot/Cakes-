
import React from "react";
import "./Pasta.css";

import ic1 from "./home-image-1.png";
import ic2 from "./home-image-2.png";
import ic3 from "./home-image-3.png";
import ic4 from "./home-image-4.png";
import ic5 from "./home-image-5.png";
import ic6 from "./home-image-6.png";
import ic7 from "./home-image-7.png";
import ic8 from "./home-image-8.png";
import ic9 from "./home-image-9.png";
import ic10 from "./home-image-10.png";
import ic11 from "./home-image-11.png";
import ic12 from "./home-image-12.png";

const categories = [
    { title: "Desserts", image: ic1 },
    { title: "Easy Dinner", image: ic2 },
    { title: "Mexican", image: ic3 },
    { title: "Pasta", image: ic4 },
    { title: "Salads", image: ic5 },
    { title: "Pastry", image: ic6 },
    { title: "Smoothies", image: ic7 },
    { title: "Vegan", image: ic8 },
    { title: "Fruits", image: ic9 },
    { title: "Bakery", image: ic10 },
    { title: "Fish", image: ic11 },
    { title: "Cereal", image: ic12 },
];

const Pasta = () => {
    return (
        <section className="pasta-section">
            <div className="pasta-container">

                <div className="pasta-grid">
                    {categories.map((item, index) => (
                        <div
                            className="pasta-card"
                            key={item.title}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="pasta-image-box">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="pasta-image"
                                />
                            </div>

                            <h3 className="pasta-title">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pasta;
