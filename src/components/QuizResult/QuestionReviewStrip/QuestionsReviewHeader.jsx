import { MdViewTimeline } from "react-icons/md";
import useQuiz from "../../../context/useQuiz";
import { quizConfig } from "../../../data/quiz";
import { countingCorrectAnswers, countingUnCorrectAnswers, NotAnsweredQuestionsHandel } from "../../../lib/funcs/quiz";
import LegendOfAnswers from "./LegendOfAnswers";

function QuestionsReviewHeader() {
  const { answers } = useQuiz()
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">

      <div>

        <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
          <MdViewTimeline className="text-primary size-5" />
          بررسی اجمالی وضعیت سؤالات ({quizConfig.totalQuestions.toLocaleString("fa-ir")} پرسش)
        </h2>

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          برای مرور پاسخ تشریحی هر سؤال، روی شماره آن ضربه بزنید.
        </p>

      </div>

      {/* Legend */}

      <div className="flex items-center gap-space-sm flex-wrap text-label-sm font-label-sm">
        <LegendOfAnswers data={{ number: countingCorrectAnswers(answers), text: "درست" }} classes="bg-tertiary" />
        <LegendOfAnswers data={{ number: countingUnCorrectAnswers(answers), text: "نادرست" }} classes="bg-error" />
        <LegendOfAnswers data={{ number: NotAnsweredQuestionsHandel(answers), text: "بی پاسخ" }} classes="bg-outline" />

      </div>

    </div>
  )
}

export default QuestionsReviewHeader