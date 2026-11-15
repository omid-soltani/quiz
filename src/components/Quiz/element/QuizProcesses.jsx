import { IoTrendingUp } from "react-icons/io5";

function QuizProcesses() {
  return (
    <div className="w-full bg-surface-container-low/70 backdrop-blur-xl rounded-xl p-space-md shadow-lg flex flex-col gap-space-xs">
      <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
        <span className="flex items-center gap-space-xs text-on-surface">
          <IoTrendingUp className="text-secondary size-4" />
          ۳۰٪ تکمیل شده (۳ از ۱۰ سؤال پاسخ داده شده)
        </span>
        <span className="text-tertiary font-medium">۷ سؤال باقیمانده</span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-surface-container-highest/80 overflow-hidden p-0.5 relative">
        <div sty className="h-full rounded-full bg-gradient-to-l from-secondary via-primary to-primary-container shadow-[0_0_12px_rgba(76,215,246,0.6)] transition-all duration-500 ease-out"></div>
      </div>
    </div>
  )
}

export default QuizProcesses