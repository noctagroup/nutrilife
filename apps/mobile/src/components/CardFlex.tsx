import { StyleSheet, Text, View } from "react-native"

export function CardFlex({ content, selected }: { content: string; selected: boolean }) {
  return (
    <View style={[styles.card, selected && styles.selectedCard]}>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "100%",
    height: 80,
    borderRadius: 15,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#9C121E"
  },
  content: {
    width: "100%",
    fontWeight: "bold",
    textAlign: "center"
  }
})
