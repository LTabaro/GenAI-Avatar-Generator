import React, { useState } from 'react';
import casinoDealer from '../assets/casino-dealer.png';
import futuristicGambler from '../assets/futuristic-gambler.png';
import aiAvatar from '../assets/ai-avatar.png';
import avatar from '../assets/ai-avatar.png';
import hulk from '../assets/hulk.png';
import flash from '../assets/flash.png';
import thor from '../assets/thor.png';
import batman from '../assets/batman.png';
import spiderman from '../assets/spiderman.png';
import './AvatarGenerator.css';

const AvatarGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [savedAvatars, setSavedAvatars] = useState([]);

  const centerAvatars = [
    { id: 1, url: casinoDealer, name: 'Casino Dealer' },
    { id: 2, url: futuristicGambler, name: 'Vegas Magician' },
    { id: 3, url: aiAvatar, name: 'AI Avatar' },
  ];

  const floatingIcons = [
    { id: 1, url: avatar, name: 'Avatar' },
    { id: 2, url: hulk, name: 'Hulk' },
    { id: 3, url: flash, name: 'The Flash' },
    { id: 4, url: thor, name: 'Thor' },
    { id: 5, url: batman, name: 'Batman' },
    { id: 6, url: spiderman, name: 'Spiderman' },
  ];

  const generateAvatar = async () => {
    setLoading(true);
    setError('');
    setImageUrl('');
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-avatar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (data.data && data.data[0]?.url) {
        setImageUrl(data.data[0].url);
      } else {
        throw new Error('Failed to generate avatar.');
      }
    } catch (error) {
      setError('Error generating avatar. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveAvatar = () => {
    if (imageUrl) {
      const newAvatar = { id: Date.now(), url: imageUrl, name: prompt || 'Unnamed Avatar' };
      const updatedAvatars = [...savedAvatars, newAvatar];
      setSavedAvatars(updatedAvatars);

      // Save to local storage for persistence
      localStorage.setItem('myAvatars', JSON.stringify(updatedAvatars));
    }
  };

  return (
    <div className="avatar-generator-container">
      <div className="dynamic-background"></div>
      <div className="main-content">
        {/* Floating Characters */}
        <div className="floating-icons left">
          {floatingIcons.slice(0, 3).map((icon) => (
            <img key={icon.id} src={icon.url} alt={icon.name} className="floating-icon" />
          ))}
        </div>

        <div className="center-avatars">
          {centerAvatars.map((avatar) => (
            <div key={avatar.id} className="center-avatar-card">
              <img src={avatar.url} alt={avatar.name} />
              <p>{avatar.name}</p>
            </div>
          ))}
        </div>

        {/* Avatar Generator Section */}
        <div className="generator-section">
          <h1>Create Your Own Avatar</h1>
          <p>Craft stunning AI-generated avatars with a click of a button.</p>
          <input
            type="text"
            className="prompt-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your avatar (e.g., 'Iron Man in a futuristic casino')"
          />
          <button onClick={generateAvatar} disabled={loading} className="generate-button">
            {loading ? 'Generating...' : 'Generate Avatar'}
          </button>
          {imageUrl && (
            <div className="generated-avatar">
              <h3>Generated Avatar</h3>
              <img src={imageUrl} alt="Generated Avatar" />
              <div className="action-buttons">
                <button onClick={saveAvatar} className="save-button">
                  Save Avatar
                </button>
                <button
                  onClick={() => window.open(imageUrl, '_blank')}
                  className="download-button"
                >
                  Download Avatar
                </button>
              </div>
            </div>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>

        {/* Floating Characters */}
        <div className="floating-icons right">
          {floatingIcons.slice(3, 6).map((icon) => (
            <img key={icon.id} src={icon.url} alt={icon.name} className="floating-icon" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarGenerator;

