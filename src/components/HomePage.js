import React from 'react';
import { Link } from 'react-router-dom';
import aiAvatar from '../assets/ai-avatar-2.png';
import immersiveStory from '../assets/immersive-story-3.png';
import casinoCustomization from '../assets/casino-customization.png';
import shareFriends from '../assets/share-friends-1.png';
import vegasSkyline from '../assets/vegas-skyline-10.jpg';
import './Homepage.css'; 

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${vegasSkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <h1 className="fadeInDown" style={{ fontSize: '3rem', textShadow: '2px 2px 5px #000' }}>
          Step into the Future of Gaming
        </h1>
        <p className="fadeInUp" style={{ fontSize: '1.5rem', margin: '20px 0', textShadow: '1px 1px 3px #000' }}>
          Create Stunning Studio-Grade AI Generated Avatars for Vegas Infinite
        </p>
        <Link to="/create-avatar">
          <button className="cta-button">
            Get Started Now
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src={aiAvatar} alt="AI Avatar" className="feature-icon" />
            <h3>AI Avatar Generator</h3>
            <p>Create lifelike characters in seconds.</p>
          </div>
          <div className="feature-card">
            <img src={immersiveStory} alt="Story Mode" className="feature-icon" />
            <h3>Immersive Storylines</h3>
            <p>Dive into dynamic, AI-driven narratives.</p>
          </div>
          <div className="feature-card">
            <img src={casinoCustomization} alt="Customization" className="feature-icon" />
            <h3>Vegas-Themed Customization</h3>
            <p>Choose from casino-inspired styles.</p>
          </div>
          <div className="feature-card">
            <img src={shareFriends} alt="Sharing" className="feature-icon" />
            <h3>Easy Sharing</h3>
            <p>Show off your avatars in the community.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
          Join 1,000+ Gamers Personalizing Their Vegas Infinite Experience
        </h2>
        <Link to="/create-avatar">
          <button className="cta-button-secondary">
            Create Your Avatar Today
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 AI Avatar Studio. All rights reserved.</p>
        <p>
          <Link to="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>
            Terms & Conditions
          </Link>{' '}
          |{' '}
          <Link to="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Homepage;

