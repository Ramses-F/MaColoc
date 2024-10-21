import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) { // Ajoute 'navigation' pour utiliser la navigation
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        resizeMode="cover"
        source={require("./assets/backh.jpg")} // Assure-toi que l'image de fond est dans le bon chemin
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>MaColoc</Text>
            <View style={styles.centeredText}>
              <Text style={styles.welcomeText}>Welcome back to</Text>
              <Text style={styles.serviceText}>MaColoc Service</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('login')}>
                <Text style={styles.loginButtonText}>Connexion</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('register')}>
                <Text style={styles.googleButtonText}>Inscription</Text>
              </TouchableOpacity>
            </View>

            {/* Lien Sign Up */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                Don't have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                  <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
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
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  centeredText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#000',
  },
  serviceText: {
    fontSize: 24,
    color: '#000',
    marginBottom: 30,
  },
  buttonsContainer: {
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  googleButtonText: {
    color: '#000',
    fontSize: 18,
  },
  footerContainer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#000',
    fontSize: 14,
  },
  signUpText: {
    color: '#FFD700', 
    textDecorationLine: 'underline',
  },
});
