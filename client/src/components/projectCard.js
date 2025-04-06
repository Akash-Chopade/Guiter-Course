import React from "react";
import "../styles/style.css"; // Add styles here

const ProjectCard = ({ title, overview, seeMore, Enroll }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h2>{title}</h2>
        <p className="project-overview">{overview}</p>
      </div>
      <div className="project-footer">
        {seeMore && (
          <a href={seeMore} target="_blank" rel="noopener noreferrer">
            See More
          </a>
        )}
        {Enroll && (
          <a href='/register' className="project-skills" rel="noopener noreferrer">
            Enroll Now
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
