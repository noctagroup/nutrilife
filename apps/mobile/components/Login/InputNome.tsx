import React from "react"
import { StyleSheet, TextInput, View } from "react-native"

export default function InputNomeSobrenome() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={[styles.input, styles.inputHalf]} />
      <TextInput placeholder="Sobrenome" style={[styles.input, styles.inputHalf]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribui o espaço uniformemente entre os inputs
    width: "100%",
    marginBottom: 30
  },
  input: {
    height: 50,
    paddingStart: 10,
    borderBottomColor: "#9C121E",
    borderBottomWidth: 3,
    color: "#8F898D",
    fontSize: 14
  },
  inputHalf: {
    width: "48%"
  }
})
