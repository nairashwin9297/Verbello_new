const express = require('express');
const userRouter = require('./userRoutes');
const qnaRouter = require('./qnaRoutes');

const router = express.Router();


router.use('/users', userRouter);


router.use('/qna', qnaRouter);




module.exports = router;

