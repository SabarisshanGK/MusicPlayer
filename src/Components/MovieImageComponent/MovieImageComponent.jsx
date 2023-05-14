import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, width} from '../../../assets/Theme/colors';

const MovieImageComponent = ({item, image}) => {
  return (
    <Animated.View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
      </View>
    </Animated.View>
  );
};

export default MovieImageComponent;

const styles = StyleSheet.create({
  imageContainer: {
    height: 340,
    width: 300,
    marginBottom: 25,
    shadowColor: colors.blue,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.6,
    backgroundColor: colors.primaryColor,
    borderRadius: 15,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
