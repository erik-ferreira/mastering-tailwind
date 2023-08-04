import { ComponentProps } from "react"

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...rest }: RootProps) {
  return <div {...rest} />
}
