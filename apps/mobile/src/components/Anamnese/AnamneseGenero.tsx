import { StyleSheet, Text, View } from "react-native"

import { StepIndicator } from "@/components/Anamnese/AnamneseStepIndicator"
import { CardFlex } from "@/components/Anamnese/CardFlex"
import { PaginationButtons } from "@/components/Anamnese/NextPrevButtons"

export default function AnamneseGenero() {
  return (
    <View style={styles.containerPage}>
      <StepIndicator totalSteps={8} currentStep={2} />
      <View style={styles.containerContent}>
        <Text style={styles.mainText}>Qual o seu sexo?</Text>
        <View style={styles.containerButtons}>
          <CardFlex selected={false} content="Masculino" />
          <CardFlex selected={true} content="Feminino" />
        </View>
      </View>
      <View style={styles.containerPagination}>
        <PaginationButtons showNext={true} showPrevious={true} />
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
