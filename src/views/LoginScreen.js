// views/LoginScreen.js

//This is the UI part. It connects to the ViewModel for state and behavior.

import React from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import { useLoginViewModel } from '../viewmodels/useLoginViewModel';

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
     setPassword,
    loading, error,
    login,
    result
  } = useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Text>{result?.token}</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={login} />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
