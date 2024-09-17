import { useRouter } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import { StepIndicator } from "@/components/Anamnese/AnamneseStepIndicator"
import { InputData } from "@/components/Anamnese/InputData"
import { PaginationButtons } from "@/components/Anamnese/NextPrevButtons"
import { useAnamnesis } from "@/context/AmnesisContext"

export default function AnamneseDataNascimento() {
  const router = useRouter()
  const { setAnamnesisData } = useAnamnesis()

  // Lift the date state to AnamneseDataNascimento
  const [dataNasc, setDataNasc] = useState("")

  const handlePress = () => {
    if (dataNasc) {
      setAnamnesisData({ dataNasc })
      router.push("/anamnesis/genero")
    } else {
      alert("Por favor, adicione sua data de nascimento")
    }
  }

  return (
    <View style={styles.containerPage}>
      <StepIndicator totalSteps={8} currentStep={1} />
      <View style={styles.containerContent}>
        <Text style={styles.mainText}>Qual a sua data de nascimento?</Text>
        <View style={styles.containerButtons}>
          {/* Pass the state and setter to the InputData component */}
          <InputData selected={true} date={dataNasc} setDate={setDataNasc} />
        </View>
      </View>
      <View style={styles.containerPagination}>
        <PaginationButtons showNext={true} showPrevious={false} onNextPress={handlePress} />
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
    flexShrink: 1, // Allow shrinking based on its content
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    width: "100%",
    gap: 15
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
    textAlign: "left",
    width: "100%"
  }
})
