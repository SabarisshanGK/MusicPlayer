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
import CustomButton from '../Components/CustomButton/CustomButton';

const OTPScreen = () => {
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

        {/* Title Section  */}

        <View style={styles.titleContainer}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            OTP has been sent to the Email. Please check your Email for
            verification Code
          </Text>
        </View>

        {/* Input Section */}

        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <View style={styles.textInput}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={{color: colors.white, fontSize: 28}}
                maxLength={1}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={{color: colors.white, fontSize: 28}}
                maxLength={1}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={{color: colors.white, fontSize: 28}}
                maxLength={1}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={{color: colors.white, fontSize: 28}}
                maxLength={1}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={{color: colors.white, fontSize: 28}}
                maxLength={1}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={{color: colors.white, fontSize: 28}}
                maxLength={1}
              />
            </View>
          </View>
        </View>

        {/* Button */}

        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomButton
            text="Verify"
            onPress={() => navigation.navigate('UpdatePassword')}
          />
        </View>

        {/* Resend */}

        <View style={{marginTop: 50}}>
          <TouchableOpacity>
            <Text
              style={{
                color: colors.grey,
                textAlign: 'center',
                textDecorationLine: 'underline',
              }}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OTPScreen;

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
    textAlign: 'center',
    maxWidth: '70%',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: (width / 2) * 1.1,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  textInput: {
    width: 50,
    height: 50,
    backgroundColor: colors.lightBlack,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
