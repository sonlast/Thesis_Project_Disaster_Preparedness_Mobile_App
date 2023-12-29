import React, { useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Anybody_400Regular,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import { app } from "../../../firebaseConfig";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const auth = getAuth(app);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [isEmailsent, setIsEmailsent] = useState("Send Email");

  const handdleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setIsEmailsent(true);
      Alert.alert(
        "Quick Aid",
        "A password reset email has been sent to your email address."
      );
    } catch (error) {
      const errorsCode = error.code;
      const errorsMessage = error.message;

      switch (errorsCode) {
        case "auth/missing-email":
          Alert.alert("Quick Aid", "Input email for password reset.");
          break;
        case "auth/user-not-found":
          Alert.alert("Quick Aid", "User not found.");
          break;
        case "auth/invalid-email":
          Alert.alert("Quick Aid", "The email address is not valid.");
          break;
        default:
          Alert.alert(
            "Quick Aid",
            `Account creation error: ${errorsMessage} (Error Code: ${errorsCode})`
          );
          break;
      }
    }
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Taguig Disaster Access", "Navigating back to Login.", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => navigation.navigate("Login"),
        },
      ]);

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Anybody_400Regular,
    Anybody_700Bold,
    Anybody_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Anybody_400Regular",
            fontSize: 15,
            marginTop: 50,
            marginBottom: 10,
            padding: 10,
            color: "#fff",
            lineHeight: 25,
          }}
        >
          Enter your email address below and we'll send you a link to reset your
          password.
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            fontFamily: "Anybody_400Regular",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#fff",
            marginTop: 10,
            marginBottom: 10,
          }}
          placeholder="Email"
          placeholderTextColor={"#999"}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity
          onPress={handdleForgotPassword}
          style={{
            backgroundColor: "#660000",
            borderWidth: 1,
            borderColor: "#ffffff",
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            opacity: isEmailsent ? 1 : 0.5,
          }}
          disabled={!isEmailsent}
        >
          <Text
            style={{
              fontFamily: "Anybody_700Bold",
              fontSize: 20,
              marginTop: 10,
              marginBottom: 10,
              padding: 5,
              color: "#fff",
            }}
          >
            {isEmailsent ? "Send" : "Sent"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
export default ForgotPassword;
