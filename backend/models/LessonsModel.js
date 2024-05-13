const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonsSchema = new Schema(
  {
    lesson: String,
    imageUrl: String,
    text: String,
    englishTranslation: String,
    description: String
  },
  {
    timestamps: true,
  }
);

const LessonSpanish = mongoose.model("SpanishLesson", lessonsSchema,"SpanishLesson");
const LessonFrench = mongoose.model("FrenchLesson", lessonsSchema,"FrenchLesson");
const LessonGerman = mongoose.model("GermanLesson", lessonsSchema,"GermanLesson");
const LessonItalian = mongoose.model("ItalianLesson", lessonsSchema,"ItalianLesson");
const LessonPortuguese = mongoose.model("PortugueseLesson", lessonsSchema,"PortugueseLesson");


module.exports = {LessonSpanish, LessonFrench, LessonGerman, LessonItalian, LessonPortuguese};
