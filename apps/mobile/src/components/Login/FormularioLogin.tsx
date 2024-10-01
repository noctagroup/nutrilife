import { ActivityIndicator, StyleSheet, View, Text } from "react-native"

import Footer, { FooterOption } from "./Footer"
import Header from "./Header"
import InputLogin from "./InputLogin"
import OutlinedButton from "./OutlineButton"
import RedButton from "./RedButton"
import { SetStateAction, useState } from "react"

export default function FormularioLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleFormSubmission = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        })
      })

      if (response.ok) {
        console.log("LOGADO")
      } else {
        const errorResponse = await response.json()
        setError(errorResponse.message || "O registo falhou.")
      }
    } catch (err) {
      setError("Um erro ocorreu, tente novamente depois.")
    } finally {
      setLoading(false)
    }
  }
 
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.whiteContainer}>
        <InputLogin placeholder="Digite seu email" value={email} onChangeText={(e: SetStateAction<string>) => setEmail(e)} isPassword={false} />
        <InputLogin placeholder="Digite sua senha" value={senha} onChangeText={(e: SetStateAction<string>) => setSenha(e)} isPassword={true} />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        {loading ? (
          <ActivityIndicator size="large" color="#9C121E" />
        ) : (
          <RedButton onPress={handleFormSubmission} />
        )}
        <OutlinedButton buttonText={`Login pelo\nGoogle`} />
        <View style={{ flexDirection: "row", marginTop: 150 }}>
          <Footer textoFooter={"Não cadastrado?\n"} footerOption={FooterOption.CADASTRO} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9C121E",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopEndRadius: 50,
    paddingStart: 40,
    paddingEnd: 40,
    paddingTop: 50,
    alignItems: "center"
  },
  errorText: {
    color: "red",
    marginBottom: 10
  },
})
