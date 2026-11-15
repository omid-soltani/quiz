
function QuizAnswer() {
  return (
    <label className="group cursor-pointer w-full p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-high/80 transition-all duration-200 flex items-center justify-between gap-space-md shadow-md">
      <div className="flex items-center gap-space-md flex-1">
        <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-sm text-headline-sm transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
          الف
        </div>
        <span className="font-body-lg text-body-lg text-on-surface leading-normal">
          الگوی Circuit Breaker جهت ایزوله‌سازی و کنترل خطاهای متوالی
        </span>
      </div>
      <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-transparent"></span>
      </div>
    </label>
  )
}

export default QuizAnswer