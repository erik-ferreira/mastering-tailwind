"use client"

import {
  createContext,
  ComponentProps,
  useId,
  useContext,
  useState,
} from "react"

interface RootProps extends ComponentProps<"div"> {}

interface FileInputContextType {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root({ ...rest }: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...rest} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
