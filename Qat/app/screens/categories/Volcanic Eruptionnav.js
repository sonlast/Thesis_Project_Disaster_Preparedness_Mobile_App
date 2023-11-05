import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import VolcanicEruption from "./volcaniceruption/Volcanic Eruption";
import VolcanicEruptionHotlines from "./volcaniceruption/Volcanic EruptionHotlines";
import VolcanicEruptionTips from "./volcaniceruption/Volcanic EruptionTips";

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
      initialRouteName="Volcanic Eruption"
    >
      <Tab.Screen
        name="Information"
        component={VolcanicEruption}
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
        component={VolcanicEruptionHotlines}
        options={{
          tabBarLabel: "Hotlines",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={"#ff0000"} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={VolcanicEruptionTips}
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
