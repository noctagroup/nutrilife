import { StyleSheet, View } from "react-native"

import Footer, { FooterOption } from "./Footer"
import Header from "./Header"
import InputLogin from "./InputLogin"
import OutlinedButton from "./OutlineButton"
import RedButton from "./RedButton"

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
  }
})
