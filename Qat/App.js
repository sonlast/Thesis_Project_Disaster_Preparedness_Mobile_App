import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import SemiApp from "./app/screens/SemiApp";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SemiApp"
        component={SemiApp}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textt: {
    color: "#fff",
  },
});

export default App;

// TODO: 1st: FIREBASE FIRESTORE DATABASE INTEGRATION
// TODO: 2nd: CONTENTS OF DISASTER CATEGORIES
// TODO: 5th: AUTHENTICATION FLOWS IN NAVIGATION CONTAINER (LOGIN, SIGNUP, SEMIAPP) 
// TODO: 4th: UI DESIGN OF DISASTER CATEGORIES
// TODO: 4th: UI DESIGN OF DISASTER CONTENTS
// TODO: 4th: UI DESIGN OF PROFILE AND SETTINGS
// TODO: 3rd: PROFILE NAVIGATION
