
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";
import useQuiz from "../../../context/useQuiz";
import { quizConfig } from "../../../data/quiz";
import Button from "../../common/Button";

function QuizFooter() {
  const { nextQuestion, prevQuestion, currentQuestion } = useQuiz()
  console.log(currentQuestion.id)
  return (
    <div className="w-full bg-surface-container-low/80 backdrop-blur-2xl rounded-xl p-space-md shadow-2xl flex flex-col sm:flex-row items-center justify-evenly gap-space-md">
      {currentQuestion.id !== 1 && <Button text="سوال قبلی" Icon={IoMdArrowRoundForward} type="" textPosition="left" onclick={prevQuestion} />}
      {currentQuestion.id < quizConfig.totalQuestions && <Button text="سوال بعدی" Icon={IoMdArrowRoundBack} textPosition="right" onclick={nextQuestion} />}
      <Link to={"/result"} className="bg-black size-10" />
    </div>


  )
}

export default QuizFooter