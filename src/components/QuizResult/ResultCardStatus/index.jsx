
import useQuiz from "../../../context/useQuiz.js"
import { calculateThePerformanceOfQuestions, countingCorrectAnswers } from "../../../lib/funcs/quiz.js"
import ResultCardFooter from "./ResultCardFooter.jsx"
import ResultCardHeader from "./ResultCardHeader"
import ResultCardMain from "./ResultCardMain"
function ResultCardStatus() {

  const { answers } = useQuiz()
  const correctAnswers = countingCorrectAnswers(answers)
  const statusOfAnswers = calculateThePerformanceOfQuestions(correctAnswers)
  return (
    <div className="lg:col-span-12 rounded-xl bg-surface-container-high/60 backdrop-blur-2xl p-space-lg shadow-xl relative overflow-hidden flex flex-col justify-between">
      <div className={`absolute -right-20 -bottom-20 w-80 h-80  rounded-full blur-[90px] pointer-events-none ${statusOfAnswers.bgColor}`}>
      </div>
      <div className={`absolute -left-12 -top-12 w-64 h-64 rounded-full blur-[80px] pointer-events-none ${statusOfAnswers.bgColor}`}>
      </div>

      <ResultCardHeader statusOfAnswers={statusOfAnswers} />

      {/* Middle Content: Radial Gauge + Huge Score */}

      <ResultCardMain statusOfAnswers={statusOfAnswers} correctAnswers={correctAnswers} />

      {/* Bottom Card Insights Strip */}
      <ResultCardFooter statusOfAnswers={statusOfAnswers} />



    </div>
  )
}

export default ResultCardStatus