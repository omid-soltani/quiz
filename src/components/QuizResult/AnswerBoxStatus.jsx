
function AnswerBoxStatus({ Icon, Classes }) {
  return (
    <div className="rounded-xl bg-surface-container-high/50 backdrop-blur-lg p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container-high/70 transition-all duration-300" >

      <div className="flex items-start justify-between mb-space-sm">

        <span className="font-label-md text-label-md text-on-surface-variant">
          پاسخ‌های صحیح
        </span>

        <div className={`w-10 h-10 rounded-lg bg-tertiary-container/30  flex items-center justify-center ${Classes}`}>

          <Icon className={`${Classes}`} />

        </div>

      </div>

      <div>

        <div className={`font-headline-md text-headline-md font-bold mb-1 ${Classes}`}>
          ۸ پاسخ درست
        </div>

        <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">

          <span>
            کسب امتیاز:
          </span>

          <span className={`text-tertiary font-semibold ${Classes}`}>
            +۸۰ امتیاز
          </span>

        </div>

      </div>

    </div >
  )
}

export default AnswerBoxStatus