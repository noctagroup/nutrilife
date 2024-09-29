import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { StepIndicator } from "@/components/Anamnese/AnamneseStepIndicator";
import { useAnamnesis } from "@/context/AmnesisContext";

export default function AnamneseAtividade() {
  const router = useRouter();
  const { anamnesisData, setAnamnesisData } = useAnamnesis();

  const [atividade, setAtividade] = useState(
    anamnesisData.atividade ? anamnesisData.atividade : "Leve"
  );

  return (
    <View style={styles.containerPage}>
      {/* Saudação */}
      <Text style={styles.greetingText}>
        Olá, <Text style={styles.userName}>Usuario!</Text>
      </Text>

      {/* Progresso de Calorias */}
      <View style={styles.caloriesInfoContainer}>
        <Text style={styles.consumedText}>Você consumiu</Text>
        <Text style={styles.caloriesText}>2.000kcal</Text>
        <Text style={styles.consumedText}>hoje</Text>
        <Text style={styles.dailyGoalText}>
          Sua meta diaria é <Text style={styles.goalText}>3000kcal</Text>
        </Text>
      </View>

      {/* Próxima refeição */}
      <View style={styles.containerContent}>
        <Text style={styles.mainText}>Próxima refeição:</Text>
        <View style={styles.containerButtons}>
          {/* CardFlexImage Customizado */}
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardTitle}>Almoço</Text>
              <Image
                source={require("../../assets/images/Breakfast.svg")}
                style={styles.cardImage}
              />
            </View>

            <View style={styles.cardRight}>
              <Text style={styles.cardContent}>
                Arroz, Feijão, Salada de tomate, frango empanado
              </Text>
              {/* Calorias e horário */}
              <View style={styles.cardFooter}>
                <Text style={styles.cardFooterText}>
                  546 <Text style={styles.kcalText}>Kcal</Text>
                </Text>
                <Text style={styles.kcalText}>12:40</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Botão Adicionar Consumo */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Adicionar Consumo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: "flex-start",
  },
  greetingText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  userName: {
    color: "#C60000",
  },
  caloriesInfoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  consumedText: {
    fontSize: 16,
    color: "#000",
  },
  caloriesText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#C60000",
  },
  dailyGoalText: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
  goalText: {
    fontWeight: "bold",
  },
  containerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F4F4F4",
    gap: 20,
  },
  containerButtons: {
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    width: "100%",
    gap: 15,
  },
  mainText: {
    fontSize: 24,
    textAlign: "left",
    width: "100%",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },
  cardLeft: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  cardRight: {
    flex: 1,
    justifyContent: "flex-start",
  },
  cardContent: {
    fontSize: 16,
    color: "#000",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardFooterText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
  kcalText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#9c121e",
  },
  addButton: {
    backgroundColor: "#C60000",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
