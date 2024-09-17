import { useRouter } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import { StepIndicator } from "@/components/Anamnese/AnamneseStepIndicator"
import { PaginationButtons } from "@/components/Anamnese/NextPrevButtons"
import { useAnamnesis } from "@/context/AmnesisContext"

import { InputNumber } from "./InputNumber"

export default function AnamneseAltura() {
  const router = useRouter()
  const { setAnamnesisData } = useAnamnesis()
  const [altura, setAltura] = useState("")

  const handlePreviousPress = () => {
    router.push("/anamnesis/genero")
  }

  const handleNextPress = () => {
    if (altura) {
      setAnamnesisData({ altura })
      router.push("/anamnesis/peso")
    } else {
      alert("Por favor adicione sua altura")
    }
  }
  return (
    <View style={styles.containerPage}>
      <StepIndicator totalSteps={8} currentStep={3} />
      <View style={styles.containerContent}>
        <Text style={styles.mainText}>Qual a sua altura?</Text>
        <View style={styles.containerButtons}>
          <InputNumber
            value={altura}
            setNumber={setAltura}
            placeholder={"Digite sua altura em (m)"}
            maxNumber={2.4}
            maxNumberErrorMessage="Você é muito grande, até demais 👀"
          />
        </View>
      </View>
      <View style={styles.containerPagination}>
        <PaginationButtons
          showNext={true}
          showPrevious={true}
          onPreviousPress={() => handlePreviousPress()}
          onNextPress={() => handleNextPress()}
        />
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
    flexShrink: 1,
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
