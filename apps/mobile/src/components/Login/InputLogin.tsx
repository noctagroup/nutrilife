import { StyleSheet, TextInput, TextInputProps } from "react-native"

interface InputLoginProps extends TextInputProps {
  placeholder: string
}

export default function InputLogin({ placeholder, ...rest }: InputLoginProps) {
  return <TextInput placeholder={placeholder} style={styles.input} {...rest} />
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingStart: 10,
    borderBottomColor: "#9C121E",
    borderBottomWidth: 3,
    marginBottom: 30,
    color: "#8F898D",
    fontSize: 14,
    width: "100%"
  }
})
