
function QuizRules({ desc, Icon, iconColor = "" }) {
  return (
    <>
      <div class="flex items-start gap-space-sm">
        <div
          class={`${iconColor} w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(78,222,163,0.3)]`}>
          <Icon />
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {desc}
        </p>
      </div></>
  )
}

export default QuizRules