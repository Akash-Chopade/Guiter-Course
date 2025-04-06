import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/register.js';
import './styles/style.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <h1>Guiter Kaksha</h1>
      <p>Learn to play the guitar from scratch with easy-to-follow video lessons, practice exercises, and expert guidance — perfect for beginners who want to see real progress.</p>
      {/* <a href='https://drive.google.com/file/d/1zSgp2A9TU3cDpQk2h8C9BjpA78XIF_W6/view?usp=sharing' target="_blank" rel="noreferrer"><Button label="Resume"/></a> */}
    </section>
  );
}

function SectionWithAnimation({ id, children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current; // Store reference in a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <SectionWithAnimation id="about">
              <About />
            </SectionWithAnimation>
            <SectionWithAnimation id="projects">
              <Projects />
            </SectionWithAnimation>
            <SectionWithAnimation id="contact">
              <Contact />
            </SectionWithAnimation>
          </main>
        } />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;