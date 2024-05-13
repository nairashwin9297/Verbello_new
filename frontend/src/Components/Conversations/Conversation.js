import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import speakgif from '../../assets/gifs/speak.gif';
import GifPlayer from 'react-gif-player';

const Conversation = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [gifIsPlaying, setGifIsPlaying] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.onstart = () => {
      setIsSpeaking(true);
      setAudioStarted(true);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setAudioStarted(false);
    };
    window.speechSynthesis.speak(utterance);
  };

  const toggleGif = () => {
    if (audioStarted) {
      setGifIsPlaying(!gifIsPlaying);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-group">
            <label htmlFor="languageSelect">Select Language:</label>
            <select
              className="form-control"
              id="languageSelect"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en-US">English (US)</option>
              <option value="fr-FR">French</option>
              <option value="es-ES">Spanish</option>
              <option value="de-DE">German</option>
              <option value="it-IT">Italian</option>
              <option value="pt-PT">Portuguese</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="textInput">Enter Text:</label>
            <input
              type="text"
              className="form-control"
              id="textInput"
              value={text}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary" onClick={speak}>
            Speak
          </button>
        </div>
      </div>

      <div className="mt-3" onClick={toggleGif}>
        <GifPlayer gif={speakgif} playing={gifIsPlaying} />
      </div>
    </div>
  );
};

export default Conversation;
