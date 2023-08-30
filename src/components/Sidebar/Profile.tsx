import { LogOut } from "lucide-react"
import { Button } from "../Button"

export function Profile() {
  return (
    <div className="grid grid-cols-profile gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/erik-ferreira.png"
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Erik Ferreira
        </span>
        <span className="truncate text-sm text-zinc-500">
          erik@gmail.com.br
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
