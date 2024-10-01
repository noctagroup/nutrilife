import { StyleSheet, TextInput, TextInputProps } from "react-native"

interface InputLoginProps extends TextInputProps {
  placeholder: string
  value: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeText: any
  isPassword: boolean
}

export default function InputLogin({
  placeholder,
  value,
  onChangeText,
  isPassword,
  ...rest
}: InputLoginProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      secureTextEntry={isPassword}
      {...rest}
    />
  )
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
