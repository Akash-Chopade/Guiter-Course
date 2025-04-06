import React from 'react';
import '../styles/style.css';

const Button = ({ label, onClick }) => {
  return (
    <button className="button-block" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
