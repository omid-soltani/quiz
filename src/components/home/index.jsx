import { GoVerified } from "react-icons/go";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { useNavigate } from "react-router";
import { quizInfo, quizRules } from "../../data/quiz.js";
import Button from "../common/Button.jsx";
import HomeLabelEffect from "./elements/HomeLabelEffect.jsx";
import QuizInfo from "./elements/QuizInfo.jsx";
import QuizRules from "./elements/QuizRules.jsx";
import HomeEffects from "./HomeEffects.jsx";
import HomeIntroduction from "./HomeIntroduction.jsx";
import HomeMainIcon from "./HomeMainIcon.jsx";

function Home() {

    const Navigate = useNavigate()
    return (
        <main class="relative z-10 w-full pt-20 bg-surface min-h-[calc(100vh-5rem)] flex flex-col justify-between">
            <div class="flex flex-col w-full relative overflow-hidden py-space-lg md:py-space-xl">
                <HomeEffects />
                <div class="max-w-4xl mx-auto w-full px-gutter md:px-gutter-desktop flex flex-col items-center">

                    <HomeLabelEffect />
                    <div
                        class="w-full bg-surface-container/60 backdrop-blur-2xl rounded-xl p-space-lg md:p-space-xl shadow-[0_16px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden">
                        <HomeMainIcon />

                        <HomeIntroduction />

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md w-full mb-space-xl text-right">
                            {/* quiz info */}
                            {quizInfo.map((quiz, index) => <QuizInfo key={index}
                                headTitle={quiz.headTitle}
                                title={quiz.title}
                                extraInfo={quiz.extraInfo}
                                Icon={quiz.Icon}
                                iconClassName={quiz.iconClass}
                                textColor={quiz.textColor} />)}
                        </div>

                        <div
                            class="w-full bg-surface-container-low/60 rounded-xl p-space-md md:p-space-lg mb-space-xl text-right shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                            <div class="flex items-center gap-space-xs mb-space-md">
                                <MdOutlinePolicy className=" text-secondary " />
                                <span class="font-headline-sm text-headline-sm text-on-surface">قوانین و راهنمای شرکت در آزمون</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                                {quizRules.map((rule, index) => <QuizRules key={index} Icon={rule.Icon} desc={rule.desc} iconColor={rule.iconColor} />)}

                            </div>
                        </div>

                        <div class="w-full flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-lg">


                            <Button text="شروع ازمون" Icon={IoArrowForward} textPosition="left" classes="text-[16px] px-10 py-3.5" onclick={() => {
                                Navigate("/quiz")
                            }} />
                            {/* <button
                                class="w-full sm:w-auto px-space-lg py-space-md rounded-xl bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                                type="button">
                                <IoHelpCircleOutline className="text-secondary size-5" />
                                <span>راهنمای کاربری و آزمون آزمایشی</span>
                            </button> */}
                        </div>

                        <div
                            class="w-full pt-space-md flex flex-wrap items-center justify-center gap-space-md text-on-surface-variant">
                            {/* <div class="flex items-center gap-space-xs">
                                <span class="flex h-2.5 w-2.5 relative">
                                    <span
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
                                </span>
                                <span class="font-body-sm text-body-sm">بیش از <strong
                                    class="text-on-surface font-label-md text-label-md">۱۲,۴۰۰</strong> شرکت‌کننده فعال</span>
                            </div>
                            <span class="hidden sm:inline-block text-outline-variant">•</span>
                            <div class="flex items-center gap-space-xs">
                                <span class="material-symbols-outlined text-secondary text-[18px]">analytics</span>
                                <span class="font-body-sm text-body-sm">میانگین امتیاز کاربران: <strong
                                    class="text-secondary font-label-md text-label-md">۷.۸</strong> از ۱۰</span>
                            </div> */}
                            <span class="hidden sm:inline-block text-outline-variant">•</span>
                            <div class="flex items-center gap-space-xs">
                                <GoVerified className="text-primary size-5" />
                                <span class="font-body-sm text-body-sm">اعطای گواهی رتبه در پایان آزمون</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home