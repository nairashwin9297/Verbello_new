const express = require('express');
const qnaController = require('../controllers/qnaController');
const isAuthenticated = require('../middleware/authenticateUser')

const qnarouter = express.Router();

// Login user
qnarouter.post('/check',isAuthenticated, qnaController.check);
qnarouter.get('/quizdata', qnaController.fetchQuestion);
qnarouter.get('/lessondata',qnaController.fetchLesson);
qnarouter.post('/generate-image',qnaController.generate);

module.exports = qnarouter;