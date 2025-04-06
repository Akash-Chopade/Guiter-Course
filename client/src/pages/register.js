import React, { useState } from 'react';
import '../styles/register.css';

function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // TODO: Send data to backend
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
