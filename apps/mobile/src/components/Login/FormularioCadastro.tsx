import { StyleSheet, View } from "react-native"

import { useCadastro } from "@/context/CadastroContext"

import Footer, { FooterOption } from "./Footer"
import Header from "./Header"
import InputLogin from "./InputLogin"
import OutlinedButton from "./OutlineButton"
import RedButton from "./RedButton"

export default function FormularioCadastro() {
  const { dados, setDados } = useCadastro()

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.whiteContainer}>
        <InputLogin
          value={dados.nome}
          onChangeText={(text: string) => setDados({ ...dados, nome: text })}
          placeholder="Nome"
          isPassword={false}
        />
        <InputLogin
          value={dados.sobrenome}
          onChangeText={(text: string) => setDados({ ...dados, sobrenome: text })}
          placeholder="Sobrenome"
          isPassword={false}
        />
        <InputLogin
          value={dados.email}
          onChangeText={(text: string) => setDados({ ...dados, email: text })}
          placeholder="Email"
          isPassword={false}
        />
        <InputLogin
          value={dados.senha}
          onChangeText={(text: string) => setDados({ ...dados, senha: text })}
          placeholder="Senha"
          isPassword={true}
        />
        <InputLogin
          value={dados.senha_confirma}
          onChangeText={(text: string) => setDados({ ...dados, senha_confirma: text })}
          placeholder="Confirmar Senha"
          isPassword={true}
        />
        <RedButton />
        <OutlinedButton buttonText={`Cadastro pelo\nGoogle`} />
        <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
          <Footer textoFooter={"Ja cadastrado?"} footerOption={FooterOption.LOGIN} />
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
