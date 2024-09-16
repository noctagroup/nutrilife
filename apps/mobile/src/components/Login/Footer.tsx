import { View, Text, TouchableOpacity } from "react-native"

export default function Footer() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "#8F898D", fontSize: 14 }}>Não cadastrado? </Text>
      <TouchableOpacity>
        <Text style={{ color: "#9C121E", fontSize: 14, fontWeight: "bold" }}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  )
}
