import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/1.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeOption, setActiveOption] = useState('home');
  const navigate = useNavigate();

  const options = [
    { value: 'home', label: 'Home' },
    { value: 'features', label: 'Features' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'testimonials', label: 'Testimonials' },
    { value: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="panel">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {options.map((opt) => (
          <div className="option" key={opt.value}>
            <input
              type="radio"
              name="nav"
              className="input"
              value={opt.value}
              checked={activeOption === opt.value}
              onChange={() => setActiveOption(opt.value)}
            />
            <div className="btn">
              <span className="span">{opt.label}</span>
            </div>
          </div>
        ))}

        <div className="option">
          <button className="get-started" onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
