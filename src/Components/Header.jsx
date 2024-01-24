import React from "react";
import Nav from "./Nav";

function Header({ currentTab, handleTabChange }) {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h2 className="display-4 text-left">Welcome</h2>
          <p className="lead">
            Welcome to my portfolio page built with React. Explore my projects
            and feel free to get in touch.
          </p>
        </div>
      </div>
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Mahmoud Ahmed
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
