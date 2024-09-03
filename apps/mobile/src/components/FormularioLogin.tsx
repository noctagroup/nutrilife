import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import InputLogin from "./InputLogin"
import RedButton from "./RedButton"

export default function FormularioLogin() {
  return (
    <View style={{ backgroundColor: "#9C121E" }}>
      <Image
        source={require("../assets/images/logo-nutrilife.svg")}
        style={{ alignSelf: "center", marginBottom: 20, marginTop: 30 }}
      />
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopEndRadius: 50
        }}>
        <InputLogin placeholder="Digite seu email" />
        <InputLogin placeholder="Digite sua senha" />
        <RedButton/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingStart: 10,
    borderBottomColor: "#9C121E",
    borderBottomWidth: 3,
    marginBottom: 5,
    color: "#8F898D",
    fontSize: 16,
    marginStart: 30,
    marginEnd: 30
  },
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
