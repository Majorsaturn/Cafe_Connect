import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

import EditAccountDetails from './Screens/editAccountScreen';
import LoginPage from './Screens/loginScreen';
import SignUpPage from './Screens/signUpScreen';
import HomeScreen from './Screens/homeScreen';
import AudioPage from './Screens/audioScreen';
import FriendsPage from './Screens/friendScreen';
import TableRoom from './Screens/tableScreen';
import SettingsPage from './Screens/settingScreen';
import CreateTableScreen from './Screens/createTableScreen';
import AboutScreen from './Screens/aboutScreen';
import SupportPage from './Screens/supportScreen'

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
const fbApp = initializeApp(firebaseConfig);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userTable, setUserTable] = useState(null); // New state for user's table

  const auth = getAuth(fbApp);
  const db = getFirestore(fbApp);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid.toString();
        // Fetch user data from Firestore to check their table
        const Users = collection(db, 'Users');
        const userQuery = query(Users, where("UID", "==", uid));
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          setUserTable(userData.Table); // Set the user table based on data
          console.log(userData.Table);
        } else {
          console.log("No matching user found.");
        }
      } else {
        setIsLoggedIn(false);
        setUserTable(null); // Reset the table state when user logs out
      }
    });

    return unsubscribe; // Clean up the listener on unmount
  }, [auth, db]);

  if (!isLoggedIn) {
    // Show the login page if the user is not logged in
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            children={(props) => <LoginPage {...props} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            children={(props) => <SignUpPage {...props} />}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerStyle: styles.headerStyle,
                headerTintColor: styles.headerTintColor.color,
                headerTitleStyle: styles.headerTitleStyle,
              }}>
          <Stack.Screen name="Main" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator screenOptions={{
                headerStyle: styles.headerStyle,
                headerTintColor: styles.headerTintColor.color,
                headerTitleStyle: styles.headerTitleStyle,
              }}>
                <Tab.Screen
                  name="Home"
                  children={(props) => <HomeScreen {...props} />}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Audio"
                  children={(props) => <AudioPage {...props} />}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Friends"
                  children={(props) => <FriendsPage {...props} />}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Table"
                  children={userTable === "none" ? (props) => <CreateTableScreen {...props} /> : (props) => <TableRoom {...props} />}
                  options={{
                    headerShown: userTable !== "none",
                  }}
                />
                <Tab.Screen
                  name="Settings"
                  children={(props) => <SettingsPage {...props} />}
                  options={{ headerShown: false }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="EditAccountDetails"
            children={(props) => <EditAccountDetails {...props} />}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Support"
            children={(props) => <SupportPage {...props} />}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="About"
            children={(props) => <AboutScreen {...props} />}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#9c6f44',
  },
  headerTintColor: {
    color: 'white',
  },
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
