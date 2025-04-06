import React from 'react';
import '../styles/style.css';
import Skill from '../components/skill';

function About() {
  return (
    <section id="about" className="about-section">
      <h1>About Us</h1>
      <div className='header-line'></div>
      <p className='about-subheader'>we believe that music has the power to bring joy and creativity into everyone’s life. Founded by a team of passionate musicians and educators, we’re on a mission to make learning the guitar accessible and enjoyable for everyone.With years of teaching experience and a love for music, our team has helped thousands of students across India start their guitar journey.</p>
      <div className='about-block'>
        <Skill heading="Flexible Scheduling" content="You can learn guitar online in the morning, afternoon, or evening—all up to you! Learn guitar online at your own pace. No pressure at all!"/>
        <Skill heading="Interactive Sessions" content="Engaging and interactive online guitar classes that make learning guitar fun"/>
        <Skill heading="Tailored Courses" content="We listen to your needs. Tell us what you want to accomplish and we’ll work with you to achieve this through customized online guitar lessons"/>
        <Skill heading="Curated Song Choices" content="Select your favorite songs to learn, whether you’re into pop, classical, or alternative music."/>
      </div>
    </section>
  );
}

export default About;