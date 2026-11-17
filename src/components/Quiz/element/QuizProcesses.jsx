import { IoTrendingUp } from "react-icons/io5";
import useQuiz from "../../../context/useQuiz";
import { quizConfig } from "../../../data/quiz";
import { answeredQuestionsHandel } from "../../../lib/funcs/quiz";


function QuizProcesses() {
  const { answers } = useQuiz()


  const answeredQuestions = answeredQuestionsHandel(answers)
  return (
    <div className="w-full bg-surface-container-low/70 backdrop-blur-xl rounded-xl p-space-md shadow-lg flex flex-col gap-space-xs">
      <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
        <span className="flex items-center gap-space-xs text-on-surface">
          <IoTrendingUp className="text-secondary size-4" />
          {answeredQuestions * 10} درصد تکمیل شده ({answeredQuestions} از {quizConfig.totalQuestions} سؤال پاسخ داده شده)
        </span>
        <span className="text-tertiary font-medium"> {quizConfig.totalQuestions - answeredQuestions} سوال باقیمانده </span>
      </div>
      <div className=" h-2.5 rounded-full bg-surface-container-highest/80 overflow-hidden p-0.5 relative" >
        <div style={{ width: `${answeredQuestions * 10}%` }} className="h-full rounded-full bg-gradient-to-l from-secondary via-primary to-primary-container shadow-[0_0_12px_rgba(76,215,246,0.6)] transition-all duration-500 ease-out"></div>
      </div>
    </div>
  )
}

export default QuizProcesses