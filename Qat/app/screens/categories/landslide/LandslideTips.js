import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
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
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Anybody_700Bold",
            fontSize: 24,
            color: "#FF0000",
          }}
        >
          EMERGENCY TIPS
        </Text>
        <ScrollView>
          <View style={styles.content2}>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
              }}
            >
              Events
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content2: {
    padding: 20,
  },
});

export default MyApp;
