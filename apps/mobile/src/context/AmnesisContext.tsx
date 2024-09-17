import { createContext, ReactNode, useContext, useState } from "react"

// Define the shape of your anamnesis data
interface AnamnesisData {
  dataNasc: string
  genero: string
  altura: string
  peso: string
  objetivo: string
  atividade: string
}

// Define the shape of the context
interface AnamnesisContextType {
  anamnesisData: AnamnesisData
  setAnamnesisData: (data: Partial<AnamnesisData>) => void
}

// Create the context with default values
const AnamnesisContext = createContext<AnamnesisContextType | undefined>(undefined)

// Create a custom hook to use the AnamnesisContext
export const useAnamnesis = () => {
  const context = useContext(AnamnesisContext)
  if (!context) {
    throw new Error("useAnamnesis must be used within an AnamnesisProvider")
  }
  return context
}

// Provider component that wraps your app
export const AnamnesisProvider = ({ children }: { children: ReactNode }) => {
  const [anamnesisData, setAnamnesisDataState] = useState<AnamnesisData>({
    dataNasc: "",
    genero: "",
    altura: "",
    peso: "",
    objetivo: "",
    atividade: ""
  })

  const setAnamnesisData = (data: Partial<AnamnesisData>) => {
    setAnamnesisDataState((prev) => ({ ...prev, ...data }))
  }

  return (
    <AnamnesisContext.Provider value={{ anamnesisData, setAnamnesisData }}>
      {children}
    </AnamnesisContext.Provider>
  )
}
