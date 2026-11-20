import { MdAutoAwesome, MdSchedule } from "react-icons/md";
import { formatDate } from "../../../lib/funcs/quiz";

function ResultCardHeader({ statusOfAnswers }) {

  return (
    <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-md z-10">
      {/* Top Row inside Card: Tier & Metadata */}
      <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md">

        <MdAutoAwesome className={`${statusOfAnswers.color}  size-5`} />

        <span className={`font-label-md text-label-md ${statusOfAnswers.color}`}>
          {statusOfAnswers.title}
        </span>

      </div>

      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
        <MdSchedule />
        <span>
          {formatDate()}
        </span>

      </div>

    </div>
  )
}

export default ResultCardHeader