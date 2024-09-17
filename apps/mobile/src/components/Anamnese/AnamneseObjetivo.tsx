import { StyleSheet, Text, View } from "react-native"

import { StepIndicator } from "@/components/Anamnese/AnamneseStepIndicator"
import { CardFlexImage } from "@/components/Anamnese/CardFlexImage"
import { PaginationButtons } from "@/components/Anamnese/NextPrevButtons"

export default function AnamneseObjetivo() {
  return (
    <View style={styles.containerPage}>
      <StepIndicator totalSteps={8} currentStep={5} />
      <View style={styles.containerContent}>
        <Text style={styles.mainText}>Qual o seu objetivo?</Text>
        <View style={styles.containerButtons}>
          <CardFlexImage
            title={"Emagrecer"}
            content={"Perder peso de forma saudável"}
            selected={true}
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            image={require("../../assets/images/emagrecer.svg")}
          />
          <CardFlexImage
            title={"Manter o peso"}
            content={"Manter o peso com saúde"}
            selected={false}
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            image={require("../../assets/images/manterpeso.svg")}
          />
          <CardFlexImage
            title={"Ganhar peso"}
            content={"Aumentar a massa magra"}
            selected={false}
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            image={require("../../assets/images/ganharpeso.svg")}
          />
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
