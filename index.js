import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DocumentScreen() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime(); // Atualizar imediatamente
    const interval = setInterval(updateTime, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Voltar')}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{currentTime}</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </View>
        <Text style={styles.title}>Documento</Text>
        <Text style={styles.description}>
          Você sabia que pequenas mudanças no dia a dia podem fazer uma grande diferença? Experimente usar sacolas reutilizáveis em vez de plásticos...
        </Text>
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => alert('Favoritar')}>
          <Text style={styles.footerButton}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentButton} onPress={() => alert('Comentar')}>
          <Text style={styles.commentButtonText}>Comentário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  backButton: {
    fontSize: 18,
    color: '#000',
  },
  headerText: {
    fontSize: 16,
    color: '#000',
  },
  headerPlaceholder: {
    width: 24,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    tintColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerButton: {
    fontSize: 24,
    color: '#666',
  },
  commentButton: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  commentButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
