import React from 'react';
import GitHub from '../assets/icons/github-icon.png';
import LinkedIn from '../assets/icons/linkedin-icon.png';
import '../styles/style.css'

function Footer() {
  return (
    <footer className='main-footer'>
        <div className='sub-footer1'>
            <div className='footer-row1'>
                <h2 className='footer-heading1'>Guiter Kaksha</h2>
                <h5 className='footer-subheader1'>“All it takes is passion, practice, and a good teacher. We got you!”</h5>
            </div>
            <div className='footer-row2'>
                <h3 className='footer-heading2'>Social</h3>
                <div className='footer-subheader2'>
                <ul className="social-links">
                    <li>
                        <a href="https://github.com/Akash-Chopade" target="_blank" rel="noopener noreferrer">
                            <img src='#' alt="Instagram" />
                        </a>
                    </li>   
                    <li>
                        <a href="https://www.linkedin.com/in/akash-chopade-b130221b1/" target="_blank" rel="noopener noreferrer">
                            <img src='#' alt="YouTube" />
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='sub-footer2'/>
        <div className='sub-footer3'>
            <h5>&copy; 2024 Guiter Kaksha. All Rights Reserved.</h5>
        </div>
    </footer>
  );
}

export default Footer;