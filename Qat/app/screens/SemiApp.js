import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";

import Categoriez from "./Categories";
import Stormnav from "./categories/Stormnav";
import Typhoonnav from "./categories/Typhoonnav";
import Earthquakenav from "./categories/Earthquakenav";
import Floodnav from "./categories/Floodnav";
import Droughtnav from "./categories/Droughtnav";
import VolcanicEruptionnav from "./categories/Volcanic Eruptionnav";
import Landslidenav from "./categories/Landslidenav";
import Tsunaminav from "./categories/Tsunaminav";
import Wildfiresnav from "./categories/Wildfiresnav";
import Profile from "./Profile";
import Settings from "./Settings";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#660000",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        // initialRouteName="Categories"
        name="Categories"
        component={Categoriez}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Storm"
        component={Stormnav}
      />
      <Stack.Screen
        name="Typhoon"
        component={Typhoonnav}
      />
      <Stack.Screen
        name="Earthquake"
        component={Earthquakenav}
      />
      <Stack.Screen
        name="Flood"
        component={Floodnav}
      />
      <Stack.Screen
        name="Drought"
        component={Droughtnav}
      />
      <Stack.Screen
        name="Volcanic Eruption"
        component={VolcanicEruptionnav}
      />
      <Stack.Screen
        name="Landslide"
        component={Landslidenav}
      />
      <Stack.Screen
        name="Tsunami"
        component={Tsunaminav}
      />
      <Stack.Screen
        name="Wildfires"
        component={Wildfiresnav}
      />
    </Stack.Navigator>
  );
}

function App() {
	let [fontsLoaded, fontError] = useFonts({
		Anybody_700Bold_Italic,
		Anybody_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

  return (
    <Drawer.Navigator
      initialRouteName="Quick Aid Taguig"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#660000",
          width: 230,
        },
        drawerLabelStyle: {
          fontSize: 13,
          fontFamily: "Anybody_700Bold",
        },
        drawerActiveBackgroundColor: "#ffffff",
        drawerActiveTintColor: "#000000",
        drawerInactiveTintColor: "#ffffff",
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#660000",
        },
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color="#000000"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Quick Aid Taguig"
        component={CategoryStack}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="#000000" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="cog" size={24} color="#000000" />
          ),
        }}
      />
    </Drawer.Navigator>
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
