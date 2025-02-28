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

// Note the added destructuring: { navigation }
export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleOTPVerificationScreen = () => {
    // Now you can navigate properly
    navigation.navigate('OTPVerification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />

      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>Logo Here</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Enter your email address to reset your password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleOTPVerificationScreen}>
          <Text style={styles.sendButtonText}>Send</Text>
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
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
