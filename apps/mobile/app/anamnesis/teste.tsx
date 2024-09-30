import { Text, View } from "react-native"

import { useAnamnesis } from "@/context/AmnesisContext"

export default function teste() {
  const { anamnesisData } = useAnamnesis()

  return (
    <View>
      <Text>Data Nascimento: {anamnesisData.dataNasc}</Text>
      <Text>Sexo: {anamnesisData.genero} </Text>
      <Text>Altura: {anamnesisData.altura} </Text>
      <Text>Peso: {anamnesisData.peso}</Text>
      <Text>Objetivo: {anamnesisData.objetivo}</Text>
      <Text>Atividade: {anamnesisData.atividade}</Text>
    </View>
  )
}
