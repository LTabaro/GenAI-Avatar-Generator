import React, { useState } from 'react';
import './Prompts.css'; 


import vikingImage from '../assets/viking.png';
import hobbitImage from '../assets/Hobbit.png';
import elfImage from '../assets/Elf.png';
import jediImage from '../assets/Jedi.png';
import astronautImage from '../assets/Astronaut.png';
import ninjaImage from '../assets/Ninja.png';
import samuraiImage from '../assets/Samurai.png';
import superheroImage from '../assets/Hero.png';
import knightImage from '../assets/knight.png';

const Prompts = () => {
  const [customPrompts, setCustomPrompts] = useState([]);
  const [newPromptTitle, setNewPromptTitle] = useState('');
  const [newPromptText, setNewPromptText] = useState('');

  const defaultPrompts = [
    {
      id: 1,
      title: 'Viking',
      text: 'game avatar of a viking, ultra realistic, concept art, intricate details, powerful and fierce, highly detailed, photorealistic, octane render, 8 k, unreal engine. art by artgerm and greg rutkowski and charlie bowater and magali villeneuve and alphonse mucha, golden hour, horns and braids in hair, fur-lined cape and helmet, axe in hand.',
      image: vikingImage,
    },
    {
      id: 2,
      title: 'Hobbit',
      text: 'game avatar of a Hobbit, small, big brown eyes, green and brown clothing, detailed facial features, small feet, wispy hair, fantasy concept art, artstation trending, highly detailed, art by John Howe, Alan Lee, and Weta Workshop, earthy colors.',
      image: hobbitImage,
    },
    {
      id: 3,
      title: 'Elf',
      text: 'game avatar of an elf with long blond hair, fantasy concept art, intricate details, majestic background, art by wlop, Greg Rutkowski, smooth lighting.',
      image: elfImage,
    },
    {
      id: 4,
      title: 'Jedi',
      text: 'game avatar of a jedi with a lightsaber, highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, rossdraws.',
      image: jediImage,
    },
    {
      id: 5,
      title: 'Astronaut',
      text: 'game avatar of an astronaut, futuristic, highly detailed, ultra realistic, concept art, intricate textures, interstellar background, space travel, art by alphonse mucha, ryan kittleson, greg rutkowski, leesha hannigan, stephan martiniere, stanley artgerm lau.',
      image: astronautImage,
    },
    {
      id: 6,
      title: 'Ninja',
      text: 'game avatar of a ninja, wearing a black hood and suit, stealthy movements, dark night background, shadows and mist, detailed and realistic, art by kazuya yamashita, yuya kanzaki, yang zhizhuo, photorealism, 8k resolution.',
      image: ninjaImage,
    },
    {
      id: 7,
      title: 'Samurai',
      text: 'game avatar of a samurai warrior, war-torn landscape in the background, wearing a black and red armor, ready to fight, detailed textures, concept art, noir art, art by hinata matsumura, alphonse mucha, mike mignola, kazu kibuishi, and rev.matsuoka,, ultra-realistic.',
      image: samuraiImage,
    },
    {
      id: 8,
      title: 'Superhero',
      text: 'game avatar of a superhero, dynamic lighting, intense colors, detailed costume, artstation trending, art by alphonse mucha, greg rutkowski, ross tran, leesha hannigan, ignacio fernandez rios, kai carpenter, noir photorealism, film.',
      image: superheroImage,
    },
    {
      id: 9,
      title: 'Knight',
      text: 'game avatar of a knight wearing a full suit of armor, intricate details, majestic and powerful, bright shining silver armor, matching blue cape, a golden crown, artstation trending, highly detailed, art by wlop, greg rutkowski, and charlie bowater.',
      image: knightImage,
    },
  ];

  const handleAddPrompt = () => {
    if (newPromptTitle && newPromptText) {
      const newPrompt = {
        id: Date.now(),
        title: newPromptTitle,
        text: newPromptText,
        image: null, // Custom prompts start without images
      };
      setCustomPrompts([...customPrompts, newPrompt]);
      setNewPromptTitle('');
      setNewPromptText('');
    }
  };

  return (
    <div className="prompts-container">
      <h1 className="page-title">AI Prompts Inspiration</h1>
      <p className="page-description">
        Our free AI prompt covers a wide range of themes and topics to help you create a unique avatar.
      </p>

      {/* Prompt List */}
      <div className="prompt-list">
        {[...defaultPrompts, ...customPrompts].map((prompt) => (
          <div key={prompt.id} className="prompt-card">
            <div className="prompt-placeholder">
              {prompt.image ? (
                <img src={prompt.image} alt={prompt.title} className="prompt-image" />
              ) : (
                <div className="placeholder-image">+</div>
              )}
            </div>
            <div className="prompt-details">
              <h3 className="prompt-title">{prompt.title}</h3>
              <p className="prompt-text">{prompt.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Your Own Prompt */}
      <div className="add-prompt-section">
        <h2>Add Your Own Prompt</h2>
        <input
          type="text"
          placeholder="Prompt Title"
          value={newPromptTitle}
          onChange={(e) => setNewPromptTitle(e.target.value)}
          className="input-title"
        />
        <textarea
          placeholder="Prompt Details"
          value={newPromptText}
          onChange={(e) => setNewPromptText(e.target.value)}
          className="input-text"
        ></textarea>
        <button onClick={handleAddPrompt} className="add-button">
          Add Prompt
        </button>
      </div>
    </div>
  );
};

export default Prompts;

