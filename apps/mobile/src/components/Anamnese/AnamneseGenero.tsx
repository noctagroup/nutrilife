import { useRouter } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import { StepIndicator } from "@/components/Anamnese/AnamneseStepIndicator"
import { CardFlex } from "@/components/Anamnese/CardFlex"
import { PaginationButtons } from "@/components/Anamnese/NextPrevButtons"
import { useAnamnesis } from "@/context/AmnesisContext"

export default function AnamneseGenero() {
  const router = useRouter()
  const { setAnamnesisData } = useAnamnesis()

  const [genero, setGenero] = useState("Masculino")

  const handlePress = () => {
    setAnamnesisData({ gender: genero })
    router.push("/anamnesis/teste")
  }

  return (
    <View style={styles.containerPage}>
      <StepIndicator totalSteps={8} currentStep={2} />
      <View style={styles.containerContent}>
        <Text style={styles.mainText}>Qual o seu sexo?</Text>
        <View style={styles.containerButtons}>
          {/* Set the correct "selected" prop based on the value of "genero" */}
          <CardFlex
            selected={genero === "Masculino"}
            content="Masculino"
            onPress={() => setGenero("Masculino")}
          />
          <CardFlex
            selected={genero === "Feminino"}
            content="Feminino"
            onPress={() => setGenero("Feminino")}
          />
        </View>
      </View>
      <View style={styles.containerPagination}>
        <PaginationButtons showNext={true} showPrevious={true} onNextPress={handlePress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: "space-between"
  },
  containerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F4F4F4",
    gap: 20
  },
  containerButtons: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  containerPagination: {
    height: 100,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20
  },
  mainText: {
    fontSize: 24,
    textAlign: "center",
    width: "100%"
  }
})
