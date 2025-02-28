import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import OTPVerificationScreen from './src/Screens/OTPVerificationScreen';
import CreateNewPasswordScreen from './src/Screens/CreateNewPasswordScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import DataCollect from './src/Screens/DataCollect';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Data Collect" component={DataCollect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
