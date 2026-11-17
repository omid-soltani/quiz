import clsx from "clsx";
import useQuiz from "../../../../context/useQuiz";
function QuizPageBox({ quiz, index }) {

  const { currentQuestion, isQuestionAnswered, changeQuestion } = useQuiz()
  const isNowQuestion = currentQuestion.id === quiz.id

  const questType = isQuestionAnswered(quiz)

  return (
    <button onClick={() => {
      changeQuestion(index)
    }} className={clsx(
      "btn-page-quest-notActive",
      {
        "btn-page-quest-active": questType,
        "quest-pag-now-btn": isNowQuestion,
      }
    )}
      type="button" >
      <span>{quiz.id}</span>
      <span className={`${isNowQuestion && "animate-pulse"} ${questType && !isNowQuestion ? "bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.9)]" : "bg-surface-variant"} w-1.5 h-1.5 rounded-full   mt-0.5`}></span>
    </button>
  )
}

export default QuizPageBox