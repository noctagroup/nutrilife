import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface PaginationButtonsProps {
  showNext?: boolean
  showPrevious?: boolean
  onNextPress?: () => void
  onPreviousPress?: () => void
}

export function PaginationButtons({
  showNext = false,
  showPrevious = false,
  onNextPress,
  onPreviousPress
}: PaginationButtonsProps) {
  return (
    <View style={styles.container}>
      {showPrevious && (
        <TouchableOpacity style={styles.button} onPress={onPreviousPress}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
      )}
      {showNext && (
        <TouchableOpacity style={styles.button} onPress={onNextPress}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    height: 60,
    width: 60,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "200",
    color: "#9C121E",
    textAlign: "center"
  }
})
