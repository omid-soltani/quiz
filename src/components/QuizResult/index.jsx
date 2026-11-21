

import { IoIosHelpCircle, IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";


import useQuiz from "../../context/useQuiz";
import { countingCorrectAnswers, countingUnCorrectAnswers, NotAnsweredQuestionsHandel } from "../../lib/funcs/quiz";
import AnswerBoxStatus from "./AnswerBoxStatus";
import QuestionReviewStrip from "./QuestionReviewStrip";
import ResultBackBanner from "./ResultBackBanner";
import ResultCardStatus from "./ResultCardStatus";
import ResultFooter from "./ResultFooter";
import ResultHeader from "./ResultHeader";

function QuizResult() {
  const { answers } = useQuiz()

  const correctAnswerText = `${countingCorrectAnswers(answers).toLocaleString("fa-ir")} پاسخ درست`
  const unCorrectAnswerText = `${countingUnCorrectAnswers(answers).toLocaleString("fa-ir")} پاسخ نادرست`
  const unAnswerText = `${NotAnsweredQuestionsHandel(answers).toLocaleString("fa-ir")} سوال های بی پاسخ `
  return (
    <main className="relative z-10 w-full min-h-screen bg-surface flex items-center justify-center p-gutter font-body-md text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">

      <div className="flex flex-col w-full max-w-5xl mx-auto px-margin md:px-margin-desktop py-space-md text-on-surface">

        {/* Completion Banner & Celebratory Header */}

        <header className="flex flex-col items-center text-center relative mb-space-lg">
          <ResultBackBanner />
          <ResultHeader />
        </header>
        {/*Result Card Status  */}
        <section className=" mb-space-lg items-stretch sm:px-10">
          <ResultCardStatus />
        </section >

        < section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-lg" >
          {/* Card 1: correct Answers */}
          <AnswerBoxStatus Icon={IoMdCheckmarkCircle} iconClassBack="bg-tertiary-container/30" iconClass="text-tertiary" text={correctAnswerText} title="پاسخ های صحیح" />
          {/* Card 2: Incorrect Answers */}
          <AnswerBoxStatus Icon={MdCancel} iconClassBack="bg-error-container/30" iconClass="text-error" text={unCorrectAnswerText} title="پاسخ های نادرست" />
          {/* Card 3: Unanswered Questions */}
          <AnswerBoxStatus Icon={IoIosHelpCircle} iconClassBack="bg-surface-container-highest " iconClass="text-on-surface-variant" text={unAnswerText} title="سوال بی پاسخ" />
        </section >

        {/* Question by Question Review Strip */}

        <QuestionReviewStrip />

        {/* Action CTA Panel */}

        <ResultFooter />
      </div >

    </main >
  );
}

export default QuizResult;
