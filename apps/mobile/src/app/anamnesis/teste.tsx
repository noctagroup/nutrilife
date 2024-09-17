import { Text, View } from "react-native"

import { useAnamnesis } from "@/context/AmnesisContext"

export default function teste() {
  const { anamnesisData } = useAnamnesis()

  return (
    <View>
      <Text>Data Nascimento: {anamnesisData.dateOfBirth}</Text>
      <Text>Sexo: {anamnesisData.gender} </Text>
    </View>
  )
}
