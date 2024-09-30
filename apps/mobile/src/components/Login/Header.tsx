import { Image, Text, View } from "react-native"

export default function Header() {
  return (
    <View
      style={{
        marginBottom: 50,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Image
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require("../../assets/images/logo-nutrilife.svg")}
        style={{ marginTop: 30 }}
      />
      <Text style={{ color: "white", fontSize: 16, marginTop: 5 }}>
        Uma vida saudável começa aqui!{" "}
      </Text>
    </View>
  )
}
