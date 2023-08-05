"use client"

import { Check, ChevronDown } from "lucide-react"
import * as SelectPrimitive from "@radix-ui/react-select"

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="w-full h-11 flex items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder="Select a country..."
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="w-[--radix-select-trigger-width] z-10 rounded-lg border border-zinc-200 bg-white overflow-hidden"
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                Brazil
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="w-4 h-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="usa"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                United States
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="w-4 h-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
