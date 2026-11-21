

function LegendOfAnswers({ classes, data = { number: 0, text: "" } }) {
  return (




    <div className="flex items-center gap-1">

      <span className={`w-3 h-3 rounded-full  ${classes}`}></span>

      <span className="text-on-surface-variant">
        {data.text} ({data.number})
      </span>

    </div>

  )
}

export default LegendOfAnswers