import { quizConfig } from "../../../data/quiz"


function ResultCardMain({ statusOfAnswers, correctAnswers }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around gap-space-lg my-space-md z-10">

      {/* SVG Gauge */}

      <div className="relative w-44 h-44 flex items-center justify-center">

        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">

          {/* Background Track */}

          <circle className="text-surface-container-highest" cx={"60"} cy={"60"} fill="transparent" r={"50"} stroke="currentColor" strokeWidth={"10"}></circle>

          {/* Animated Arc (80% of 314.159 = 251.327) */}

          <circle className={`${statusOfAnswers.color}`} cx={"60"} cy={"60"} fill="transparent" r={"50"} stroke="currentColor" strokeDasharray="314.16" strokeDashoffset={315 - correctAnswers * 32} strokeLinecap="round" strokeWidth={"10"}></circle>

        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

          <span className={`font-headline-xl text-headline-xl font-bold ${statusOfAnswers.color}`}>
            %{(correctAnswers * 10).toLocaleString("fa-ir")}
          </span>

          <span className={` font-label-sm text-label-sm ${statusOfAnswers.color}`}>
            درصد موفقیت
          </span>

        </div>

      </div>

      {/* Metric Details Beside Ring */}

      <div className="flex flex-col text-center sm:text-right gap-space-xs">

        <span className={`font-label-md text-label-md ${statusOfAnswers.color} tracking-wide uppercase`}>
          نمره کل آزمون
        </span>

        <div className="flex items-baseline justify-center sm:justify-start gap-space-xs">

          <span className="font-headline-xl  text-on-surface font-extrabold tracking-tight">
            {correctAnswers.toLocaleString("fa-ir")} /
          </span>

          <span className="font-headline-sm text-headline-sm text-on-surface-variant">
            {quizConfig.totalQuestions.toLocaleString("fa-ir")} نمره
          </span>

        </div>

        <p className="font-body-sm text-[16px] text-on-surface-variant max-w-xs mt-space-xs">
          {statusOfAnswers.description}

          <span className="block text-[15px mt-2">{statusOfAnswers.rank}</span>
        </p>


      </div>

    </div>
  )
}

export default ResultCardMain