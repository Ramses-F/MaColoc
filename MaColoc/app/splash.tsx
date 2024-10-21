import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Reset the navigation stack to make sure the user cannot go back to the splash screen
            navigation.reset({
                index: 0,
                routes: [{ name: 'home' }], // Replace 'home' with the screen you want to navigate to
            });
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Clean up the timer if the component is unmounted
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.splashText}>MaColoc</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFD700",
    },
    splashText: {
        color: '#fff',
        fontSize: 50,
        fontWeight: "bold",
        textAlign: 'center',
    },
});

export default Splash;
