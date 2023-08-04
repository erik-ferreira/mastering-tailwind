import { ComponentProps } from "react"

interface ControlProps extends ComponentProps<"input"> {}

export function Control({ ...rest }: ControlProps) {
  return <input id="photo" type="file" className="sr-only" {...rest} />
}
