import { TextInput, StyleSheet, TextInputProps, TouchableOpacity, Text } from "react-native"

export default function RedButton() {
  return (
    <TouchableOpacity style={styles.button}>
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
