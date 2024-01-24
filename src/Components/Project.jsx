import React, { useState } from "react";
import { FaGithub, FaLink, FaVideo } from "react-icons/fa";

const Project = ({
  title,
  backgroundColor,
  githubLink,
  deployedLink,
  walkthroughVideo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: backgroundColor || "#eee",
    opacity: isHovered ? 1 : 0.8,
    transition: "opacity 0.3s ease-in-out",
  };

  const iconStyle = {
    margin: "5px",
  };

  const iconContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: "auto",
  };

  return (
    <div
      className="col-md-6 col-lg-4 mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div style={iconContainerStyle}>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-dark ${isHovered ? "visible" : "invisible"}`}
              style={iconStyle}
            >
              <FaGithub />
            </a>
            {deployedLink && (
              <a
                href={deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-dark mx-2 ${
                  isHovered ? "visible" : "invisible"
                }`}
                style={iconStyle}
              >
                <FaLink />
              </a>
            )}
            {walkthroughVideo && (
              <a
                href={walkthroughVideo}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-dark ${
                  isHovered ? "visible" : "invisible"
                }`}
                style={iconStyle}
              >
                <FaVideo />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
