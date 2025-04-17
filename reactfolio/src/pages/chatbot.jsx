import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'; // Import for animation
import './styles/chatbot.css';

const Chatbot = ({ pirateMode, onPirateModeChange }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => setQuestion(e.target.value);

  const togglePirateMode = (e) => {
    const isChecked = e.target.checked;
    onPirateModeChange(isChecked); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/chatbot?question=${encodeURIComponent(question)}&pirate_mode=${encodeURIComponent(pirateMode)}`
      );
      setResponse(res.data.answer);
    } catch (error) {
      setResponse(error.response.data.error);
    }
    setLoading(false);
  };

  return (
    <motion.div className="chatbot-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="chatbot-title">Ask me anything! My autobot will tell you all about me.</h2>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          placeholder="Ask a Question"
          value={question}
          onChange={handleInputChange}
          className="chatbot-input"
        />
        <label className="chatbot-switch">
          <input type="checkbox" checked={pirateMode} onChange={togglePirateMode} />
          <span className="chatbot-slider"></span>
          <span className="chatbot-label">Pirate Mode</span>
        </label>
        <button type="submit" disabled={loading} className="chatbot-button">
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>
      {response && <p className="chatbot-response">{response}</p>}
    </motion.div>
  );
};

export default Chatbot;
