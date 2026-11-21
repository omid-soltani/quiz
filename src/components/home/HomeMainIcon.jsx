
function HomeMainIcon() {
  return (
    <>
      <div
        class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container/80 to-transparent">
      </div>
      <div class="relative mb-space-md flex items-center justify-center">
        <div class="absolute inset-0 w-24 h-24 rounded-full bg-primary/25 blur-xl animate-pulse"></div>
        <div
          class="relative w-20 h-20 md:w-24 md:h-24 rounded-xl bg-surface-container-highest/80 p-space-sm flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <img alt="QuizNova Logo"
            class="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(78,222,163,0.3)]"
            src="public/images/unnamed.png" />
        </div>
      </div>
    </>

  )
}

export default HomeMainIcon