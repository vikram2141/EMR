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

export default function CreateNewPasswordScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleToggleNewPassword = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  const handleToggleConfirmPassword = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleResetPassword = () => {
    // TODO: Implement your reset password logic here
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>Logo Here</Text>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>
          Set the new password for your account so you can login and access all the features
        </Text>

        {/* New Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter New Password"
            placeholderTextColor="#999"
            secureTextEntry={!isNewPasswordVisible}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity onPress={handleToggleNewPassword} style={styles.eyeIcon}>
            <Text style={{ color: '#007bff' }}>
              {isNewPasswordVisible ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry={!isConfirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={handleToggleConfirmPassword} style={styles.eyeIcon}>
            <Text style={{ color: '#007bff' }}>
              {isConfirmPasswordVisible ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Reset Password Button */}
        <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
          <Text style={styles.resetButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

//-------------------------------------------
// Styles
//-------------------------------------------
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 15,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    marginRight: 10,
  },
  resetButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
