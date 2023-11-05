import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import Wildfires from "./wildfires/Wildfires";
import WildfiresHotlines from "./wildfires/WildfiresHotlines";
import WildfiresTips from "./wildfires/WildfiresTips";

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
			initialRouteName="Wildfires"
    >
      <Tab.Screen
        name="Information"
        component={Wildfires}
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
        component={WildfiresHotlines}
        options={{
          tabBarLabel: "Hotlines",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={"#ff0000"} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={WildfiresTips}
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
