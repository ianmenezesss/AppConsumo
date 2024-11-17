import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'; // Biblioteca de ícones para React Native

const ProfileScreen = () => {
  // Dados simulados para postagens
  const posts = ['#FF0000', '#00FF00', '#FF00FF', '#8B4513', '#FFD700', '#00FFFF'];

  const renderPost = ({ item }) => (
    <View style={[styles.post, { backgroundColor: item }]} />
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Background Img</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Perfil do Usuário */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Imagem de perfil genérica
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Jonathan Doe (@john.doe)</Text>
        <View style={styles.userInfo}>
          <MaterialIcons name="location-on" size={16} color="#000" />
          <Text style={styles.userLocation}>Barueri, SP</Text>
        </View>
        <Text style={styles.greenConsumer}>Consumidor Verde</Text>
      </View>

      {/* Postagens */}
      <Text style={styles.postsTitle}>Postagens</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.postsContainer}
      />

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="albums-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://via.placeholder.com/30' }} // Ícone de árvore genérico
            style={styles.treeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLocation: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  greenConsumer: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  postsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  postsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Espaço para a barra de navegação inferior
  },
  post: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFFFFF',
  },
  treeIcon: {
    width: 30,
    height: 30,
  },
});

export default ProfileScreen;