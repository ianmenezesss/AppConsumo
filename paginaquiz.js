import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function QuizPage() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1); // Número da pergunta atual
  const [questions] = useState([
    "Pergunta 1 (?)",
    "Pergunta 2 (?)",
    "Pergunta 3 (?)",
    "Pergunta 4 (?)",
  ]); // Lista de perguntas

  // Atualiza o horário em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  // Função para avançar para a próxima pergunta
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Função para voltar para a pergunta anterior
  const previousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>QUIZ</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>

      {/* Pergunta */}
      <Text style={styles.question}>{questions[currentQuestion - 1]}</Text>

      {/* Botões de opções */}
      <View style={styles.optionsContainer}>
        {["A", "B", "C", "D"].map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Navegação e botão Enviar */}
      <View style={styles.footer}>
        {/* Botão para voltar */}
        <TouchableOpacity onPress={previousQuestion}>
          <Text style={[styles.navigation, currentQuestion === 1 && styles.disabled]}>
            ←
          </Text>
        </TouchableOpacity>

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Enviar</Text>
        </TouchableOpacity>

        {/* Botão para avançar */}
        <TouchableOpacity onPress={nextQuestion}>
          <Text
            style={[
              styles.navigation,
              currentQuestion === questions.length && styles.disabled,
            ]}
          >
            →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
  },
  time: {
    fontSize: 16,
    color: "#FFD700",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginVertical: 20,
  },
  optionsContainer: {
    width: "100%",
    marginVertical: 20,
  },
  optionButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navigation: {
    fontSize: 24,
    color: "#FFD700",
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  submitText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  disabled: {
    color: "#D3D3D3", // Cor cinza para indicar desativado
  },
});