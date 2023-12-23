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
function SFSettings() {
  const navigation = useNavigation();
  const [feedbacktext, setFeedbackText] = useState("");
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
      const StorageRef = ref(
        storage,
        `feedbacks/${auth.currentUser.uid}/${Date.now()}.txt`
      );
      const textdata = String(feedbacktext);
      console.log("Sending feedback...", textdata);

      const metadata = {
        contentType: "text/plain",
      };
      await uploadString(StorageRef, textdata, "raw", metadata);
      console.log("Feedback sent successfully!");
      Alert.alert(
        "Quick Aid",
        "Thank you for your feedback. We will get back to you as soon as we can.",
      )
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
          Do you have suggestions or found some bug? Let us know in the field
          below.
        </Text>
        <TextInput
          multiline={true}
          value={feedbacktext}
          onChangeText={(feedbacktext) => setFeedbackText(feedbacktext)}
          style={styles.input}
          placeholder="Describe your issue or idea..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity
          onPress={() => {
            setUses(uses + 1);
            trackEvent("User submitted a Feedback", { uses });
            uploadtoFirebaseStorage();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit Feedback</Text>
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

export default SFSettings;
