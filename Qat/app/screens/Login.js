import React, { useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  useFonts,
  Anybody_400Regular,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { app } from "../../firebaseConfig"; // Import Firebase Config file
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth"; // Import Firebase Auth related functions

// * APP
const MyApp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  useEffect(() => {
    const getLastEmail = async () => {
      const lastemail = await AsyncStorage.getItem("lastemail");
      if (lastemail !== null) {
        setEmail(lastemail);
      }
    };

    getLastEmail();
  }, []);

  useEffect(() => {
    const backAction = () => {
      console.log("Exited app.");
      BackHandler.exitApp();

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  // LOG IN BUTTON
  const pressLogin = () => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        AsyncStorage.setItem("lastemail", email);
        Alert.alert("Quick Aid", "Login successful.");
        console.log("Initiating log in.");
        console.log("Logged in successful.");
        navigation.navigate("SemiApp");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case "auth/invalid-login-credentials":
            Alert.alert("Quick Aid", "Account doesn't exist.");
            console.log("Unsuccessful Login.");
            break;
          case "auth/user-not-found":
            Alert.alert("Quick Aid", "Account doesn't exist.");
            break;
          case "auth/invalid-email":
            Alert.alert(
              "Quick Aid",
              "Invalid email address. Please provide a valid email."
            );
            console.log("Unsuccessful Login.");
            break;
          case "auth/weak-password":
            Alert.alert(
              "Quick Aid",
              "Password is too weak. Please provide a stronger password."
            );
            console.log("Unsuccessful Login.");
            break;
          case "auth/wrong-password":
            Alert.alert("Quick Aid", "Incorrect password.");
            console.log("Unsuccessful Login.");
            break;
          case "auth/missing-password":
            Alert.alert("Quick Aid", "Please provide a password.");
            console.log("Unsuccessful Login.");
            break;
          case "auth/too-many-requests":
            Alert.alert(
              "Quick Aid",
              "Too many requests. Please try again later."
            );
            console.log("Unsuccessful Login.");
            break;
          default:
            Alert.alert(
              "Quick Aid",
              `Account creation error: ${errorMessage} (Error Code: ${errorCode})`
            );
            console.log("Unsuccessful Login.");
            break;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // SIGN UP BUTTON
  const pressSignup = () => {
    console.log("Navigated to sign up.");
    navigation.navigate("Signup");
  };

  let [fontsLoaded, fontError] = useFonts({
    Anybody_400Regular,
    Anybody_700Bold_Italic,
    Anybody_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <Image
            style={styles.imagez}
            source={require("../assets/app-icons-xplatform/adaptive-icon.png")}
          />
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Email"
                placeholderTextColor="#999"
                placeholderStyle={{ fontFamily: "Anybody_700Bold" }}
                textAlign="left"
                inputMode="email"
                keyboardType="email-address"
                autoFocus={false}
                value={email}
                onChangeText={(text) => {
                  console.log("Typing email...");
                  setEmail(text);
                }}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor="#999"
                textAlign="left"
                secureTextEntry={!isPasswordVisible}
                contextMenuHidden={true}
                value={password}
                onChangeText={(text) => {
                  console.log("Typing password...");
                  setPassword(text);
                }}
              />
              <Pressable
                onPress={() => {
                  setIsPasswordVisible(!isPasswordVisible);
                  console.log(
                    !isPasswordVisible
                      ? "Password is visible."
                      : "Password is hidden."
                  );
                  // console.log(`Password visibility: ${!isPasswordVisible}.`);
                }}
                style={styles.viewpassword}
              >
                <Icon
                  name={isPasswordVisible ? "eye-slash" : "eye"}
                  size={20}
                  color="grey"
                />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("Navigated to forgot password.");
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontFamily: "Anybody_400Regular",
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <View style={styles.activityindi}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          ) : (
            <>
              <View style={styles.buttons}>
                <Pressable onPress={pressLogin} style={styles.loginbutton}>
                  <Text style={styles.txt}>Log In</Text>
                </Pressable>
              </View>
            </>
          )}
          <View style={{ marginTop: 10 }}>
            <Text style={styles.xtratxt}>
              Don't have an account?{" "}
              <Text style={{ color: "rgb(255, 0, 0)" }} onPress={pressSignup}>
                Sign up here.
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#660000",
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
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 3,
    width: 200,
    height: 50,
    marginTop: 1,
  },
  txt: {
    color: "#000000",
    fontFamily: "Anybody_700Bold",
    margin: 11,
  },
  xtratxt: {
    color: "#ffffff",
    fontFamily: "Anybody_700Bold",
    margin: 11,
  },
  inputContainer: {
    color: "#fff",
    backgroundColor: "#ffffff",
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
    color: "#000000",
    fontFamily: "Anybody_700Bold",
    fontSize: 13,
  },
  viewpassword: {
    position: "absolute",
    top: 2.5,
    right: 0,
    bottom: 5,
    left: 245,
  },
  activityindi: {
    marginTop: 50,
  },
});

export default MyApp;
