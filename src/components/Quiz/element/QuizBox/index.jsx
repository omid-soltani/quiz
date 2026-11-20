import { GoReport } from "react-icons/go";
import { PiMedalMilitaryLight } from "react-icons/pi";
import useQuiz from "../../../../context/useQuiz";
import QuizAnswer from "./fragments/QuizAnswer";
import QuizTitle from "./fragments/QuizTitle";




function QuizBox() {
  const { currentQuestion, selectAnswer } = useQuiz()

  return (
    <div className="w-full bg-surface-container/75 backdrop-blur-2xl rounded-xl p-space-lg md:p-space-xl shadow-2xl relative overflow-hidden flex flex-col gap-space-lg">
      <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-primary/10 blur-[80px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-secondary/10 blur-[80px] pointer-events-none"></div>

      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="w-2 h-2 rounded-full bg-primary-container"></span>
          <span className="font-label-md text-label-md text-primary font-semibold">سؤال شماره ۳</span>
          <span className="text-on-surface-variant font-label-sm text-label-sm">•</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">درجه سختی:</span>
          <span className="px-space-sm py-0.5 rounded-full bg-surface-bright text-secondary font-label-sm text-label-sm">{currentQuestion.difficulty}</span>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center gap-space-xs">
            <PiMedalMilitaryLight className="size-4" />
            {currentQuestion.score} امتیاز
          </span>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs font-label-sm text-label-sm" type="button">
            <GoReport className="size-4" />
            گزارش ایراد
          </button>
        </div>
      </div>

      <QuizTitle />


      <div className="grid grid-cols-1 gap-space-md relative z-10" id="options-group">
        {currentQuestion.answers.map((a, i) => <QuizAnswer key={i} index={i} answer={a} onclick={() => {
          selectAnswer(i)
        }} />)}

      </div>
    </div>
  )
}

export default QuizBox