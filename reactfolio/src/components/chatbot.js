import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControlLabel, Switch } from '@mui/material';
import axios from 'axios';

const Chatbot = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [pirateMode, setPirateMode] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => setQuestion(e.target.value);
    const handlePirateModeChange = (e) => setPirateMode(e.target.checked);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:8000/chatbot?question=${encodeURIComponent(question)}&pirate_mode=${encodeURIComponent(pirateMode)}`);
            setResponse(res.data.answer);
        } catch (error) {
            setResponse('Error fetching response from chatbot.');
        }
        setLoading(false);
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Chat with the Bot
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Ask a Question"
                    variant="outlined"
                    fullWidth
                    value={question}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                />
                <FormControlLabel
                    control={<Switch checked={pirateMode} onChange={handlePirateModeChange} />}
                    label="Pirate Mode"
                />
                <button type="submit" disabled={loading}>Ask</button>
            </form>
            {loading && <p>Loading...</p>}

            {response && (
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    {response}
                </Typography>
            )}
        </Container>
    );
};

export default Chatbot;
