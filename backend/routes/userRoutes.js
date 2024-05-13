const express = require('express');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

// Login user
userRoutes.get('/getAllUsers', userController.getAllUsers);
userRoutes.post('/signup', userController.signupUser);
userRoutes.post('/login', userController.loginUser);
userRoutes.post('/logout', userController.logoutUser);
userRoutes.post('/checkSession', userController.checkSession);
userRoutes.get('/userdata', userController.userData);
userRoutes.post('/enroll', userController.enrollCourse);
userRoutes.post('/completequestion', userController.completeQuestion);
userRoutes.post('/completelesson', userController.completeLesson);

module.exports = userRoutes;