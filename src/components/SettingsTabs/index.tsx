"use client"

import { useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"

import { TabItem } from "./TabItem"

import { tabs } from "@/default/tabs"

export function SettingsTabs() {
  const [currentTabSelected, setCurrentTabSelected] = useState("tab1")

  return (
    <Tabs.Root value={currentTabSelected} onValueChange={setCurrentTabSelected}>
      <Tabs.List className="w-full flex items-center gap-5 mt-6 border-b border-zinc-200">
        {tabs.map((tab) => (
          <TabItem
            key={tab.value}
            value={tab.value}
            title={tab.title}
            isSelected={currentTabSelected === tab.value}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
