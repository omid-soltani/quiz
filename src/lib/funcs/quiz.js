import { questions } from "../../data/quiz";
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

export const countingUnCorrectAnswers = (answers) => {
  let unCorrectAnswer = 0;
  questions.forEach((quest) => {
    const questAnswer = answers.find((answer) => {
      return answer.questionId === quest.id;
    });
    if (
      questAnswer &&
      quest.correctAnswer !== questAnswer.selectedAnswer &&
      questAnswer.selectedAnswer !== null
    ) {
      unCorrectAnswer += 1;
    }
  });
  return unCorrectAnswer;
};
export const countingCorrectAnswers = (answers) => {
  let correctAnswer = 0;
  questions.forEach((quest) => {
    const questAnswer = answers.find((answer) => {
      return answer.questionId === quest.id;
    });
    if (questAnswer && quest.correctAnswer === questAnswer.selectedAnswer) {
      correctAnswer += 1;
    }
  });
  return correctAnswer;
};
export const calculateScore = (answers) => {
  let totalScore = 0;

  questions.forEach((quest) => {
    const questAnswer = answers.find((answer) => {
      return answer.questionId === quest.id;
    });

    if (questAnswer && quest.correctAnswer === questAnswer.selectedAnswer) {
      totalScore += quest.score;
    }
  });

  return totalScore;
};

export const calculateThePerformanceOfQuestions = (score) => {
  switch (true) {
    case score >= 8:
      return {
        title: "نابغه",
        description: "عملکرد فوق‌العاده‌ای داشتی!",
        rank: "رتبه طلایی",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
      };

    case score >= 6:
      return {
        title: "هوش بالا",
        description: "عملکردت بسیار خوب بود!",
        rank: "رتبه نقره‌ای",
        color: "text-sky-400",
        bgColor: "bg-sky-400/10",
      };

    case score >= 4:
      return {
        title: "هوش متوسط",
        description: "عملکرد خوبی داشتی، اما جای پیشرفت هست.",
        rank: "رتبه برنزی",
        color: "text-orange-400",
        bgColor: "bg-orange-400/10",
      };

    default:
      return {
        title: "نیازمند تلاش بیشتر",
        description: "با تمرین بیشتر می‌تونی نتیجه بهتری بگیری!",
        rank: "بدون رتبه",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
      };
  }
};

export const formatDate = (date = new Date()) => {
  const formattedDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

  return `زمان آزمون: ${formattedDate}`;
};
