import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import Storm from "./storm/Storm";
import StormHotlines from "./storm/StormHotlines";
import StormTips from "./storm/StormTips";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
		<Tab.Navigator
			barStyle={{
				backgroundColor: "#660000",
				height: 70,
				borderTopWidth: 1,
				borderTopColor: "#000000",
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
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="information-outline" color={'#aaaaaa'} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name="Hotlines"
				component={StormHotlines}
				options={{
					tabBarLabel: "Hotlines",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="phone" color={'#aaaaaa'} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name="Tips"
				component={StormTips}
				options={{
					tabBarLabel: "Tips",
					tabBarBadge: 3,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="lightbulb-on-outline" color={'#aaaaaa'} size={25} />
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
