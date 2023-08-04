import { LogOut } from "lucide-react"

export function Profile() {
  return (
    <div className="grid grid-cols-profile gap-3">
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

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
