import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./app/screens/miscellaneous/Loading";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import SemiApp from "./app/screens/SemiApp";
import TermsConditions from "./app/screens/TermsConditions";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          cardStyle: { backgroundColor: "#660000" },
        }}
      >
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
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

// FEATURES I WANT:
// * CONTENTS (CATEGORIES, SETTINGS) (!categories)
// ? UI/UX DESIGN / FLOWCHART
// * SETUP FIRESTORE DATABASE (*account details, !profile picture, !settings)
// ? FUNCTIONALITIES (REPORTING, EMERGENCY CALL, SOS, ETC.)
// ? DATA ANALYTICS (Aptabase)
// ! GOOGLE AUTHENTICATION
// * AUTHENTICATION FLOWS

// FEATURES DEAN WANTS:
// ! Log in -> Username/Password (!email/password)
// ? Landline Hotline Handling
// ? Location Services (Location) (PERMISSIONS) (preliminary)
// * Evacuation Area
// ? Others Category (for First Aid)

// TODO: Admin Dashboard (Analytics)
// ? - Users
// ? - User Interaction
// ? - User Feedback
// ? - User Location
// ? - Algorithm (User Behavior Analysis)

// ? Misc:
// ? Video Presentation (Process of Location Services)

// TODO: FOR NOW
// ! Handle log in errors (navigation)

// * DONE
// * View Password (Login & Signup)
// * Loading Activity Indicator (Login & Signup)
// * onAuthStateChanged (Login & Signup)
// * Console Logs for Testing
// * Autofill email in Log in
// * Navigation flows in all categories
// * Data Privacy via Terms and Conditions
// * Get username from firestore database
// * Rebranding Logo Name and Logo "Quick Response Aid"
// * Adding Information to Database (Profile Picture, Username Display)
// * App Name: Quick Response Aid (QRA)
// * Sign up -> Log in (Authentication)
// * Evacuation Area
// * ------------------ SETTINGS INCLUDES
// * Sync Profile Picture
// * Change Password
// * Location
// * Terms and Conditions
// * Privacy Policy
// * Send Feedback (no functionality)
// * Report a Problem (no functionality)
// * log out
// * Account Deletion

// AGENDA
// ! Deprecated / Not Prioritized
// * Accomplished
// ? Assigned

// ! Edit Username (unprioritized feature)

// TRYOUT EMAIL: master1@gmail.com
// TRYOUT PASSWORD: danicao
