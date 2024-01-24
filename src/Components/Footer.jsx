import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p>&copy; 2024 Mahmoud Ahmed | Connect with me on:</p>
        <div className="social-links d-flex justify-content-center">
          <a
            href="https://github.com/MahmoudAhmed0528"
            target="_blank"
            rel="noopener noreferrer"
            className="me-2"
          >
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-2"
          >
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
