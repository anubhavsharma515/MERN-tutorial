const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // Only 1 field 
  username: {
    // These are validations
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  // Include timestamps, creates fields for when this was created/modified
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
