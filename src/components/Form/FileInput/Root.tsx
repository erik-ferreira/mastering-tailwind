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
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root({ ...rest }: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...rest} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
