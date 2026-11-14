
function HeaderBackEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-[550px] h-[550px] rounded-full bg-primary/10 blur-[130px]"></div>
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-secondary/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-tertiary/10 blur-[140px]"></div>
    </div>
  )
}

export default HeaderBackEffect