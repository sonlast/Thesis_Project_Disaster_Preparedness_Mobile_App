import * as React from "react";
import { Image, View, StyleSheet, Text, } from "react-native";
import { useFonts, Anybody_700Bold_Italic, Anybody_700Bold } from "@expo-google-fonts/anybody";
import { ScrollView } from "react-native-gesture-handler";

const MyApp = () => {

	let [fontsLoaded, fontError] = useFonts({
		Anybody_700Bold_Italic,
		Anybody_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
    <View style={styles.container}>
			<ScrollView>
        <View style={styles.content}>
          <Image
            style={styles.images}
            source={require("../../../assets/prereqs-images/storm-ph.jpg")}
          />
        </View>
				<View style={{ padding: 20 }}>
					<Text style={{ fontFamily: "Anybody_700Bold", fontSize: 20, color: "#ff0000" }}>Events</Text>
				</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	images: {
		width: 500,
		height: 200,
	},
});

export default MyApp;
