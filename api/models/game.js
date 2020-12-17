const mongoose = require('mongoose');

// Our schema
const GameSchema = new mongoose.Schema({
  publisher: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 1
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', GameSchema);