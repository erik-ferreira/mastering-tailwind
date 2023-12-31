"use client"

import { Trash2, UploadCloud } from "lucide-react"
import { useAutoAnimate } from "@formkit/auto-animate/react"

import { useFileInput } from "./Root"
import { Button } from "@/components/Button"

import { formatBytes } from "@/utils/format-bytes"

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="space-y-3 mt-4">
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud className="w-4 h-4" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>
            </div>

            <div className="w-full flex items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div className="w-4/5 h-2 rounded-full bg-violet-600" />
              </div>
              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>

          <Button type="button" variant="ghost">
            <Trash2 className="w-5 h-5 text-zinc-500" />
          </Button>
        </div>
      ))}
    </div>
  )
}
