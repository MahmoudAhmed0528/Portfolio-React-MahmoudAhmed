import React, { useState } from "react";

import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About handleTabChange={handleTabChange} />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Mahmoud Ahmed's Portfolio | {currentTab}</title>
      </Helmet>
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
}

export default App;
