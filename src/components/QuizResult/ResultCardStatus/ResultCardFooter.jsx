
import { IoMdTrendingUp } from "react-icons/io";
import useQuiz from "../../../context/useQuiz";
import { answeredQuestionsHandel, calculateScore, countingCorrectAnswers } from "../../../lib/funcs/quiz";
function ResultCardFooter({ statusOfAnswers }) {

  const { answers } = useQuiz()
  const allScores = calculateScore(answers)

  const theRatioOfAnswers = (countingCorrectAnswers(answers) / answeredQuestionsHandel(answers)) * 100

  return (
    <div className="mt-space-md pt-space-md bg-surface-container-lowest/50 rounded-lg p-space-sm flex items-center justify-between flex-wrap gap-space-sm z-10">

      <div className="flex items-center gap-space-xs">
        <IoMdTrendingUp className={`${statusOfAnswers.color}`} />

        <span className="font-body-sm text-body-sm text-on-surface">
          امتیاز کل ازمون :
          <span className={`${statusOfAnswers.color} font-bold`}>
            {allScores.toLocaleString("fa-ir")}
          </span>
        </span>
      </div>

      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">

        <span>
          دقت پاسخ‌گویی:
        </span>

        <span className="font-bold text-on-surface">
          {theRatioOfAnswers ? theRatioOfAnswers.toLocaleString("fa-ir", {
            maximumFractionDigits: 1,
            minimumFractionDigits: 1
          }) : 0}
        </span>

      </div>

    </div>
  )
}

export default ResultCardFooter