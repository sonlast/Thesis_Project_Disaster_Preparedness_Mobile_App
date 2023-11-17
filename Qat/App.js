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

// TODO: Sign up -> Log in (Authentication)
// TODO: Data Privacy
// TODO: Log in -> Username/Password (!email/password)
// TODO: Landline Hotline Handling
// TODO: Location Services (Location)
// TODO: Evacuation Area (Earthquake Booths)
// TODO: Others Category (for First Aid)
// TODO: User Feedback

// TODO: Admin Dashboard (Analytics)
// TODO: - Users
// TODO: - User Interaction
// TODO: - User Data
// TODO: - Algorithm (User Behavior Analysis)

// * Misc:
// * Video Presentation (Process of Location Services)
// * App Name: Quick Response Aid (QRA)

// ! 58 hours 54 minutes