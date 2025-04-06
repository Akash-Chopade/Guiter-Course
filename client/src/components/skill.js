import React from 'react';
import '../styles/style.css';

function Skill({ heading, content }) {  
  return (
    <div className="skill-block">
      {heading && <h2 className="skill-heading">{heading}</h2>}
      {content && <p className="skill-content">{content}</p>}
    </div>
  );
}

export default Skill;