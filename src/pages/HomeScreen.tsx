import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MyCarousel from '../components/Carousel';



type RecycleType = {
  id: string;
  type: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
};

const recycleTypes: RecycleType[] = [
  { id: '1', type: 'Papel', icon: 'newspaper-outline', color: '#3498db' },
  { id: '2', type: 'Plástico', icon: 'water-outline', color: '#e74c3c' },
  { id: '3', type: 'Vidro', icon: 'wine-outline', color: '#2ecc71' },
  { id: '4', type: 'Metal', icon: 'hardware-chip-outline', color: '#f39c12' },
  { id: '5', type: 'Orgânico', icon: 'leaf-outline', color: '#8e44ad' },
  { id: '6', type: 'Eletrônico', icon: 'phone-portrait-outline', color: '#34495e' },
];

const RecycleCard: React.FC<{ item: RecycleType }> = ({ item }) => (
  <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
      <Ionicons name={item.icon} size={40} color="white" />
      <Text style={styles.cardText}>{item.type}</Text>
  </TouchableOpacity>
);

export default function HomeScreen() {
 
  return (
    <SafeAreaView style={styles.containerSafeArea}>
        <MyCarousel />
        <View style={styles.contentText}>
            <Text style={styles.text}>Tipos de Reciclaveis</Text>
        </View>
        <View style={styles.contentViewGrid}>
        <FlatList
          data={recycleTypes}
          renderItem={({ item }) => <RecycleCard item={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 100,
  },
  contentText: {
    height: 10
  },
  text: {
    fontSize: 28,
    color: '#2c3e50',
    top: -40,
    fontWeight: 'bold',
    height: 40
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 150,
    top: 0,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardText: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentViewGrid: {
    flex: 1,
    width: '100%',
    marginTop: 30,
    backgroundColor: '#f0f0f0',
  },
  grid: {
    paddingHorizontal: 10,
  },
});