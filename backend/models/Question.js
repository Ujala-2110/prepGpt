const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
