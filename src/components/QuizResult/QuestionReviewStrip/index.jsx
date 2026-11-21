import { IoMdCheckmark, IoMdRemove } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import QuestionsReviewHeader from "./QuestionsReviewHeader";


import useQuiz from "../../../context/useQuiz";
import { questions } from "../../../data/quiz";
import QuestionBoxReview from "./QuestionBoxReview";
function QuestionReviewStrip() {

  const { isQuestionAnswered, isQuestionCorrectAnswered } = useQuiz()
  return (
    <section section className="rounded-xl bg-surface-container/60 backdrop-blur-xl p-space-lg shadow-lg mb-space-lg" >
      <QuestionsReviewHeader />


      {/* Question Chips Strip (1 to 10) */}

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-space-sm">

        {questions.map(quest => {
          const isAnswered = isQuestionAnswered(quest);
          if (!isAnswered) {
            return <QuestionBoxReview key={quest.id} question={quest} Icon={IoMdRemove} Class={"size-5"} backClass={"review-question-box-notAnswer"} />
          } else if (isQuestionCorrectAnswered(quest)) {
            return <QuestionBoxReview key={quest.id} question={quest} Icon={IoMdCheckmark} Class={"size-5"} backClass={"review-question-box-correctAnswer"} />
          }
          return <QuestionBoxReview key={quest.id} question={quest} Icon={IoClose} Class={"size-5"} backClass={"review-question-box-unCorrectAnswer"} />

        })}

      </div>

    </section >
  )
}

export default QuestionReviewStrip