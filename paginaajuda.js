import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function HelpPage() {
  // Dados das fases
  const phases = [
    { title: "Consumidor Iniciante", image: require('./arvore0(144px).png') },
    { title: "Consumidor Verde", image: require('./arvore1(144px).png') },
    { title: "Consumidor Verde Responsável", image: require('./arvore2(144px).png') },
    { title: "Consumidor Verde Experiente", image: require('./arvore3(144px).png') },
    { title: "Consumidor Ostentador", image: require('./arvore1.1(144px).png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.arrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Ajuda</Text>
      </View>

      {/* Lista de fases */}
      <View style={styles.phaseList}>
        {phases.map((phase, index) => (
          <View key={index} style={styles.phaseItem}>
            <Image source={phase.image} style={styles.phaseImage} />
            <Text style={styles.phaseTitle}>{phase.title}</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>?</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Texto explicativo */}
      <View style={styles.faqSection}>
        <Text style={styles.faqTitle}>O que são essas árvores?</Text>
        <Text style={styles.faqText}>
          São representações de sua própria progressão.
        </Text>

        <Text style={styles.faqTitle}>O que cada fase significa?</Text>
        <Text style={styles.faqText}>
          Significa que, ao longo do tempo, você desenvolveu suas habilidades e
          boas práticas para avançar!
        </Text>

        <Text style={styles.faqTitle}>Posso trocar a fase que estou?</Text>
        <Text style={styles.faqText}>
          Não, você não pode fazer isso.
        </Text>

        <Text style={styles.faqTitle}>Como avanço para a próxima árvore?</Text>
        <Text style={styles.faqText}>
          Com o quiz! E tomando atitudes ambientalmente responsáveis com a ajuda do nosso app.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  arrow: {
    fontSize: 24,
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  phaseList: {
    marginTop: 20,
  },
  phaseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  phaseImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  phaseTitle: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  infoButton: {
    backgroundColor: "#E0E0E0",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  infoIcon: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  faqSection: {
    marginTop: 30,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  faqText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
});