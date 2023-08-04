import {
  Home,
  Flag,
  Users,
  BarChart,
  CheckSquare,
  SquareStack,
} from "lucide-react"

import { NavItem } from "./NavItem"

export function MainNavigation() {
  return (
    <nav className="">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
