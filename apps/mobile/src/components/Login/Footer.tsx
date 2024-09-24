import { useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

export enum FooterOption {
  LOGIN,
  CADASTRO
}

export default function Footer({
  textoFooter,
  footerOption
}: {
  textoFooter: string
  footerOption: FooterOption
}) {
  const router = useRouter()

  const handlePress = () => {
    if (footerOption === FooterOption.CADASTRO) {
      router.push("/auth/register")
    } else if (footerOption === FooterOption.LOGIN) {
      router.push("/auth/login")
    }
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "#8F898D", fontSize: 14 }}>{textoFooter}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: "#9C121E", fontSize: 14, fontWeight: "bold" }}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  )
}
