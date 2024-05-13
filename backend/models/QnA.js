const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const qnaSchema = new Schema(
  { lesson:String,
    question: String,
    options: [
      { type: String, isAnswer: Boolean },
      { type: String, isAnswer: Boolean },
      { type: String, isAnswer: Boolean },
      { type: String, isAnswer: Boolean },
    ],
  },
  {
    timestamps: true,
  }
);

const French = mongoose.model("FrenchQuiz", qnaSchema,"FrenchQuiz");
const Spanish = mongoose.model("SpanishQuiz", qnaSchema,"SpanishQuiz");
const German = mongoose.model("GermanQuiz", qnaSchema,"GermanQuiz");

module.exports = {French,Spanish,German};
