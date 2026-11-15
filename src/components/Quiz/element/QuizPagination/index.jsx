
import { BiSolidCarousel } from "react-icons/bi";
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

        {/* <button className="relative py-space-sm rounded-xl bg-surface-container-high/90 hover:bg-surface-bright text-on-surface font-label-lg text-label-lg flex flex-col items-center justify-center transition-all shadow-md group" type="button">
          <span>۲</span>
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.9)] mt-0.5"></span>
        </button>
        <button className="relative py-space-sm rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold flex flex-col items-center justify-center shadow-[0_0_20px_rgba(160,120,255,0.7)] scale-105 transform" type="button">
          <span>۳</span>
          <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container mt-0.5 animate-pulse"></span>
        </button>
        <button className="py-space-sm rounded-xl bg-surface-container-lowest/60 hover:bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg flex flex-col items-center justify-center transition-all" type="button">
          <span>۴</span>
          <span className="w-1.5 h-1.5 rounded-full bg-surface-variant mt-0.5"></span>
        </button> */}
        <QuizPageBox />

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