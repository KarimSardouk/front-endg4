import React from "react";
import "./header.css";

const TextImageSection = () => {
  const imageUrl =
    "https://o.remove.bg/downloads/fd9a2e7e-d1ab-4c6d-b1a0-37fdf354fb26/1679548125219-removebg-preview.png";

  return (
    <>
      <div className="greetings">Hi Everyone, I am</div>
      <div>
        <h1 className="myName">Layla Abo Saad</h1>
      </div>
      <div className="text-content">
        <p className="paragraph">
          I am a Full Stack Web Developer with a passion for building creative
          web applications. I am experienced in popular frameworks and libraries
          using React JS, Laravel, NodeJs, Wordpress, and more to create
          dynamic, user-friendly web applications, and deliver projects to a
          high standard. As an ambitious, hard-working, and a motivated
          individual, I aim to turn challenging ideas into reality.
        </p>
        <img
          src={imageUrl}
          alt="Layla Abo Saad"
          className="image-header text-image-section"
        />
      </div>
    </>
  );
};

//return (
// <section className="text-image-section">
// <div className="text">
//   <h2>{title}</h2>
// <p>{text}</p>
//   </div>
//  <div className="image">
//  <img src = '/Users/mohammadsafa/Desktop/Portfolio-Layla/backend-portfolio-gr4/frontend/portfolio/src/components/1679548125219.jpeg' alt="Your Image" />
//  </div>
// </section>
// );
//};

export default TextImageSection;
