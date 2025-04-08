// src/components/Chatbot.js

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            // Make a GET request to Django backend
            const response = await axios.get('http://localhost:8000/chatbot?question=' + encodeURIComponent(question));

            setAnswer(response.data.answer); // Set the response from Django
        } catch (error) {
            setError('Error fetching response from chatbot.'); // Handle errors
        }
        setLoading(false);
    };

    return (
        <div>
            <h1>Chat with Our Bot</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="question">Ask a Question:</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={handleInputChange}
                        placeholder="Type your question here"
                    />
                </div>
                <button type="submit" disabled={loading}>Ask</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {answer && <div><h2>Answer:</h2><p>{answer}</p></div>}
        </div>
    );
};

export default Chatbot;
