
import { BiSolidCarousel } from "react-icons/bi";
import { questions } from "../../../../data/quiz";
import QuizPageBox from "./QuizPageBox";


function QuizPagination() {


  return (
    <div className="w-full bg-surface-container/60 backdrop-blur-xl rounded-xl p-space-md shadow-xl flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <span className="font-label-md text-label-md text-on-surface flex items-center gap-space-xs">
          <BiSolidCarousel className="text-primary size-5" />

          نقشه ناوبری سؤالات آزمون
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">پرش سریع به هر شماره سؤال</span>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-space-sm w-full">
        {questions.map((q, i) => <QuizPageBox key={i} quiz={q} index={i} />)}
      </div>

      <div className="flex items-center justify-center flex-wrap gap-space-lg pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
        <div className="flex items-center gap-space-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_8px_rgba(160,120,255,0.8)]"></span>
          <span>سؤال فعال کنونی</span>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.8)]"></span>
          <span>پاسخ‌داده‌شده</span>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-surface-variant"></span>
          <span>پاسخ‌داده‌نشده</span>
        </div>

      </div>
    </div>
  )
}

export default QuizPagination