import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, width, height} from '../../assets/Theme/colors';
import {ImageBackground} from 'react-native';
import {FlatList} from 'react-native';
import OnboardList from '../../assets/Datas/OnboardList';
import OnboardSlide from '../Components/OnboardingSlides/OnboardSlide';
import CustomButton from '../Components/CustomButton/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Animated} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const updateCurrentIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const current = Math.round(contentOffsetX / width);
    setCurrentIndex(current);
  };

  const goToNextSlide = () => {
    const nextSlideindex = currentIndex + 1;
    if (nextSlideindex != OnboardList.length) {
      const offset = nextSlideindex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentIndex(nextSlideindex);
    }
  };

  const skip = () => {
    const lastSlideIndex = OnboardList.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentIndex(lastSlideIndex);
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={OnboardList}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={updateCurrentIndex}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        pagingEnabled
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [80, 0, 80],
          });
          return (
            <OnboardSlide
              item={item}
              onPress={skip}
              opacity={opacity}
              translateY={translateY}
            />
          );
        }}
      />
      <View style={{position: 'absolute', bottom: 130, alignSelf: 'center'}}>
        {currentIndex === OnboardList.length - 1 ? (
          <CustomButton
            text={'Get Started'}
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        ) : (
          <CustomButton text={'Next'} onPress={goToNextSlide} />
        )}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              gap: 10,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <AntDesign name="apple1" size={24} color={colors.white} />
            <Text style={{color: colors.white, fontSize: 16}}>
              Login with Apple
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Dots Section */}
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          marginBottom: 80,
        }}>
        {OnboardList.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && {
                  backgroundColor: colors.lightBlue,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 25,

    backgroundColor: colors.grey,
  },
});
