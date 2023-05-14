import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {colors, width} from '../../assets/Theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CustomButton from '../Components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={24} color={colors.white} />
        </TouchableOpacity>

        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            Enter your email account to reset password
          </Text>
        </View>

        {/* Email text Input */}
        <View style={{alignItems: 'center', marginTop: 30}}>
          <View style={styles.textInput}>
            <Fontisto name="email" size={24} color={colors.white} />
            <TextInput
              placeholder=" Email"
              placeholderTextColor={colors.white}
              style={{color: colors.white, width: '80%'}}
            />
          </View>
        </View>

        {/* Button */}

        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomButton
            text="Send Code"
            onPress={() => navigation.navigate('OTP')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: colors.grey,
    marginTop: 50,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.white,
    opacity: 0.5,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: (width / 2) * 1.1,
  },
  textInput: {
    backgroundColor: colors.lightBlack,
    width: '90%',
    borderRadius: 30,
    alignItems: 'center',
    gap: 20,
    flexDirection: 'row',
    padding: 20,
  },
});
