import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlinePsychology } from "react-icons/md";


function QuizHeader() {
  return (
    <div className="w-full bg-surface-container/60 backdrop-blur-2xl rounded-xl p-space-md shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="px-space-sm py-space-xs rounded-full bg-primary/15 text-primary font-label-sm text-label-sm shadow-[0_0_15px_rgba(208,188,255,0.2)]">
            برنامه نویسی
          </span>
          <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high/80 text-on-surface-variant font-label-sm text-label-sm flex items-center gap-space-xs">

            <MdOutlinePsychology className="text-tertiary" />
            ضریب هوشی تحلیلی: ۱۲۰+
          </span>
        </div>
        <h1 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
          آزمون تخصصی هوش و تفکر تحلیلی
        </h1>
      </div>

      <div className="flex items-center gap-space-sm w-full md:w-auto justify-between md:justify-end">
        <div className="px-space-md py-space-xs rounded-xl bg-surface-container-highest/60 backdrop-blur-md flex items-center gap-space-sm shadow-md">
          <IoHelpCircleOutline className=" text-secondary " />
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">موقعیت</span>
            <span className="font-label-lg text-label-lg text-secondary font-bold">سؤال ۳ از ۱۰</span>
          </div>
        </div>
        <div className="px-space-md py-space-xs rounded-xl bg-surface-container-highest/60 backdrop-blur-md flex items-center gap-space-sm shadow-md">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping absolute opacity-75"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">زمان باقی‌مانده</span>
            <span className="font-label-lg text-label-lg text-secondary font-bold tracking-wider">۱۲:۴۵</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizHeader