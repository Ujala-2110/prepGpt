import React, { useState } from 'react';
import TextToSpeech from 'react-text-to-speech';
import './questionAnswering.css';

function QuestionAnswering() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [fetching, setFetching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setFetching(true); // Set fetching to true when the request is initiated
      const response = await fetch('http://localhost:5000/api/quesans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: question })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAnswer(data.data);
      // speakAnswer(data.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setFetching(false); // Set fetching to false whether the request succeeds or fails
    }
  };

  // const speakAnswer = (text) => {
  //   const synth = window.speechSynthesis;
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   synth.speak(utterance);
  // };

  return (
    <div className="home">
    <div className='container'>
      <h1>prepGpt</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tell me what do you want to revise"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      {fetching && (
        <div>
          <p>Fetching the answer...</p>
        </div>
      )}
      {answer && !fetching && (
        <div>
          <h2>Answer:</h2>
          <p>{answer}</p>
          {/* Add TextToSpeech component */}
          <TextToSpeech
              text={answer}
              voice={{
                lang: 'en-US',
                name: 'Google US English',
                rate: 1.5,
                pitch: 1,
                volume: 1,
              }}
          />
        </div>
      )}
    </div>
    </div>
  );
}

export default QuestionAnswering;
