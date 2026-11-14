
function Footer() {
  return (
    <footer
      className="relative z-10 w-full bg-surface-container-lowest/80 backdrop-blur-xl py-space-md shadow-[0_-2px_16px_rgba(0,0,0,0.25)]">
      <div
        className="max-w-7xl mx-auto px-gutter md:px-gutter-desktop flex flex-col sm:flex-row items-center justify-between gap-space-xs text-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant">طراحی شده با استاندارد مدرن گلس‌مورفیسم • تمامی حقوق
          برای کوییزنوا محفوظ است</p>
        <div className="flex items-center gap-space-md text-on-surface-variant"><span
          className="font-label-sm text-label-sm text-primary">نسخه ۲.۵ هوشمند</span><span
            className="font-label-sm text-label-sm">پشتیبانی آنلاین</span></div>
      </div>
    </footer>


  )
}

export default Footer