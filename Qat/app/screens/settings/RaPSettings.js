import React, { useEffect, useState } from "react";
import {
  Alert,
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
import { trackEvent } from "@aptabase/react-native";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadString } from "firebase/storage";

function RaPSettings() {
  const navigation = useNavigation();
  const [problemDescription, setProblemDescription] = useState("");
  const [uses, setUses] = useState(0);
  const auth = getAuth();

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

  const uploadtoFirebaseStorage = async () => {
    try {
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `reports/${auth.currentUser.uid}/${Date.now()}.txt`
      );
      const textdata = String(problemDescription);
      console.log("Sending report...", textdata);

      const metadata = {
        contentType: "text/plain",
      };
      await uploadString(storageRef, textdata, "raw", metadata);
      console.log("Report sent successfully!");
      Alert.alert(
        "Quick Aid",
        "Thank you for reporting. We will work on it as fast as we can."
      );
    } catch (error) {
      console.error("Error uploading report:", error);
    }
  };

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
        <TouchableOpacity
          onPress={() => {
            setUses(uses + 1);
            trackEvent("User reported a Problem", { uses });
            uploadtoFirebaseStorage();
          }}
          style={styles.button}
        >
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
