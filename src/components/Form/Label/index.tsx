import { ComponentProps } from "react"
import { LabelDescription } from "./LabelDescription"

interface LabelProps extends ComponentProps<"label"> {
  text: string
  description?: string
}

export default function Label({ text, description = "", ...rest }: LabelProps) {
  return (
    <label className="text-sm font-medium text-zinc-700" {...rest}>
      {text}

      {description && <LabelDescription description={description} />}
    </label>
  )
}
