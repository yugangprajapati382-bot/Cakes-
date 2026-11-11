
import React, { useState, useEffect } from "react";
import "./Meal.css";
import back0 from './rev-image-2.png';
import back1 from './rev-image-3.jpg';
import back2 from './rev-image-4.jpg';
import back3 from './rev-image-1.jpg';

const slides = [
  {
    title: "Creamy Spicy Hatch Green",
    subtitle: "Easy Breakfast Meal",
    image: back1,
    stamp: back0,
  },
  {
    title: "Fresh Delicious Recipes",
    subtitle: "Made With Love",
    image: back2,
    stamp: back0,
  },
  {
    title: "Taste The Perfect Food",
    subtitle: "Enjoy Every Moment",
    image: back3,
    stamp: back0,
  },
];

const Meal = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimate(true);
    }, 100);
  };

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
      setAnimate(true);
    }, 100);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="meal-hero">

      <div
        className="meal-background"
        key={slide.image}
        style={{
          backgroundImage: `url("${slide.image}")`,
        }}
      />

      <div className="meal-dark-overlay"></div>

      <div className={`meal-content ${animate ? "meal-animate" : ""}`}>

        <div className="meal-stamp">
          <img src={slide.stamp} alt="Best recipes in the world" />
        </div>

        <div className="meal-heading">
          <h1>
            <span>{slide.title}</span>
          </h1>

          <h2>
            <span>{slide.subtitle}</span>
          </h2>
        </div>
        <a href="/about" className="meal-read-btn">
          <span>Read more »</span>
        </a>

      </div>

      <button
        className="meal-arrow meal-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span></span>
      </button>

      <button
        className="meal-arrow meal-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span></span>
      </button>

      <div className="meal-dots">
        {slides.map((item, index) => (
          <button
            key={item.image}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Meal;
