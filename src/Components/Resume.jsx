import React from "react";
import ResumeSection from "./ResumeSection";
import { BsCloudDownload } from "react-icons/bs";
import MahmoudAhmedResumePDF from "../assets/Mahmoud-Ahmed-Resume.pdf";

function Resume() {
  const frontendTech = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "jQuery",
    "RESTful APIs",
  ];

  const backendDevelopment = [
    "Node.js",
    "Express",
    "Sequelize",
    "Mongoose",
    "GraphQL",
    "Jest",
  ];

  const databaseManagement = ["MySQL", "NoSQL-MongoDB"];

  const performanceTech = [
    "Progressive Web Applications (PWA)",
    "Model-View-Controller (MVC)",
    "Object-Relational Mapping (ORM)",
    "MERN Stack (MongoDB, Express.js, React, Node.js)",
    "State Management",
  ];

  const downloadResumeLink = MahmoudAhmedResumePDF;

  return (
    <div className="container">
      <section className="mb-5">
        <div className="row">
          <div className="col">
            <h2 className="section-title primary-border">My Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="download-info">
              <div className="download-text">
                <p className="mt-3">
                  Please feel free to check out my list of Developer
                  Proficiencies!
                </p>
                <a
                  href={downloadResumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Download Resume <BsCloudDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-body">
        <div className="row">
          <ResumeSection
            title="Front-End Tech"
            items={frontendTech}
            backgroundColor=""
          />
          <ResumeSection
            title="Backend Development"
            items={backendDevelopment}
            backgroundColor=""
          />
          <ResumeSection
            title="Database Management"
            items={databaseManagement}
            backgroundColor=""
          />
          <ResumeSection
            title="Performance Tech"
            items={performanceTech}
            backgroundColor=""
          />
        </div>
      </section>
    </div>
  );
}

export default Resume;
