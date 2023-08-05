import { ComponentProps } from "react"

interface LabelDescription extends ComponentProps<"span"> {
  description: string
}

export function LabelDescription({ description, ...rest }: LabelDescription) {
  return (
    <span className="mt-0.5 block text-sm font-normal text-zinc-500">
      {description}
    </span>
  )
}
