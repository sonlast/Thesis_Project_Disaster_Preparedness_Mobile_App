import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./app/screens/Loading";
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
// * CONTENTS (CATEGORIES, SETTINGS) (preliminary done)
// ? UI/UX DESIGN / FLOWCHART
// * SETUP FIRESTORE DATABASE (preliminary done)
// ? FUNCTIONALITIES (REPORTING, EMERGENCY CALL, SOS, ETC.)
// ? DATA ANALYTICS
// ! GOOGLE AUTHENTICATION
// * AUTHENTICATION FLOWS

// FEATURES DEAN WANTS:
// * Sign up -> Log in (Authentication)
// * Data Privacy
// ! Log in -> Username/Password (!email/password)
// * Autofill Last Email Used
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
// ? Rebranding Logo Name and Logo "Quick Response Aid"
// ? Adding Information to Database (Profile Picture, Username Display)
// ? Get username from firestore database
// ? Handle log in errors (navigation)

// * DONE
// * View Password (Login & Signup)
// * Loading Activity Indicator (Login & Signup)
// * onAuthStateChanged (Login & Signup)
// * Console Logs for Testing
// * Autofill email in Log in
// * Navigation flows in all categories
// * Data Privacy via Terms and Conditions

// AGENDA
// ! Deprecated
// * Accomplished
// ? Assigned
