import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Biblioteca de ícones para React Native

const VideoDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Reaproveite o...</Text>
      </View>

      {/* Seção de Vídeo */}
      <View style={styles.videoContainer}>
        <View style={styles.videoPlaceholder}>
          <FontAwesome name="play" size={50} color="red" />
        </View>
      </View>

      {/* Texto Descritivo */}
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.descriptionText}>
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  videoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  videoPlaceholder: {
    width: 200,
    height: 100,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: '#FFD700',
    padding: 20,
    borderRadius: 10,
  },
  descriptionText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default VideoDetailsScreen;