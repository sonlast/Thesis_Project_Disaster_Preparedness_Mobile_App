import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  useFont,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";

import Categories from "./Categories";
import Stormnav from "./categories/Stormnav";
import Typhoon from "./categories/Typhoon";
import Earthquake from "./categories/Earthquake";
import Flood from "./categories/Flood";
import Drought from "./categories/Drought";
import VolcanicEruption from "./categories/Volcanic Eruption";
import Landslide from "./categories/Landslide";
import Tsunami from "./categories/Tsunami";
import Wildfires from "./categories/Wildfires";
import Profile from "./Profile";
import Settings from "./Settings";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator initialRouteName="Categories">
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
	const [fontsLoaded, fontError] = useFont({
		Anybody_700Bold_Italic,
		Anybody_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

  return (
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
      <Drawer.Screen name="Quick Aid Taguig" component={CategoryStack} />
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
