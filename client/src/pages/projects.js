import React from "react";
import ProjectCard from "./../components/projectCard"; // Import the component
import "../styles/style.css"; // Add styles for the section

const ProjectsSection = () => {
  const projects = [
    {
      title: "Beginner Guitar Program",
      overview: "Weekly 1-on-1 sessions of 1 hour each Flexible scheduling to accommodate busy lifestyles Exclusive access to premium online resources, including pdfs",
      seeMore: "#",
      Enroll: "#",
    },
    {
      title: "Beginner Guitar Program",
      overview: "Weekly 1-on-1 sessions of 1 hour each Flexible scheduling to accommodate busy lifestyles Exclusive access to premium online resources, including pdfs",
      seeMore: "#",
      Enroll: "#",
    },
    {
      title: "Beginner Guitar Program",
      overview: "Weekly 1-on-1 sessions of 1 hour each Flexible scheduling to accommodate busy lifestyles Exclusive access to premium online resources, including pdfs",
      seeMore: "#",
      Enroll: "#",
    },
    {
      title: "Beginner Guitar Program",
      overview: "Weekly 1-on-1 sessions of 1 hour each Flexible scheduling to accommodate busy lifestyles Exclusive access to premium online resources, including pdfs",
      seeMore: "#",
      Enroll: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>Choose From Our Online Guitar Courses</h1>
      <div className="header-line"></div>
      <p className="contact-subheader">
        Here, you will find some courses.
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            overview={project.overview}
            seeMore={project.seeMore}
            Enroll={project.Enroll}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;