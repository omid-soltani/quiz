export const answeredQuestionsHandel = (answers) => {
  let answeredQuestions = 0;
  answers.forEach((answer) => {
    if (answer.selectedAnswer !== null) {
      answeredQuestions++;
    }
  });
  return answeredQuestions;
};
export const NotAnsweredQuestionsHandel = (answers) => {
  let notAnsweredQuestions = 0;
  answers.forEach((answer) => {
    if (answer.selectedAnswer === null) {
      notAnsweredQuestions++;
    }
  });
  return notAnsweredQuestions;
};
