import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from './src/Screens/OnboardingScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import SignInScreen from './src/Screens/SignInScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import OTPScreen from './src/Screens/OTPScreen';
import UpdatePasswordScreen from './src/Screens/UpdatePasswordScreen';
import MusicPlayer from './src/Screens/MusicPlayer';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen
            name="UpdatePassword"
            component={UpdatePasswordScreen}
          />
          <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
