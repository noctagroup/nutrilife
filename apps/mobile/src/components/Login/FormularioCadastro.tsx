import React from "react"
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"

import Footer from "./Footer"
import Header from "./Header"
import InputLogin from "./InputLogin"
import InputNome from "./InputNome"
import OutlinedButton from "./OutlineButton"
import RedButton from "./RedButton"

export default function FormularioCadastro() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.whiteContainer}>
        <InputNome placeholder="Nome" />
        <InputLogin placeholder="Email" />
        <InputLogin placeholder="Senha" />
        <InputLogin placeholder="Confirmar Senha" />
        <RedButton />
        <OutlinedButton buttonText={`Cadastro pelo\nGoogle`} />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Footer />
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
  }
})
