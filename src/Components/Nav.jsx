import React from "react";

function Nav({ currentTab, handleTabChange }) {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => handleTabChange("about")}
            className={`nav-link ${currentTab === "about" ? "active" : ""}`}
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleTabChange("portfolio")}
            className={`nav-link ${currentTab === "portfolio" ? "active" : ""}`}
          >
            Portfolio
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleTabChange("contact")}
            className={`nav-link ${currentTab === "contact" ? "active" : ""}`}
          >
            Contact
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleTabChange("resume")}
            className={`nav-link ${currentTab === "resume" ? "active" : ""}`}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
