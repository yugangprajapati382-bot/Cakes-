
import React, { useEffect, useRef } from "react";
import "./Clam.css";

import class1 from "./blog-4-1024x627.jpg";
import class2 from "./blog-3-1024x627.jpg";
import class3 from "./blog-2-1024x627.jpg";
import class4 from "./blog-1-1024x627.jpg";

const recipes = [
  {
    id: 1,
    image: class1,
    date: "13 APRIL, 2021",
    title: "Superfast Coconut Smoothie For Healthy Breakfast Every Morning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet justo et dui lacinia iaculis sed at elit. Proin aliquam placerat lacus quis pulvinar. Integer eu elit efficitur, posuere risus id, semper odio. Phasellus non velit et sapien tincidunt.",
  },
  {
    id: 2,
    image: class2,
    date: "13 APRIL, 2021",
    title: "Perfectly Easy Homemade Waffle Recipe Is Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet justo et dui lacinia iaculis sed at elit. Proin aliquam placerat lacus quis pulvinar. Integer eu elit efficitur, posuere risus id, semper odio. Phasellus non velit et sapien tincidunt.",
  },
  {
    id: 3,
    image: class3,
    date: "13 APRIL, 2021",
    title: "Baked Camembert Recipe And How To Decorate The Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet justo et dui lacinia iaculis sed at elit. Proin aliquam placerat lacus quis pulvinar. Integer eu elit efficitur, posuere risus id, semper odio. Phasellus non velit et sapien tincidunt.",
  },
  {
    id: 4,
    image: class4,
    date: "13 APRIL, 2021",
    title: "Whole Roast Turbot With Clams, Fennel And Potatoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet justo et dui lacinia iaculis sed at elit. Proin aliquam placerat lacus quis pulvinar. Integer eu elit efficitur, posuere risus id, semper odio. Phasellus non velit et sapien tincidunt.",
  },
];

const Clam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".clam-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("clam-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="clam-section" id="recipes" ref={sectionRef}>

      <div className="clam-heading clam-reveal">
        <h2>Most Popular Recipes</h2>
        <span className="clam-decoration">~</span>
      </div>

      <div className="clam-container">
        {recipes.map((recipe, index) => (
          <article
            className="clam-card clam-reveal"
            key={recipe.id}
            style={{ "--delay": `${index * 150}ms` }}
          >

            <a href="/contact" className="clam-image-box">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="clam-image"
                loading="eager"
              />

              <div className="clam-image-overlay">
                <span>READ RECIPE ↗</span>
              </div>
            </a>


            <div className="clam-content">

              <span className="clam-date">
                {recipe.date}
              </span>

              <h3>
                <a href="/contact">{recipe.title}</a>
              </h3>

              <p>{recipe.description}</p>

              <a href="/contact" className="clam-read-more">
                READ MORE <span>→</span>
              </a>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default Clam;
