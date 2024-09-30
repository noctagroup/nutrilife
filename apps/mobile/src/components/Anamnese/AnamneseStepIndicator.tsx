import { StyleSheet, View } from "react-native"

interface StepIndicatorProps {
  totalSteps: number
  currentStep: number
}

export function StepIndicator({ totalSteps, currentStep }: StepIndicatorProps) {
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <View style={styles.container}>
      {stepsArray.map((step) => (
        <View key={step} style={[styles.circle, currentStep >= step && styles.activeCircle]} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 30
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#FFFFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4
  },
  activeCircle: {
    backgroundColor: "#9C121E"
  }
})
