import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/Theme/colors';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import CustomButton from '../Components/CustomButton/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Title */}

        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Hello!</Text>
          <Text style={styles.text}>Welcome to my music</Text>
        </View>

        {/* Login Form */}

        <View style={styles.textInputContainer}>
          <View style={styles.textInput}>
            <FontAwesome5 name="user" size={24} color={colors.white} />
            <TextInput
              placeholder="User Name"
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
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{color: colors.blue, marginLeft: 200}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Button */}

        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomButton
            text="Sign In"
            onPress={() => navigation.navigate('MusicPlayer')}
          />
        </View>

        {/* Apple */}

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 50,
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

        {/* new user */}

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'center',
            marginTop: 210,
          }}>
          <Text style={{color: colors.white}}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{color: colors.lightBlue}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

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
