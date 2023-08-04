"use client"

import * as Tabs from "@radix-ui/react-tabs"
import { motion } from "framer-motion"

interface TabItemProps {
  value: string
  title: string
  isSelected: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative text-sm font-medium text-zinc-500 px-1 pb-4 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="h-0.5 bg-violet-700 absolute -bottom-px left-0 right-0"
        />
      )}
    </Tabs.Trigger>
  )
}
