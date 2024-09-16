import React from "react"
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"

import InputLogin from "./InputLogin"
import RedButton from "./RedButton"
import Header from "./Header"
import OutlinedButton from "./OutlineButton"
import Footer from "./Footer"

export default function FormularioLogin() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.whiteContainer}>
        <InputLogin placeholder="Digite seu email" />
        <InputLogin placeholder="Digite sua senha" />
        <RedButton />
        <OutlinedButton buttonText={`Login pelo\nGoogle`} />
        <View style={{ flexDirection: "row", marginTop: 150 }}>
          <Footer />
        </View >
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
