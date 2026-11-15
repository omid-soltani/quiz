
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";


import Button from "../../common/Button";

function QuizFooter() {
  return (
    <div className="w-full bg-surface-container-low/80 backdrop-blur-2xl rounded-xl p-space-md shadow-2xl flex flex-col sm:flex-row items-center justify-evenly gap-space-md">
      <Button text="سوال قبلی" Icon={IoMdArrowRoundForward} type="" textPosition="left" />
      <Button text="سوال بعدی" Icon={IoMdArrowRoundBack} textPosition="right" />
    </div>
  )
}

export default QuizFooter