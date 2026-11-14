function QuizInfo({ headTitle,
  title,
  extraInfo,
  Icon,
  iconClassName,
  textColor }) {
  return (
    <div>
      <div
        className=" h-full bg-surface-container-low/80 hover:bg-surface-container-high/90 transition-all duration-300 p-space-md rounded-xl flex items-start gap-space-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)] group ">
        <div
          className={`w-10 h-10 rounded-lg  flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform `}>
          <Icon className={`w-10  h-10 rounded-lg  ${iconClassName} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform `} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-label-sm text-label-sm text-on-surface-variant ">{headTitle}</span>
          <span className="font-label-lg  text-label-lg text-on-surface font-bold">{title}</span>
          <span className={`font-body-sm  text-body-sm  ${textColor} mt-space`}>
            {extraInfo}
          </span>
        </div>
      </div>
    </div >
  )
}

export default QuizInfo