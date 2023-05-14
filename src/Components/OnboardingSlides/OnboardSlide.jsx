import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {colors, width} from '../../../assets/Theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';

import {Animated} from 'react-native';

const OnboardSlide = ({item, onPress, opacity, translateY}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        style={styles.imageBackground}
        resizeMode="cover">
        <TouchableOpacity style={styles.skipButton} onPress={onPress}>
          <Text style={{color: colors.white}}>Skip</Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent', '#0C081C']}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 150,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Animated.Text
            style={[
              styles.title,
              {opacity: opacity, transform: [{translateY: translateY}]},
            ]}>
            {item.title}
          </Animated.Text>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default OnboardSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: width,
    height: 530,
  },
  skipButton: {
    backgroundColor: colors.grey,
    marginTop: 50,

    marginLeft: 'auto',
    marginRight: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    color: colors.white,
    fontSize: 30,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.white,
    maxWidth: '60%',
    opacity: 0.5,
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
