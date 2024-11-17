import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones para React Native

const NotificationScreen = () => {
  // Dados simulados de notificações
  const notifications = [
    { id: '1', message: 'Você tem uma nova mensagem.' },
    { id: '2', message: 'Atualização disponível para o aplicativo.' },
    { id: '3', message: 'Seu pedido foi enviado.' },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Notificações</Text>
      </View>

      {/* Lista de Notificações */}
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notificationList}
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
            source={require('./arvore1(144px).png')} // Caminho da imagem da árvore
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
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationList: {
    padding: 20,
  },
  notificationItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
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

export default NotificationScreen;