import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false); // État pour suivre la visibilité du mot de passe
  const navigation = useNavigation(); // Récupération de la navigation

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backImage}
          source={require("./assets/log.jpg")}
          resizeMode="cover"
        >
          <View style={styles.content}>
            {/* Titre et sous-titre */}
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.subtitle}>Please sign in to continue</Text>

            {/* Champ pour l'email */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#808080"
            />

            {/* Champ pour le mot de passe avec l'icône d'œil */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#808080"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Ionicons
                  name={passwordVisible ? 'eye' : 'eye-off'}
                  size={24}
                  color="#808080"
                />
              </TouchableOpacity>
            </View>

            {/* Bouton de connexion */}
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Lien pour mot de passe oublié */}
            <TouchableOpacity  onPress={() => navigation.navigate('forgot')}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* Lien Sign Up en bas de la page */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={styles.signUpText}>Sign up</Text>
              </TouchableOpacity>
            </Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFD700', // Couleur jaune
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#808080',
    fontSize: 16,
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
