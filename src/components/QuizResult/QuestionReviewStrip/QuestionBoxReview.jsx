
function QuestionBoxReview({ question, Icon, backClass, Class }) {
  return (
    <button className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all shadow-sm ${backClass}`} type="button">

      <span className="font-label-sm text-label-sm font-bold">
        سؤال {question.id.toLocaleString("fa-ir")}
      </span>

      <Icon className={Class} />

    </button>
  )
}

export default QuestionBoxReview