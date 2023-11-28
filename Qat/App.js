import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import SemiApp from "./app/screens/SemiApp";
import TermsConditions from "./app/screens/TermsConditions";

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
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
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

// TODO: FEATURES I WANT:
// ! UI
// * CONTENTS (CATEGORIES, SETTINGS) (preliminary done)
// ? UI/UX DESIGN / FLOWCHART
// ! Functionality
// * SETUP FIRESTORE DATABASE (preliminary done)
// ? FUNCTIONALITIES (REPORTING, EMERGENCY CALL, SOS, ETC.)
// ? DATA ANALYTICS
// ? GOOGLE AUTHENTICATION
// * AUTHENTICATION FLOWS

// TODO: FEATURES DEAN WANTS:
// ? Sign up -> Log in (Authentication)
// ? Data Privacy
// ? Log in -> Username/Password (!email/password)
// ? Landline Hotline Handling
// ? Location Services (Location)
// ? Evacuation Area (Earthquake Booths)
// ? Others Category (for First Aid)
// ? User Feedback

// TODO: Admin Dashboard (Analytics)
// ? - Users
// ? - User Interaction
// ? - User Feedback
// ? - User Location
// ? - Algorithm (User Behavior Analysis)

// ? Misc:
// ? Video Presentation (Process of Location Services)
// ? App Name: Quick Response Aid (QRA)

// TODO: FOR NOW
// ? Google Authentication
// * Autofill email in Log in
// * Navigation flows in all categories
// ? Rebrand Logo Name and Logo "Quick Response Aid"
// * View Password (Login & Signup)
