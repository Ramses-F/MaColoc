//import { Stack } from "expo-router";
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Splash from './splash';
import Login from './login';
import Register from './register';
import Verify from './verify';
import Forgot from './forgot';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
   <Stack.Navigator  initialRouteName="splash"
   screenOptions={{
     headerStyle: {
       backgroundColor: '#f4511e',
     },
     headerShown: false,
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
   }}>
    <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="verify" component={Verify} />
      <Stack.Screen name="forgot" component={Forgot} />
   </Stack.Navigator>
  );
}
