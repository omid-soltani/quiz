
import useQuiz from "../../context/useQuiz"
import QuizBox from "./element/QuizBox"
import QuizFooter from "./element/QuizFooter"
import QuizHeader from "./element/QuizHeader"
import QuizPagination from "./element/QuizPagination"
import QuizProcesses from "./element/QuizProcesses"



function Quiz() {

  const { answers } = useQuiz()
  console.log(answers)
  return (
    <main className="relative z-10 w-full pt-20 bg-surface min-h-[calc(100vh-5rem)] flex flex-col justify-between">
      <div className="flex flex-col w-full">
        <div className="w-full max-w-5xl mx-auto px-gutter md:px-gutter-desktop py-space-md md:py-space-lg flex flex-col gap-space-lg">

          <QuizHeader />
          <QuizProcesses />
          <QuizBox />
          <QuizPagination />
          <QuizFooter />

        </div>
      </div>
    </main>
  )
}

export default Quiz