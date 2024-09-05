import { TextInput, StyleSheet, TextInputProps, TouchableOpacity, Text, Image } from "react-native"

export default function OutlinedButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require("../../assets/images/google.svg")}
      />
      <Text style={styles.textButton}>
        Login pelo <br />
        Google
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    flexDirection: "row",
    width: "45%", 
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#9C121E",
    marginTop: 50,
    alignItems: "center", 
    justifyContent: "space-evenly" 
  },

  textButton: {
    color: "#8F898D",
    fontWeight: "bold",
    fontSize: 12
  }
})
