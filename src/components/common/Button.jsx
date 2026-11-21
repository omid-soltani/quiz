import clsx from "clsx"

function Button({ text, Icon, type = "primary",
  textPosition, onclick = () => { }, ...prop }) {
  console.log(prop.classes)
  return (
    <div className="flex items-center gap-space-sm w-full sm:w-auto justify-between sm:justify-start">

      <button onClick={onclick} className={clsx("font-label-lg button-scend-primary", prop.classes,
        type === "primary" ? "button-primary" : "button-scend-primary"
      )}
        type="button">
        {textPosition === "right" && <span>{text} </span>}
        <Icon className="size-4" />
        {textPosition === "left" && <span>{text} </span>}

      </button>

    </div>
  )
}

export default Button