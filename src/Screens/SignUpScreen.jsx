import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/Theme/colors';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../Components/CustomButton/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Let s started */}

        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Lets Get Start</Text>
          <Text style={styles.text}>
            Please fill the details and create account
          </Text>
        </View>

        {/* User Name */}

        <View style={styles.textInputContainer}>
          <View style={styles.textInput}>
            <FontAwesome5 name="user" size={24} color={colors.white} />
            <TextInput
              placeholder="User Name"
              placeholderTextColor={colors.white}
              style={{color: colors.white, width: '80%'}}
            />
          </View>

          {/* Email */}
          <View style={styles.textInput}>
            <Fontisto name="email" size={24} color={colors.white} />
            <TextInput
              placeholder="Sign Up Email"
              placeholderTextColor={colors.white}
              style={{color: colors.white, width: '80%'}}
            />
          </View>

          {/* Password */}
          <View style={styles.textInput}>
            <MaterialCommunityIcons
              name="lock"
              size={24}
              color={colors.white}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={colors.white}
              style={{color: colors.white, width: '80%'}}
            />
          </View>
        </View>

        {/* Button */}

        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomButton
            text="Sign Up"
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>

        {/* Apple */}

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
              Using with Apple
            </Text>
          </View>
        </TouchableOpacity>

        {/* Google Sign Up */}

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../../assets/images/google.png')}
            style={{width: 50, height: 50}}
          />
          <Text style={{color: colors.white, fontSize: 16}}>
            Sign Up with Google
          </Text>
        </TouchableOpacity>

        {/* Already have an account  */}

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <Text style={{color: colors.white}}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{color: colors.lightBlue}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  textContainer: {
    marginTop: 130,

    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.white,
    fontSize: 30,
    letterSpacing: 1.1,
    fontWeight: '900',
  },
  text: {
    color: colors.grey,
    marginTop: 10,
    fontSize: 16,
  },
  textInputContainer: {
    marginTop: 20,
    alignItems: 'center',
    gap: 20,
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
