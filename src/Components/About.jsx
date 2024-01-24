import React from "react";
import myAvatar from "../assets/images/Mahmoud-Ahmed.jpeg";

function AboutMe({ handleTabChange }) {
  return (
    <section id="about-me" className="about-me-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2 mx-4 my-4">
            <img src={myAvatar} alt="My Avatar" className="avatar-img" />
          </div>
          <div className="col-md-6">
            {/* About Me Text */}
            <div className="about-me-text">
              <h2 className="section-title">About Me</h2>
              <p>
                Welcome to my portfolio! I am Mahmoud Ahmed, a passionate web
                developer with expertise in React. I specialize in building
                responsive and user-friendly web applications. My journey in the
                world of web development started in 2022, and since then, I've
                been dedicated to honing my skills and staying updated with the
                latest technologies.
              </p>
              <p>
                In addition to React, I have hands-on experience with [
                Bootstrap, jQuery, RESTful APIs, Node.js, Express, Sequelize,
                Mongoose, GraphQL, Jest, MySQL, MongoDB ], allowing me to
                deliver comprehensive solutions. My approach to development is
                collaborative and detail-oriented, ensuring that the end product
                meets both functional and aesthetic requirements.
              </p>
              <div className="mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => handleTabChange("portfolio")}
                >
                  Explore My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
