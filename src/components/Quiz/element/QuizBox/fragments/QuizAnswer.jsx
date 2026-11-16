import { FaRegCircleCheck } from "react-icons/fa6";
import useQuiz from "../../../../../context/useQuiz";



function QuizAnswer({ answer, index, onclick }) {
  const { isSelectedAnswer } = useQuiz()

  return (
    !isSelectedAnswer(index)
      ? (<label onClick={onclick} className="group cursor-pointer w-full p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-high/80 transition-all duration-200 flex items-center justify-between gap-space-md shadow-md">
        <div div className="flex items-center gap-space-md flex-1" >

          <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-sm text-headline-sm transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
            {index + 1}
          </div>
          <span className="font-body-lg text-body-lg text-on-surface leading-normal">
            {answer}
          </span>
        </div >
        <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-transparent"></span>
        </div>
      </label >)

      : (<label onClick={onclick} class="cursor-pointer w-full p-space-md rounded-xl bg-primary-container/20 shadow-[0_0_30px_rgba(160,120,255,0.35)] flex items-center justify-between gap-space-md relative overflow-hidden transition-all duration-200">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none"></div>
        <div class="flex items-center gap-space-md flex-1 relative z-10">
          <div class="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm shadow-md">
            {index + 1}
          </div>
          <div class="flex flex-col">
            <span class="font-body-lg text-body-lg text-on-surface font-semibold leading-normal">
              {answer}
            </span>
            <span class="font-label-sm text-label-sm text-primary flex items-center gap-space-xs mt-0.5">
              <FaRegCircleCheck />

              گزینه انتخابی شما برای این سؤال
            </span>
          </div>
        </div>
        <div class="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_10px_rgba(160,120,255,0.8)] relative z-10">
          <FaRegCircleCheck className="text-on-primary-container " />
        </div>
      </label>)
  )
}




export default QuizAnswer