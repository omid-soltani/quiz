import { FaDownload } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFactCheck, MdOutlineRestartAlt } from "react-icons/md";
import { useNavigate } from "react-router";
import useQuiz from "../../context/useQuiz";
import Button from "../common/Button";


function ResultFooter() {
  const { resetAnswers, setQuestionIndex } = useQuiz()
  const Navigate = useNavigate()
  const resetQuiz = () => {
    Navigate("/home", {
      replace: true
    })
    setQuestionIndex(0)
    resetAnswers()

  }
  return (
    < section className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-xl flex-wrap" >

      <Button text="شروع مجدد ازمون" Icon={MdOutlineRestartAlt} textPosition="left" onclick={resetQuiz} />
      <Button text="مرور تفصیلی پاسخ‌ها و توضیحات تشریحی" Icon={MdOutlineFactCheck} type="notPrimary" textPosition="left" />

      <div div className="flex items-center gap-space-xs w-full sm:w-auto justify-center" >
        <Button Icon={FaDownload} type="notPrimary" />
        <Button Icon={IoShareSocialOutline} type="notPrimary" />
      </div >

    </section >
  )
}

export default ResultFooter