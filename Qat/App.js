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

// * CONTENTS (CATEGORIES, SETTINGS) >>> Tomorrow After (Online Class) <<<<<<<<<<<<<<
// * SETUP FIRESTORE DATABASE >>> Tomorrow After (Contents)
// TODO: FUNCTIONALITIES (REPORTING, EMERGENCY CALL, SOS, ETC.) >>> Tomorrow After (Firestore)
// TODO: DATA ANALYTICS (USERS, LOCATIONS OF USERS, DISASTER REPORTS) >>> Tomorrow After (Functionalities)
// TODO: GOOGLE AUTHENTICATION >>> Sunday After (Data Analytics)

// * AUTHENTICATION FLOWS >>> Sunday After (Face-to-Face Class) <<<<<<<<<<<<<<
// * UI/UX DESIGN / FLOWCHART >>> Sunday After (Authentication Flows) <<<<<<<<<<<<<<

// TODO: ADMIN DASHBOARD >>> Sunday After (UI/UX Design / Flowchart)

// ! MAGPUPUYAT AKO SA SUNDAY PARA MATAPOS KO TO LAHAT (LIMIT TO 3AM)
// ! 41 HOURS 5 MINUTES LEFT TILL DEADLINE