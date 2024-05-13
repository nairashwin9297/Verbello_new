const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  language: String,
  currentQuestion: { type: Number, default: 0 },
  lessonsCompleted:{ type: Number, default: 0 }

}, {
    timestamps: true,
  });

const userSchema = new Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  courses: [courseSchema], // Embedding the Course schema directly
  isActive: {
    type: Boolean,
    default: true, // Set the default value to true
  },
  role: {
    type: String,
    default: "user", // Set the default value to true
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
