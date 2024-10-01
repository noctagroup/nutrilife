import FormularioCadastro from "@/components/Login/FormularioCadastro"
import { CadastroProvider } from "@/context/CadastroContext"

export default function AuthRegister() {
  return (
    <CadastroProvider>
      <FormularioCadastro />
    </CadastroProvider>
  )
}
