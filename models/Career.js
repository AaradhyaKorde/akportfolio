const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  coverLetter: {
    type: String,
    required: true,
    trim: true
  },
  resume: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Career || mongoose.model('Career', careerSchema);
