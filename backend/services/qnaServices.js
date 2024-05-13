const bcrypt = require("bcrypt");
const { French, Spanish, German } = require("../models/QnA");
const { LessonSpanish, LessonFrench} = require("../models/LessonsModel");



async function getQuizData(language,lesson) {
    if(language==="Spanish"){
        return Spanish.find({ lesson:lesson }).lean();;
    }
    else if(language==="French"){
        return French.find({ lesson:lesson });
    }
    else{
        throw new Error('Language not found');
    }
  }

  async function getLessonData(language,lesson) {
    console.log('getLessonData called with params: ', language);
    if(language==="Spanish"){
        return LessonSpanish.find({ lesson:lesson }).lean();
    }
    else if(language==="French"){
        return LessonFrench.find({ lesson:lesson });
    }
    else{
        throw new Error('Language not found');
    }
  }



module.exports = {
    
    getQuizData,
    getLessonData
};
