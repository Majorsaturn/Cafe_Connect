import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import LoginPage from './Screens/loginScreen';
import SignUpPage from './Screens/signUpScreen';

const firebaseConfig = {
  apiKey: "AIzaSyAD-9qwFM9QtWA9_3ompqWnrCftJqzsPhU",
  authDomain: "cafeconnect-491b6.firebaseapp.com",
  projectId: "cafeconnect-491b6",
  storageBucket: "cafeconnect-491b6.appspot.com",
  messagingSenderId: "269129971518",
  appId: "1:269129971518:web:131329a7a8393239685e6f",
  measurementId: "G-QPLWC8N3XB"
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // User is logged in
  };
  
  if (!isLoggedIn) {
    // Show the login page if the user is not logged in
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            children={(props) => <LoginPage {...props} onLogin={handleLogin} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={() => <SignUpPage/>}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator id="test" initialRouteName = "Home">
            <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
