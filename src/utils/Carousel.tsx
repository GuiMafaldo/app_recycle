import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import { ImageItem } from '../interfaces/interfaces';

const { width: viewportWidth } = Dimensions.get('window');

const images: ImageItem[] = [
  { uri: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+1', alt: 'Red placeholder image with text Image 1' },
  { uri: 'https://via.placeholder.com/300/00FF00/FFFFFF?text=Image+2', alt: 'Green placeholder image with text Image 2' },
  { uri: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Image+3', alt: 'Blue placeholder image with text Image 3' },
  { uri: 'https://via.placeholder.com/300/FFFF00/FFFFFF?text=Image+4', alt: 'Yellow placeholder image with text Image 4' },
  { uri: 'https://via.placeholder.com/300/FF00FF/FFFFFF?text=Image+5', alt: 'Pink placeholder image with text Image 5' },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToPrevious} style={[styles.button, styles.leftButton]}>
        <View>
          <Text style={styles.buttonText}>{'<'}</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={{ uri: images[currentIndex].uri }}
        style={styles.image}
        accessibilityLabel={images[currentIndex].alt}
      />
      <TouchableOpacity onPress={goToNext} style={[styles.button, styles.rightButton]}>
        <View>
          <Text style={styles.buttonText}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: viewportWidth - 40,
    height: 300,
    borderRadius: 10,
    top: -90,
  },
  button: {
    position: 'absolute',
    top: '53%',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    left: 10,
    zIndex: 1,
  },
  rightButton: {
    right: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 150,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: 'white',
  },
});

export default Carousel;