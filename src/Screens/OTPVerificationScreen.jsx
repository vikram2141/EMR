import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';

// Pass { navigation } so we can call navigation.navigate(...)
export default function OTPVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // TODO: Add your OTP verification logic here
    console.log('OTP Entered:', otp);
  };

  const handleResendCode = () => {
    // For demonstration, this navigates to CreateNewPassword
    // Typically, "Resend Code" would actually re-send the OTP,
    // but you can adjust as needed.
    navigation.navigate('CreateNewPassword');
    console.log('Resend OTP Code');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />

      {/* Header / Logo Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>Logo Here</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit code we sent to your phone or email
        </Text>

        {/* OTP Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter OTP Code"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={6} // Adjust if your OTP length differs
          value={otp}
          onChangeText={setOtp}
        />

        {/* Verify Button */}
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend Code Link */}
        <TouchableOpacity style={styles.resendContainer} onPress={handleResendCode}>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#007bff',
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
    textAlign: 'center', // center the OTP digits
  },
  verifyButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resendContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
  resendText: {
    color: '#007bff',
    fontWeight: '600',
    fontSize: 14,
  },
});
