import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.profileImage} />
      </View>

      {/* Settings Options */}
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionIcon}>🔔</Text>
          <Text style={styles.optionText}>Notificação</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionIcon}>👤</Text>
          <Text style={styles.optionText}>Dados pessoais</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionIcon}>ℹ️</Text>
          <Text style={styles.optionText}>Sobre</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionIcon}>❓</Text>
          <Text style={styles.optionText}>Ajuda</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionIcon}>🚪</Text>
          <Text style={styles.optionText}>Sair</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DDD',
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  optionIcon: {
    fontSize: 18,
    width: 30,
    textAlign: 'center',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  arrowIcon: {
    fontSize: 18,
    color: '#AAA',
  },
});