import { GoVerified } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RiMedal2Fill } from "react-icons/ri";



function ResultHeader() {
  return (
    <>
      <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/70 backdrop-blur-md shadow-sm mb-space-md">

        <GoVerified className="text-tertiary" />

        <span className="font-label-md text-label-md text-tertiary">
          آزمون با موفقیت به پایان رسید!
        </span>

      </div>

      {/* Trophy / Medal Emblem Icon */}

      <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-primary/30 to-secondary/10 p-1 mb-space-sm shadow-xl flex items-center justify-center">

        <div className="w-full h-full rounded-full bg-surface-container-high/90 backdrop-blur-xl flex items-center justify-center">
          <RiMedal2Fill className=" size-11 text-primary" style={{ "fontVariationSettings": "'FILL' 1" }} />

        </div>

        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-md">

          <IoCheckmarkOutline className="size-4" />

        </div>

      </div>

      {/* Title & Subtitle */}

      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
        کارنامه تحلیلی عملکرد شما در کوئیزنوا
      </h1>

      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
        خسته نباشید! نتیجه نهایی سنجش شما با موفقیت ثبت شد و جزئیات دقیق تحلیلی بر پایه الگوریتم هوشمند ارزیابی به شرح
        زیر آماده مشاهده است.
      </p>

    </>
  )
}

export default ResultHeader