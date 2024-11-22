import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RecycleType } from '../../types/types';

interface RecycleCardProps {
  item: RecycleType;
  onPress: (item: RecycleType) => void;
}

const RecycleCard: React.FC<RecycleCardProps> = ({ item, onPress }) => (
  <TouchableOpacity 
    style={[styles.card, { backgroundColor: item.color }]}
    onPress={() => onPress(item)}
  >
    <Ionicons name={item.icon} size={40} color="white" />
    <Text style={styles.cardText}>{item.type}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 150,
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
});

export default RecycleCard;

