import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface RedButtonProps {
  onPress: () => void
}

export default function RedButton({ onPress }: RedButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    backgroundColor: "#9C121E",
    alignContent: "center",
    justifyContent: "center",
    width: "45%",
    borderRadius: 50,
    marginTop: 20
  },
  textButton: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
})
