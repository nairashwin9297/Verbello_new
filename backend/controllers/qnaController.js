const qnaService = require('../services/qnaServices');
require("dotenv").config()
const OpenAI = require('openai');



const openai = new OpenAI({
  apiKey:"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"
});

// const OpenAI = require('openai');

// const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function generate(req, res)  {
  console.log("INSIDE Function")
  // console.log(openai,"AIIII")
  // const prompt = req.body.prompt; // Get prompt from request
  console.log

  try {
    const response = await openai.images.generate({prompt: "A cute baby sea otter",n:1,size:"1024x1024",response_format: 'url',});

    console.log(response,'RESS');
    // const response = await openai.createImage({
    //   prompt: prompt,
    //   n: 1, // Number of images to generate
    //   size: '1024x1024', // Image size
    // });

    // res.json({ data: response.data[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Image generation failed' });
  }
};

async function check(req, res) {
  // const { email, password } = req.body;
  console.log('GOLI')
  res.json({ message: 'Insidee'});


  // try {
  //   if (!email || !password) {
  //     return res.status(400).json({ message: 'Email and password are required' });
  //   }

  //   const user = await userService.authenticateUser(email, password);

  //   res.json({ message: 'Login successful', user });
  // } catch (error) {
  //   console.error(error.message,"IIIII");
  //   res.status(401).json({ message: error.message });
  // }
}

async function fetchQuestion(req, res) {
  const { language,lesson } = req.query;
  console.log(language,lesson,'CRED')
  try {
    const quizData = await qnaService.getQuizData(language,lesson)
    res.json({status:200, data:quizData });
  } catch (error) {
    console.error(error.message,"IIIII");
    res.status(401).json({ message: error.message });
  }
}

async function fetchLesson(req, res) {
  const { language,lesson } = req.query;
  console.log(language,lesson,'CRED')
  try {
    const lessonData = await qnaService.getLessonData(language,lesson)
    res.json({status:200, data:lessonData });
  } catch (error) {
    console.error(error.message,"IIIII");
    res.status(401).json({ message: error.message });
  }
}

module.exports = {
  check,fetchQuestion, fetchLesson,generate
};
