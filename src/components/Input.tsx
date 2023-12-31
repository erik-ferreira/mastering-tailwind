import { ComponentProps } from "react"

type RootProps = ComponentProps<"div">

export function Root({ ...rest }: RootProps) {
  return (
    <div
      className="w-full flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...rest}
    />
  )
}

type ControlProps = ComponentProps<"input">

export function Control({ ...rest }: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...rest}
    />
  )
}

type PrefixProps = ComponentProps<"div">

export function Prefix({ ...rest }: PrefixProps) {
  return <div {...rest} />
}
