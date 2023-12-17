import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import Storm from "./storm/Storm";
import StormHotlines from "./storm/StormHotlines";
import OtherHotlines from "../miscellaneous/OtherHotlinesStorm";
import StormTips from "./storm/StormTips";
import StormEvac from "../miscellaneous/Evacuations";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function StormHotlineStack() {
  return (
    <Stack.Navigator
      initialRouteName="StormHotlines"
      screenOptions={{
        cardStyle: { backgroundColor: "#660000" },
      }}
    >
      <Stack.Screen
        name="StormHotlines"
        component={StormHotlines}
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
      initialRouteName="Storm"
    >
      <Tab.Screen
        name="Information"
        component={Storm}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons
              name="information"
              color={"#ff0000"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hotlines"
        component={StormHotlineStack}
        options={{
          tabBarLabel: "Hotlines",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={"#ff0000"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Evacuation"
        component={StormEvac}
        options={{
          tabBarLabel: "Evacuation",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="run" color={"#ff0000"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={StormTips}
        options={{
          tabBarLabel: "Tips",
          tabBarBadge: 10,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightbulb-on"
              color={"#ff0000"}
              size={25}
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
