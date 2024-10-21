import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Forgot() {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {
    // Add logic to handle the "Next" action (e.g., navigate to OTP verification)
    console.log('Next pressed with value:', inputValue);
    // navigation.navigate('NextScreen'); // Uncomment and replace 'NextScreen' with the actual screen name
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
             <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        source={require("./assets/log.jpg")}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            Email address associated with your account
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.signUpText}>Sign in</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    justifyContent: 'center',
    
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
      height: 50,
      backgroundColor: '#F0F0F0',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFD700', // Couleur jaune
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    position: 'absolute', // Positionnement absolu pour le placer en bas
    bottom: 20, // Marge par rapport au bas de l'écran
    width: '100%',
    justifyContent: 'center',
  },
  footerText: {
    color: '#000',
    fontSize: 14,
  },
  signUpText: {
    color: '#FFD700', // Couleur bleue pour le lien Sign up
    textDecorationLine: 'underline',
  },
});
