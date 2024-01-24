import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Social Network API-NoSQL",
      githubLink:
        "https://github.com/MahmoudAhmed0528/Social-Network-API-NoSQL",
      deployedLink: "",
      walkthroughVideo: "https://www.youtube.com/watch?v=OCT335K5VYk",
      backgroundColor: "",
    },
    {
      title: "Order of the Day-Team Project",
      githubLink:
        "https://github.com/Steelerforreel/Order-of-the-day/tree/main",
      deployedLink: "https://order-of-the-day-6ceb800db4ee.herokuapp.com/",
      walkthroughVideo:
        "https://drive.google.com/file/d/1dcULzoaInIgH0c8tbQ9E-YTrWwbBXfUF/view",
    },
    {
      title: "Tech Blog",
      githubLink: "https://github.com/MahmoudAhmed0528/Tech-Blog",
      deployedLink:
        "https://hidden-scrubland-77410-e4c3a6a52eee.herokuapp.com/]",
      walkthroughVideo: "https://www.youtube.com/watch?v=OCT335K5VYk",
    },
    {
      title: "Employee-Tracker",
      githubLink: "https://github.com/MahmoudAhmed0528/Employee-Tracker",
      deployedLink: "",
      walkthroughVideo: "https://www.youtube.com/watch?v=PzMjEP_VmIk",
    },
    {
      title: "E-Commerce Back End",
      githubLink: "https://github.com/MahmoudAhmed0528/E-Commerce-Back-End-db",
      deployedLink: "",
      walkthroughVideo: "https://www.youtube.com/watch?v=vYODt6g6AdM",
    },
    {
      title: "Note Taker Application",
      githubLink: "https://github.com/MahmoudAhmed0528/Note-Taker-Application",
      deployedLink: "https://note-taker0528-0147fa6c91e6.herokuapp.com/",
      walkthroughVideo: "",
    },
    {
      title: "SVG Logo Maker",
      githubLink: "https://github.com/MahmoudAhmed0528/SVG-Logo-Maker",
      deployedLink: "",
      walkthroughVideo: "https://www.youtube.com/watch?v=VU8lJyQX8b4",
    },
    {
      title: "Professional README Generator",
      githubLink:
        "https://github.com/MahmoudAhmed0528/Professional-README-Generator",
      deployedLink: "",
      walkthroughVideo: "",
    },
    {
      title: "Sunset / rise Time Generator - Team Project",
      githubLink: "https://github.com/khmaister/Star-Map-Generator",
      deployedLink: "",
      walkthroughVideo: "",
    },
    {
      title: "Weather-Dashboard",
      githubLink: "https://github.com/MahmoudAhmed0528/Weather-Dashboard",
      deployedLink: "https://mahmoudahmed0528.github.io/Weather-Dashboard/",
      walkthroughVideo: "",
    },
    {
      title: "Work-Day-Scheduler",
      githubLink: "https://github.com/MahmoudAhmed0528/Work-Day-Scheduler",
      deployedLink: "https://mahmoudahmed0528.github.io/Work-Day-Scheduler/",
      walkthroughVideo: "",
    },
    {
      title: "Code Quiz",
      githubLink: "https://github.com/MahmoudAhmed0528/Coding-Quiz",
      deployedLink: "https://mahmoudahmed0528.github.io/Coding-Quiz/",
      walkthroughVideo: "",
    },
    {
      title: "Password Generator",
      githubLink: "https://github.com/MahmoudAhmed0528/Passord-Generator",
      deployedLink: "https://mahmoudahmed0528.github.io/Passord-Generator/",
      walkthroughVideo: "",
    },
    {
      title: "Portfolio using HTML & CSS",
      githubLink: "https://github.com/MahmoudAhmed0528/MahmoudAhmed-Portfolio",
      deployedLink:
        "https://mahmoudahmed0528.github.io/MahmoudAhmed-Portfolio/",
      walkthroughVideo: "",
    },
    {
      title: "CSS Snippet Cheat Sheet",
      githubLink: "https://github.com/MahmoudAhmed0528/CSS-Snippet-Cheat-Sheet",
      deployedLink: "",
      walkthroughVideo: "",
    },
  ];

  return (
    <section className="container mt-5">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;