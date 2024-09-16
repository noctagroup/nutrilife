import { Link } from "expo-router"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function AuthLogin() {
  const [firstName, onChangeFirstName] = useState("")
  const [lastName, onChangeLastName] = useState("")
  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")
  const [passwordConfirmation, onChangePasswordConfirmation] = useState("")

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={firstName}
        onChangeText={onChangeFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu sobrenome"
        value={lastName}
        onChangeText={onChangeLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={onChangeEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={onChangePassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        value={passwordConfirmation}
        onChangeText={onChangePasswordConfirmation}
      />

      <Button title="Cadastrar" />

      <Text>Já cadastrado?</Text>

      <Link style={styles.link} href="/auth/login">
        Clique aqui
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  link: {
    color: "blue",
    textDecorationLine: "none",
    fontWeight: "bold"
  }
})
