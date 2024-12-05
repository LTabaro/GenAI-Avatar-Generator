import React, { useState } from 'react';
import './StoryMode.css'; 

const StoryGenerator = () => {
  const [selectedStoryline, setSelectedStoryline] = useState('');
  const [customStoryline, setCustomStoryline] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const suggestedStorylines = [
    'Exploring a virtual casino city',
    'Casino Heist',
    'The High-Stakes Poker Game',
    'Uncovering the Secret Casino Club',
    'Escape the Enchanted Casino Maze',
  ];

  const generateStory = async () => {
    setLoading(true);
    setError('');
    setStory('');
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storyline: customStoryline || selectedStoryline,
        }),
      });
      const data = await response.json();
      if (data.story) {
        setStory(data.story);
      } else {
        throw new Error('Failed to generate story.');
      }
    } catch (error) {
      setError('Error generating story. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const narrateStory = () => {
    if (story) {
      const speech = new SpeechSynthesisUtterance(story);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="story-mode-container">
      <h1 className="title">Story Mode</h1>
      <p className="subtitle">Generate immersive quest stories for Vegas Infinite!</p>

      <div className="story-options">
        <h2>Suggested Storylines</h2>
        <div className="storyline-buttons">
          {suggestedStorylines.map((line) => (
            <button
              key={line}
              className={`storyline-button ${
                selectedStoryline === line ? 'selected' : ''
              }`}
              onClick={() => {
                setSelectedStoryline(line);
                setCustomStoryline('');
              }}
            >
              {line}
            </button>
          ))}
        </div>
        <h3>Or Create Your Own</h3>
        <input
          type="text"
          placeholder="Write your own story idea"
          value={customStoryline}
          onChange={(e) => {
            setCustomStoryline(e.target.value);
            setSelectedStoryline('');
          }}
          className="custom-input"
        />
        <button
          className="generate-button"
          onClick={generateStory}
          disabled={loading || (!selectedStoryline && !customStoryline)}
        >
          {loading ? 'Generating...' : 'Generate Story'}
        </button>
      </div>

      {story && (
        <div className="story-output">
          <h2>Your Generated Story</h2>
          <p>{story}</p>
          <button className="narrate-button" onClick={narrateStory}>
            Narrate Story
          </button>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default StoryGenerator;


