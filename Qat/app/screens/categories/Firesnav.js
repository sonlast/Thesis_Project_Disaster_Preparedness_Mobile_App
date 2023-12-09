import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import Fires from "./fires/Fires";
import FiresHotlines from "./fires/FiresHotlines";
import OtherHotlines from "../miscellaneous/OtherHotlinesFires";
import FiresTips from "./fires/FiresTips";
import FiresEvac from "../miscellaneous/Evacuations";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function FiresHotlineStack() {
  return (
    <Stack.Navigator
      initialRouteName="FiresHotlines"
      screenOptions={{
        cardStyle: { backgroundColor: "#660000" },
      }}
    >
      <Stack.Screen
        name="FiresHotlines"
        component={FiresHotlines}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtherHotlines"
        component={OtherHotlines}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#660000",
        height: 70,
      }}
      activeColor="#ffffff"
      inactiveColor="#aaaaaa"
      initialRouteName="Fires"
    >
      <Tab.Screen
        name="Information"
        component={Fires}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons
              name="information"
              color={"#ff0000"}
              size={27}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hotlines"
        component={FiresHotlineStack}
        options={{
          tabBarLabel: "Hotlines",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={"#ff0000"} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Evacuation"
        component={FiresEvac}
        options={{
          tabBarLabel: "Evacuation",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="run" color={"#ff0000"} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={FiresTips}
        options={{
          tabBarLabel: "Tips",
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightbulb-on"
              color={"#ff0000"}
              size={27}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
