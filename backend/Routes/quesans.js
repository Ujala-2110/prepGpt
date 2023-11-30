const express = require('express');
const router = express.Router();
const { Configuration } = require("openai");
const {OpenAI} = require("openai");
require('dotenv').config();


// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const apiKey = process.env.YOUR_OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

router.post('/quesans', async (req, res) => {
  try {
    const { prompt } = req.body;
    // console.log(prompt);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": `Answer this question ${prompt}`}],
      max_tokens: 150,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });

    // console.log(response.choices[0].message['content']);
    return res.status(200).json({
      success: true,
      data: response.choices[0].message['content'],
    });

  } catch (error) {
    console.error('Error:', error);

    // Handle the error properly and send an error response
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

module.exports = router;



