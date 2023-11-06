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

// TODO: ICONS IN DISASTER CATEGORIES
// CONTENTS OF DISASTER CATEGORIES
// AUTHENTICATION FLOWS IN NAVIGATION CONTAINER (LOGIN, SIGNUP, SEMIAPP) 
// UI DESIGN OF DISASTER CATEGORIES
// UI DESIGN OF DISASTER CONTENTS
// UI DESIGN OF PROFILE AND SETTINGS
// PROFILE NAVIGATION