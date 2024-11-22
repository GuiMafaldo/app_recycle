import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { ImageItem } from '../interfaces/interfaces';

const { width: viewportWidth } = Dimensions.get('window');

// Defina o array de imagens
const images: ImageItem[] = [
  { uri: require('../assets/image1.png'), alt: 'Red placeholder image with text Image 1' },
  { uri: require('../assets/image2.png'), alt: 'Green placeholder image with text Image 2' },
  { uri: require('../assets/image3.png'), alt: 'Blue placeholder image with text Image 3' },
  { uri: require('../assets/test1.jpg'), alt: 'Yellow placeholder image with text Image 4' },
  { uri: require('../assets/test2.jpg'), alt: 'Pink placeholder image with text Image 6' },
  { uri: require('../assets/test3.jpg'), alt: 'Pink placeholder image with text Image 7' },
  { uri: require('../assets/test4.jpg'), alt: 'Pink placeholder image with text Image 8' },
  { uri: require('../assets/test5.jpg'), alt: 'Pink placeholder image with text Image 9' },
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
    <View style={styles.container} testID="carousel-container">
      <TouchableOpacity onPress={goToPrevious} style={[styles.button, styles.leftButton]}>
        <View>
          <Text style={styles.buttonText}>{'<'}</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={typeof images[currentIndex].uri === 'string' ? { uri: images[currentIndex].uri } : images[currentIndex].uri}
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
    backgroundColor: '#fff',
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
    bottom: 120,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default Carousel;
