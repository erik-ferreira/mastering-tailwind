import { ChevronDown } from "lucide-react"
import { ElementType } from "react"

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 transition-colors"
    >
      <Icon className="w-5 h-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-hover:text-violet-500" />
    </a>
  )
}
