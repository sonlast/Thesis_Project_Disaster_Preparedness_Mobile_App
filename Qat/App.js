import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFont, Anybody_700Bold, Anybody_700Bold_Italic } from "@expo-google-fonts/anybody";

import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import Categories from "./app/screens/Categories";
import Stormnav from "./app/screens/categories/Stormnav";
import Typhoon from "./app/screens/categories/Typhoon";
import Earthquake from "./app/screens/categories/Earthquake";
import Flood from "./app/screens/categories/Flood";
import Drought from "./app/screens/categories/Drought";
import VolcanicEruption from "./app/screens/categories/Volcanic Eruption";
import Landslide from "./app/screens/categories/Landslide";
import Tsunami from "./app/screens/categories/Tsunami";
import Wildfires from "./app/screens/categories/Wildfires";
import Profile from "./app/screens/Profile";
import Settings from "./app/screens/Settings";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ScreenStack() {
  return (
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
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Storm"
        component={Stormnav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Typhoon"
        component={Typhoon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Earthquake"
        component={Earthquake}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Flood"
        component={Flood}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Drought"
        component={Drought}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VolcanicEruption"
        component={VolcanicEruption}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Landslide"
        component={Landslide}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tsunami"
        component={Tsunami}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wildfires"
        component={Wildfires}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Categories"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#660000",
            width: 230,
          },
          drawerLabelStyle: {
            color: "#000000",
            fontSize: 14,
            fontFamily: "Anybody_700Bold",
          },
          drawerActiveBackgroundColor: "#ffffff",
          drawerActiveTintColor: "#660000",
          drawerInactiveTintColor: "#ffffff",
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#660000",
          },
        }}
      >
        <Drawer.Screen name="Quick Aid Taguig" component={ScreenStack} />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
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

// EDIT ICONS IN DISASTER CATEGORIES
// REMOVE DRAWER NAVIGATOR IN LOGIN AND SIGNUP