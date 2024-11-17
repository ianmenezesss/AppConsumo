import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CongratulationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.congratulationsText}>Parabéns!</Text>
      <Text style={styles.completeProfileText}>Perfil completo</Text>
      <Text style={styles.greenConsumerText}>Você é um consumidor verde experiente!</Text>

      {/* Substituir pela imagem anexada */}
      <Image 
        source={require('./arvore3(144px).png')} // Certifique-se de salvar a imagem no mesmo diretório ou ajuste o caminho
        style={styles.image} 
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui para continuar usando o nosso app</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  congratulationsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 5,
  },
  completeProfileText: {
    fontSize: 18,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 15,
  },
  greenConsumerText: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CongratulationsScreen;