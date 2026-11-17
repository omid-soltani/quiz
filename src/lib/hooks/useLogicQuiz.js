import { useState } from "react";
import { initialAnswers, questions } from "../../data/quiz";

const useLogicQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([...initialAnswers]);

  const currentQuestion = questions[questionIndex];

  const nextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
  };
  const prevQuestion = () => {
    setQuestionIndex((prev) => prev - 1);
  };

  const changeQuestion = (index) => {
    setQuestionIndex(index);
  };
  const isSelectedAnswer = (answerIndex) => {
    const answer = answers.find(
      (answer) => answer.questionId === currentQuestion.id,
    );

    return answer?.selectedAnswer === answerIndex;
  };

  const isQuestionAnswered = (question) => {
    const questionType = answers.find(
      (answer) => answer.questionId === question.id,
    );

    return questionType.selectedAnswer !== null;
  };

  const selectAnswer = (answerIndex) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((question) =>
        question.questionId === currentQuestion.id
          ? { ...question, selectedAnswer: answerIndex }
          : question,
      ),
    );
  };

  return {
    isQuestionAnswered,
    questionIndex,
    setQuestionIndex,
    answers,
    setAnswers,
    currentQuestion,
    nextQuestion,
    prevQuestion,
    changeQuestion,
    selectAnswer,
    isSelectedAnswer,
  };
};

export default useLogicQuiz;
