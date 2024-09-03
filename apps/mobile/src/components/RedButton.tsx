import { TextInput, StyleSheet, TextInputProps, TouchableOpacity , Text} from "react-native"

interface InputLoginProps extends TextInputProps {
  placeholder: string
}

export default function RedButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Press Here</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#9C121E",
    alignContent: "center",
    justifyContent: "center",
    width: "40%",
    alignSelf: "center",
    borderRadius: 50
  },
  textButton: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold"
  }
})
