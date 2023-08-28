import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import Person from '../assets/Person.jpg';

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState('/');
  let inputRef = useRef(null);

  const generateImg = async () => {
    if (inputRef.current.value === '') {
      return 0;
    }
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-Tpe': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          'User-Agent': 'Chrome',
        },
      }
    );
  };

  return (
    <div className="ai-generator">
      <div className="header">
        ER -<span>AI</span>
      </div>
      <div className="generator-text">
        <span>AI Powered </span>Image Generator
      </div>
      <div className="loading">
        <div className="image">
          <img
            src={imageUrl === '/' ? Person : imageUrl}
            alt="ai generated person"
          />
        </div>
      </div>
      <div className="search">
        <input
          ref={inputRef}
          type="text"
          className="input-search"
          placeholder="Be creative."
        />
        <div className="generate">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
