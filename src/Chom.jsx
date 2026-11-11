
import React, { useEffect } from "react";
import "./Chom.css";

import author from "./about-image.png";
import signature from "./sidebar-image-2.png";

import blog8 from "./blog-4.jpg";
import blog9 from "./blog-2.jpg";
import blog10 from "./blog-1.jpg";

import small1 from "./blog-5-150x150.jpg";
import small2 from "./blog-6-150x150.jpg";
import small3 from "./blog-7-150x150.jpg";

import category1 from "./category-1.png";
import category2 from "./category-2.png";
import category3 from "./category-3.png";

const recipes = [
  { image: blog10, title: "Superfast Coconut Smoothie Easy To Made" },
  { image: blog9, title: "Fresh Figs With Honey Cream" },
  { image: blog8, title: "Perfectly Easy Homemade Pear Cake" },
];

const favorites = [
  {
    image: small1,
    title: "Baked Camembert Recipe And How To Decorate The Table",
  },
  {
    image: small2,
    title: "Fresh Figs With Honey Cream",
  },
  {
    image: small3,
    title: "Perfectly Easy Homemade Waffle Recipe Is Here",
  },
];

const categories = [
  { image: category1, name: "DESSERTS" },
  { image: category2, name: "BREAKFAST" },
  { image: category3, name: "PASTRY" },
];

function Chom() {
  useEffect(() => {
    const elements = document.querySelectorAll(".look-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("look-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="look-section">

      <div className="look-heading">
        <div className="look-heading-inner">
          <h1>Lunch</h1>
        </div>
      </div>

      <div className="look-container">

        <main className="look-main">

          {recipes.map((recipe, index) => (
            <article
              className="look-post look-reveal"
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="look-post-image">
                <img src={recipe.image} alt={recipe.title} />
              </div>

              <div className="look-post-content">
                <h2>
                  <span>14 Apr</span> {recipe.title}
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla sit amet justo et dui lacinia iaculis sed at elit.
                  Proin aliquam placerat lacus quis pulvinar.
                  Integer eu elit efficitur, posuere risus id, semper odio.
                  Phasellus non velit et sapien tincidunt interdum.
                </p>

                <a href="/recipe">Read More »</a>
              </div>
            </article>
          ))}

        </main>

        <aside className="look-sidebar">

          <div className="look-about look-reveal">

            <h3 className="look-widget-title">ABOUT ME</h3>

            <img
              className="look-author"
              src={author}
              alt="Food blogger"
            />

            <h2>Adriana Veloce</h2>

            <i>Food blogger</i>

            <p>
              Et dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>

            <img
              className="look-signature"
              src={signature}
              alt="Signature"
            />

          </div>

          <div className="look-social look-reveal">

            <h3 className="look-widget-title">SUBSCRIBE & FOLLOW</h3>

            <div className="look-social-icons">
              <a href="https://www.facebook.com/" target="_blank">f</a>
              <a href="https://x.com/?lang=en" target="_blank">♥</a>
              <a href="https://in.pinterest.com/" target="_blank">p</a>
              <a href="https://mail.google.com/" target="_blank">✉</a>
              <a href="https://www.linkedin.com/" target="_blank" >in</a>
            </div>

          </div>

          <div className="look-favorites look-reveal">

            <h3 className="look-widget-title">FAVORITE RECIPES</h3>

            {favorites.map((item, index) => (
              <div
                className="look-favorite-item"
                key={index}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <img src={item.image} alt={item.title} />

                <h4>{item.title}</h4>
              </div>
            ))}

          </div>

          <div className="look-categories look-reveal">

            <h3 className="look-widget-title">CATEGORIES</h3>

            {categories.map((item, index) => (
              <div
                className="look-category"
                key={index}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <img src={item.image} alt={item.name} />

                <span>{item.name}</span>
              </div>
            ))}

          </div>

          <div className="look-newsletter look-reveal">

            <h2>
              Subscribe To
              <br />
              Newsletter
            </h2>

            <input
              type="email"
              placeholder="Get Newsletter..."
            />

            <button>Subscribe »</button>

          </div>

        </aside>

      </div>

    </section>
  );
}

export default Chom;
