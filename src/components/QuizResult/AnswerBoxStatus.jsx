
function AnswerBoxStatus({ Icon, iconClass, iconClassBack, title, text }) {
  return (
    <div className="rounded-xl bg-surface-container-high/50 backdrop-blur-lg p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container-high/70 transition-all duration-300" >

      <div className="flex items-start justify-between mb-space-sm">

        <span className="font-label-md text-label-md text-on-surface-variant">
          {title}
        </span>

        <div className={`w-10 h-10 rounded-lg  flex items-center justify-center ${iconClassBack}`}>

          <Icon className={`${iconClass} size-5`} />

        </div>

      </div>

      <div>

        <div className={`font-headline-md text-headline-md font-bold mb-1 ${iconClass}`}>
          {text}
        </div>



      </div>

    </div >
  )
}

export default AnswerBoxStatus