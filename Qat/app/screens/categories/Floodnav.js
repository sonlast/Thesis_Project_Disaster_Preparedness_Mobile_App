import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import Flood from "./flood/Flood";
import FloodHotlines from "./flood/FloodHotlines";
import FloodTips from "./flood/FloodTips";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#660000",
        height: 70,
      }}
      activeColor="#ffffff"
      inactiveColor="#aaaaaa"
      initialRouteName="Flood"
    >
      <Tab.Screen
        name="Information"
        component={Flood}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={"#ff0000"}
              size={27}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hotlines"
        component={FloodHotlines}
        options={{
          tabBarLabel: "Hotlines",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={"#ff0000"} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={FloodTips}
        options={{
          tabBarLabel: "Tips",
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
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
