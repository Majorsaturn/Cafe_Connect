import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { createBottomTabNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import LoginPage from './screens/loginScreen';

const firebaseConfig = {
  apiKey: "AIzaSyAD-9qwFM9QtWA9_3ompqWnrCftJqzsPhU",
  authDomain: "cafeconnect-491b6.firebaseapp.com",
  projectId: "cafeconnect-491b6",
  storageBucket: "cafeconnect-491b6.appspot.com",
  messagingSenderId: "269129971518",
  appId: "1:269129971518:web:131329a7a8393239685e6f",
  measurementId: "G-QPLWC8N3XB"
};

const Tab = CreateBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName = "login">
            <Tab.Screen name="login" component={LoginPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
