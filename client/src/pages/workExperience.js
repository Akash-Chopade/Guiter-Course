import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import solera from '../assets/images/solera.png';
import '../styles/workExperience.css';

const experiences = [
  {
    company: 'Solera',
    role: 'Software Engineer II',
    duration: 'Dec 2024 – Present',
    location: 'Bangalore, India',
    responsibilities: [
        "Led SQL migration project, managing connection strings, service accounts, and ensuring Hangfire job execution.",
        "Worked on Jenkins pipeline to fetch the latest build branch, resolving SCM team challenges.",
        "Resolved multiple CI/CD pipeline failures, ensuring smooth automated deployments.",
        "Modified deployment scripts, including URL changes and debugging various deployment errors."
    ],
  },
  {
    company: 'Solera',
    role: 'Associate Software Engineer I',
    duration: 'Sept 2022 – Dec 2024',
    location: 'Bangalore, India',
    responsibilities: [
        'Worked with .NET Core, ExtJS, React, SQL Server, and CI/CD pipelines.',
        'Developed multiple UI components for ClaimsPortal application including PopUp, Dropdown, Checkbox, and Radio in react.', 
        'Implemented SonarQube integration to improve code quality and maintainability.',
        'Managed release processes, from creating checklists to raising CAB, and led deployments.'
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experince" className="workexperience-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading">Work Experience</h1>
        <div className="header-line"></div>
        <VerticalTimeline layout="1-column" className="vertical-timeline">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#1d3557',
                color: '#fff',
                borderRadius: '10px',
              }}
              contentArrowStyle={{ borderRight: '7px solid #1d3557' }}
              date={exp.duration}
              iconStyle={{
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              icon={<img src={solera} alt="work" className="solera-icon" />}
              position={index % 2 === 0 ? 'left' : 'right'} // Alternate position
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="role">
                  {exp.role} <span className="company">@ {exp.company}</span>
                </h3>
                <p className="location">{exp.location}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
