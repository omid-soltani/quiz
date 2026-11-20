

import ResultBackBanner from "./ResultBackBanner";
import ResultCardStatus from "./ResultCardStatus";
import ResultHeader from "./ResultHeader";
function QuizResult() {
  return (
    <main className="relative z-10 w-full min-h-screen bg-surface flex items-center justify-center p-gutter font-body-md text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">

      <div className="flex flex-col w-full max-w-5xl mx-auto px-margin md:px-margin-desktop py-space-md text-on-surface">

        {/* Completion Banner & Celebratory Header */}

        <header className="flex flex-col items-center text-center relative mb-space-lg">
          <ResultBackBanner />
          <ResultHeader />
        </header>
        <section className=" mb-space-lg items-stretch sm:px-10">
          <ResultCardStatus />
        </section >




        < section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-lg" >

          {/* Card 1: correct Answers */}
          {/* <AnswerBoxStatus /> */}



          {/* Card 2: Incorrect Answers */}

          <div div className="rounded-xl bg-surface-container-high/50 backdrop-blur-lg p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container-high/70 transition-all duration-300" >

            <div className="flex items-start justify-between mb-space-sm">

              <span className="font-label-md text-label-md text-on-surface-variant">
                پاسخ‌های نادرست
              </span>

              <div className="w-10 h-10 rounded-lg bg-error-container/30 text-error flex items-center justify-center">

                <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>
                  cancel
                </span>

              </div>

            </div>

            <div>

              <div className="font-headline-md text-headline-md text-error font-bold mb-1">
                ۱ پاسخ نادرست
              </div>

              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">

                <span>
                  کسر نمره منفی:
                </span>

                <span className="text-error font-semibold">
                  -۵ امتیاز
                </span>

              </div>

            </div>

          </div >

          {/* Card 3: Unanswered Questions */}

          <div div className="rounded-xl bg-surface-container-high/50 backdrop-blur-lg p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container-high/70 transition-all duration-300" >

            <div className="flex items-start justify-between mb-space-sm">

              <span className="font-label-md text-label-md text-on-surface-variant">
                پرسش‌های بی‌پاسخ
              </span>

              <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-outline flex items-center justify-center">

                <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>
                  help_outline
                </span>

              </div>

            </div>

            <div>

              <div className="font-headline-md text-headline-md text-on-surface font-bold mb-1">
                ۱ سؤال بی‌پاسخ
              </div>

              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">

                <span>
                  سؤال شماره ۸:
                </span>

                <span className="text-outline font-semibold">
                  بدون جریمه
                </span>

              </div>

            </div>

          </div >

          {/* Card 4: Total Time Spent */}

          {/* <div div className="rounded-xl bg-surface-container-high/50 backdrop-blur-lg p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container-high/70 transition-all duration-300" >

          <div className="flex items-start justify-between mb-space-sm">

            <span className="font-label-md text-label-md text-on-surface-variant">
              زمان کل صرف‌شده
            </span>

            <div className="w-10 h-10 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center">

              <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>
                timer
              </span>

            </div>

          </div>

          <div>

            <div className="font-headline-md text-headline-md text-secondary font-bold mb-1">
              ۹ دقیقه و ۲۰ ثانیه
            </div>

            <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">

              <span>
                میانگین هر سؤال:
              </span>

              <span className="text-secondary font-semibold">
                ۵۶ ثانیه (عالی)
              </span>

            </div>

          </div>

        </div > */}

        </section >

        {/* Question by Question Review Strip */}

        <section section className="rounded-xl bg-surface-container/60 backdrop-blur-xl p-space-lg shadow-lg mb-space-lg" >

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">

            <div>

              <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">

                <span className="material-symbols-outlined text-primary">
                  view_timeline
                </span>
                بررسی اجمالی وضعیت سؤالات (۱۰ پرسش)
              </h2>

              <p className="font-body-sm text-body-sm text-on-surface-variant">
                برای مرور پاسخ تشریحی هر سؤال، روی شماره آن ضربه بزنید.
              </p>

            </div>

            {/* Legend */}

            <div className="flex items-center gap-space-sm flex-wrap text-label-sm font-label-sm">

              <div className="flex items-center gap-1">

                <span className="w-3 h-3 rounded-full bg-tertiary"></span>

                <span className="text-on-surface-variant">
                  درست (۸)
                </span>

              </div>

              <div className="flex items-center gap-1">

                <span className="w-3 h-3 rounded-full bg-error"></span>

                <span className="text-on-surface-variant">
                  نادرست (۱)
                </span>

              </div>

              <div className="flex items-center gap-1">

                <span className="w-3 h-3 rounded-full bg-outline"></span>

                <span className="text-on-surface-variant">
                  سفید (۱)
                </span>

              </div>

            </div>

          </div>

          {/* Question Chips Strip (1 to 10) */}

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-space-sm">

            {/* Q1 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۱
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

            {/* Q2 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۲
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

            {/* Q3 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۳
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

            {/* Q4 (Incorrect) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-error/20 text-error hover:bg-error/30 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۴
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                close
              </span>

            </button>

            {/* Q5 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۵
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

            {/* Q6 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۶
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

            {/* Q7 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۷
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

            {/* Q8 (Unanswered) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-surface-bright transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۸
              </span>

              <span className="material-symbols-outlined text-[18px]">
                remove
              </span>

            </button>

            {/* Q9 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۹
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

            {/* Q10 (Correct) */}

            <button className="flex flex-col items-center justify-center p-space-xs rounded-lg bg-tertiary/15 text-tertiary hover:bg-tertiary/25 transition-all shadow-sm" type="button">

              <span className="font-label-sm text-label-sm font-bold">
                سؤال ۱۰
              </span>

              <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                check
              </span>

            </button>

          </div>

        </section >

        {/* Action CTA Panel */}

        < section className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-xl flex-wrap" >

          {/* Primary CTA: Retake Quiz */}

          <button button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3 rounded-xl bg-gradient-to-r from-primary-container via-primary-container to-inverse-primary text-white font-label-lg text-label-lg shadow-xl hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer active:scale-95" type="button" >

            <span className="material-symbols-outlined text-[20px]">
              restart_alt
            </span>

            <span>
              شروع مجدد آزمون
            </span>

          </button >

          {/* Secondary CTA: Detailed Review */}

          <button button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-xl bg-surface-container-high/80 backdrop-blur-xl text-on-surface hover:bg-surface-bright transition-colors font-label-lg text-label-lg shadow-md cursor-pointer active:scale-95" type="button" >

            <span className="material-symbols-outlined text-primary text-[20px]">
              fact_check
            </span>

            <span>
              مرور تفصیلی پاسخ‌ها و توضیحات تشریحی
            </span>

          </button >

          {/* Tertiary Utilities (PDF & Share) */}

          <div div className="flex items-center gap-space-xs w-full sm:w-auto justify-center" >

            <button className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors shadow-sm cursor-pointer active:scale-95" title="دانلود کارنامه رسمی (PDF)" type="button">

              <span className="material-symbols-outlined text-[20px]">
                download
              </span>

            </button>

            <button className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors shadow-sm cursor-pointer active:scale-95" title="اشتراک‌گذاری نتیجه" type="button">

              <span className="material-symbols-outlined text-[20px]">
                share
              </span>

            </button>

          </div >

        </section >
      </div >

    </main >
  );
}

export default QuizResult;
