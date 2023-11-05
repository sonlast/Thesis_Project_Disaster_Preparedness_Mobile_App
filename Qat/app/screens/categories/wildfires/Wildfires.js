import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";

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
        <Text style={{ color: "#000000" }}>WILDFIRES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  imagez: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  buttons: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loginbutton: {
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 3,
    width: 200,
    height: 50,
    marginTop: 1,
  },
  txt: {
    color: "#fff",
    fontFamily: "Anybody_700Bold",
    margin: 11,
  },
  inputContainer: {
    color: "#fff",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    width: 300,
    height: 40,
    marginTop: 50,
    paddingLeft: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontFamily: "Anybody_700Bold",
    fontSize: 13,
  },
});

export default MyApp;
