import { AnimatePresence, motion } from "motion/react";
import useQuiz from "../../../../../context/useQuiz";

function QuizTitle() {
  const { currentQuestion, questionIndex } = useQuiz();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionIndex}
        className="relative z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="font-headline-md text-headline-md text-on-surface font-extrabold leading-relaxed md:leading-loose">
          {currentQuestion.question}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export default QuizTitle;