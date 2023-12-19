import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./app/screens/miscellaneous/Loading";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import ForgotPassword from "./app/screens/miscellaneous/ForgotPassword";
import SemiApp from "./app/screens/SemiApp";
import TermsConditions from "./app/screens/TermsConditions";
import Aptabase from "@aptabase/react-native";

Aptabase.init("A-EU-6067364857");
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          cardStyle: { backgroundColor: "#660000" },
          headerStyle: { backgroundColor: "#660000" },
          headerTintColor: "#fff",
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
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerTitle: "Forgot Password",
            headerTitleStyle: {
              fontFamily: "Anybody_700Bold",
              fontSize: 17.5,
            },
          }}
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

// AGENDA
// ! Deprecated / Not Prioritized
// * Accomplished
// ? Assigned

// FEATURES I WANT:
// * CONTENTS (CATEGORIES, SETTINGS) (!categories)
// ? UI/UX DESIGN / FLOWCHART
// * SETUP FIRESTORE DATABASE (*account details, !profile picture, !settings)
// ? FUNCTIONALITIES (REPORTING, EMERGENCY CALL, SOS, ETC.)
// ? DATA ANALYTICS (Aptabase)
// ! GOOGLE AUTHENTICATION
// * AUTHENTICATION FLOWS

// FEATURES DEAN WANTS:
// * Landline Hotline Handling
// * Location Services (Location) (PERMISSIONS) (preliminary)
// ! Others Category (for First Aid)

// TODO: Admin Dashboard (Analytics)
// * ? - Users
// * ? - User Interaction
// ? - User Feedback
// * ? - User Location
// * ? - Algorithm (User Behavior Analysis)

// ! Misc:
// ! Video Presentation (Process of Location Services)

// ! ------------------- Deprecated / Not Prioritized
// ! Handle log in errors (navigation)
// ! Edit Username (unprioritized feature)
// ! Log in -> Username/Password (!email/password)
// * Offline Capability (unprioritized feature)

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
// * HANDLE LANDLINE HOTLINES
// * CONTENTS (CATEGORIES, OTHERS) (semi done)
// * STORE PROFILE PICTURE (via FIREBASE STORAGE) (semi done)
// * Forgot Password Functionality
// * ANALYTICS
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

// TRYOUT EMAIL: sonilalto@gmail.com
// TRYOUT PASSWORD: sonilalto

// TODOS:
// ? User Feedback / Report a Problem (FireStore)
// ? MAPS API ALTERNATIVE
// ? Others Category (time-based)

// ? GOOGLE MAPS SDK / API (via credit card for access) (reasonable)

