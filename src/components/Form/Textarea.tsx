import { ComponentProps } from "react"

interface TextareaProps extends ComponentProps<"textarea"> {}

export function Textarea({ ...rest }: TextareaProps) {
  return (
    <textarea
      className="w-full min-h-[120px] rounded-lg border border-zinc-300 px-3 py-2 shadow-sm resize-y"
      {...rest}
    />
  )
}
