import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
  Anybody_400Regular,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";

function RaPSettings() {
  const navigation = useNavigation();
  const [problemDescription, setProblemDescription] = useState("");

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Settingz");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Anybody_700Bold_Italic,
    Anybody_700Bold,
    Anybody_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          What's happening? Let us know what's going on. We'll get back to you
          as soon as we can.
        </Text>
        <TextInput
          multiline={true}
          value={problemDescription}
          onChangeText={(problemtext) => setProblemDescription(problemtext)}
          style={styles.input}
          placeholder="Describe the problem..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#880000",
    padding: 30,
    paddingTop: 20,
  },
  content: {
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 17.5,
    fontFamily: "Anybody_400Regular",
    lineHeight: 25,
  },
  input: {
    marginTop: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    color: "#fff",
    fontSize: 15,
    fontFamily: "Anybody_400Regular",
    lineHeight: 25,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#880000",
    fontSize: 17.5,
    fontFamily: "Anybody_700Bold",
    textAlign: "center",
  },
});

export default RaPSettings;
