import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <>
      <div className="main-content">
        <header className="header">
          <h1>Welcome to Agri Mitra</h1>
          <p>Revolutionizing Agriculture, One Step at a Time!</p>
        </header>

        <section className="section">
          <h2>🌟 Our Vision</h2>
          <p>
            Agri Mitra’s vision is to become the largest agricultural fair-trade platform, connecting farmers to industries around the globe.
          </p>
        </section>

        <section className="section">
          <h2>🎯 Our Mission</h2>
          <p>
            Agri Mitra’s mission is to become THE global reference for DIGITAL agricultural food crop transactions through a complete PLATFORM solution.
          </p>
        </section>

        <section className="section">
          <h2>🔍 Our Focus & Experience</h2>
          <p>
            Agri Mitra is a team of experts leveraging knowledge in Farming, Industry Procurement, Digital Business, and Disruptive Innovation. We aim to redistribute value throughout the agriculture supply chain by being agile, reliable, and transparent.
          </p>
        </section>

      
      </div>
    </>
  );
};

export default AboutUs;