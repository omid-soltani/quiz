import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router";
import { quizConfig } from "../../data/quiz";
import HeaderBackEffect from "./HeaderBackEffect";

function Header() {
  return (
    <>
      <HeaderBackEffect />
      <header className="fixed top-0 w-full z-50 bg-surface/75 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
        <div className="h-20 max-w-7xl mx-auto px-gutter md:px-gutter-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <img alt="QuizNova Logo" className="h-8 w-auto object-contain" src="public/images/unnamed.png" />
            <div className="flex items-center gap-space-sm">
              <span
                className="font-vazir-medium text-headline-md text-primary tracking-wide">کوییزنوا</span><span
                  className="hidden sm:inline-flex items-center px-space-sm py-space-xs rounded-full bg-surface-container-high/80 text-on-surface-variant font-label-sm text-[12px]">
                {quizConfig.title}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div
              className="flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-low/80 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span
                className="font-vazir-regular text-label-md text-on-surface">آزمون فعال • {quizConfig.totalQuestions.toLocaleString("fa-ir")} سؤال</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-space-sm bg-primary-container text-on-primary-container font-vazir-bold rounded-xl">
            <Link to={"/quiz"} aria-current="page"
              className="px-space-md py-space-sm transition-colors bg-primary-container text-on-primary-container font-vazir-bold rounded-xl"
              data-path="quiz-experience" href="#">شروع آزمون</Link>
            {/* <a
              className="px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              data-path="leaderboard" href="#">جدول برترین‌ها</a>
            <a
              className="px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              data-path="analytics" href="#">کارنامه و تحلیل</a> */}
          </nav>
          <div className="flex items-center gap-space-sm">
            {/* <button aria-label="پخش صدا"
              className="w-9 h-9 rounded-full bg-surface-container-low/80 hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
              type="button">
              <span className="material-symbols-outlined text-[18px]">volume_up</span>
            </button>
            <button
              aria-label="تمام صفحه"
              className="w-9 h-9 rounded-full bg-surface-container-low/80 hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
              type="button">
              <span className="material-symbols-outlined text-[18px]">fullscreen</span>
            </button> */}
            {/* <div
              className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low/80 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              <span className="material-symbols-outlined text-secondary text-[16px]">timer</span><span
                className="font-label-md text-label-md text-secondary">۰۴:۳۰</span>
            </div> */}
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(208,188,255,0.35)]">
              <span className=" text-on-primary text-[18px]">
                <IoIosPerson />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>




  );
}


export default Header