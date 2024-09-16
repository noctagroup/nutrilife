import { Link } from "expo-router"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function AuthLogin() {
  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")

  return (
    <View>
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

      <Button title="Entrar" />

      <Text>Não cadastrado?</Text>
      <Link style={styles.link} href="/auth/register">
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
