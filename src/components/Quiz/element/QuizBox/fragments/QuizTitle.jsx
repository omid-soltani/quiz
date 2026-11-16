import useQuiz from "../../../../../context/useQuiz";

function QuizTitle() {
  const { currentQuestion } = useQuiz()
  return (
    <div className="relative z-10">
      <p className="font-headline-md text-headline-md text-on-surface font-extrabold leading-relaxed md:leading-loose">
        {currentQuestion.question}
      </p>
    </div>
  )
}

export default QuizTitle