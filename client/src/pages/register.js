import React, { useState } from 'react';
import '../styles/register.css';
import { v4 as uuidv4 } from 'uuid';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: uuidv4(),
      name: form.username,
      email: form.email,
      password: form.password,
      phoneNumber: form.phone,
      createdDate: new Date().toISOString()
    };

    try {
      const response = await fetch('https://localhost:44383/api/User/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log('Registration Response:', data);
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
