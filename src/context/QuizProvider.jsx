import useQuizLogic from "../lib/hooks/useLogicQuiz";
import QuizContext from "./QuizContext";

function QuizProvider({ children }) {
  const quiz = useQuizLogic();

  return (
    <QuizContext value={quiz}>
      {children}
    </QuizContext>
  );
}

export default QuizProvider;