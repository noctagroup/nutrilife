import { createContext, ReactNode, useContext, useState } from "react"

interface DadosCadastro {
  nome: string
  sobrenome: string
  email: string
  senha: string
  senha_confirma: string
}

interface CadastroContextType {
  dados: DadosCadastro
  setDados: (dados: DadosCadastro) => void
}

const CadastroContext = createContext<CadastroContextType | undefined>(undefined)

export const useCadastro = () => {
  const context = useContext(CadastroContext)
  if (!context) {
    throw new Error("useCadastro must be used within a CadastroProvider")
  }
  return context
}

export function CadastroProvider({ children }: { children: ReactNode }) {
  const [dados, setDados] = useState<DadosCadastro>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    senha_confirma: ""
  })

  return <CadastroContext.Provider value={{ dados, setDados }}>{children}</CadastroContext.Provider>
}
