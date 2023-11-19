import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Tooltip from "rn-tooltip";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { app } from "../../firebaseConfig"; // Import Firebase Config file
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase Auth related functions

const MyApp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Age", value: "zero" },
    { label: "18", value: "eighteen" },
    { label: "19", value: "nineteen" },
    { label: "20", value: "twenty" },
    { label: "21", value: "twenty-one" },
    { label: "22", value: "twenty-two" },
    { label: "23", value: "twenty-three" },
    { label: "24", value: "twenty-four" },
    { label: "25", value: "twenty-five" },
    { label: "26", value: "twenty-six" },
    { label: "27", value: "twenty-seven" },
    { label: "28", value: "twenty-eight" },
    { label: "29", value: "twenty-nine" },
    { label: "30", value: "thirty" },
    { label: "31", value: "thirty-one" },
    { label: "32", value: "thirty-two" },
    { label: "33", value: "thirty-three" },
    { label: "34", value: "thirty-four" },
    { label: "35", value: "thirty-five" },
    { label: "36", value: "thirty-six" },
    { label: "37", value: "thirty-seven" },
    { label: "38", value: "thirty-eight" },
    { label: "39", value: "thirty-nine" },
    { label: "40", value: "fourty" },
    { label: "41", value: "fourty-one" },
    { label: "42", value: "fourty-two" },
    { label: "43", value: "fourty-three" },
    { label: "44", value: "fourty-four" },
    { label: "45", value: "fourty-five" },
    { label: "46", value: "fourty-six" },
    { label: "47", value: "fourty-seven" },
    { label: "48", value: "fourty-eight" },
    { label: "49", value: "fourty-nine" },
    { label: "50", value: "fifty" },
    { label: "51", value: "fifty-one" },
    { label: "52", value: "fifty-two" },
    { label: "53", value: "fifty-three" },
    { label: "54", value: "fifty-four" },
    { label: "55", value: "fifty-five" },
    { label: "56", value: "fifty-six" },
    { label: "57", value: "fifty-seven" },
    { label: "58", value: "fifty-eight" },
    { label: "59", value: "fifty-nine" },
    { label: "60", value: "sixty" },
    { label: "71", value: "seventy-one" },
    { label: "72", value: "seventy-two" },
    { label: "73", value: "seventy-three" },
    { label: "74", value: "seventy-four" },
    { label: "75", value: "seventy-five" },
    { label: "76", value: "seventy-six" },
    { label: "77", value: "seventy-seven" },
    { label: "78", value: "seventy-eight" },
    { label: "79", value: "seventy-nine" },
    { label: "80", value: "eighty" },
    { label: "81", value: "eighty-one" },
    { label: "82", value: "eighty-two" },
    { label: "83", value: "eighty-three" },
    { label: "84", value: "eighty-four" },
    { label: "85", value: "eighty-five" },
    { label: "86", value: "eighty-six" },
    { label: "87", value: "eighty-seven" },
    { label: "88", value: "eighty-eight" },
    { label: "89", value: "eighty-nine" },
    { label: "90", value: "ninety" },
    { label: "91", value: "ninety-one" },
    { label: "92", value: "ninety-two" },
    { label: "93", value: "ninety-three" },
    { label: "94", value: "ninety-four" },
    { label: "95", value: "ninety-five" },
    { label: "96", value: "ninety-six" },
    { label: "97", value: "ninety-seven" },
    { label: "98", value: "ninety-eight" },
    { label: "99", value: "ninety-nine" },
    { label: "100", value: "one hundred" },
    { label: "101", value: "one hundred-one" },
    { label: "102", value: "one hundred-two" },
    { label: "103", value: "one hundred-three" },
    { label: "104", value: "one hundred-four" },
    { label: "105", value: "one hundred-five" },
    { label: "106", value: "one hundred-six" },
    { label: "107", value: "one hundred-seven" },
    { label: "108", value: "one hundred-eight" },
    { label: "109", value: "one hundred-nine" },
    { label: "110", value: "one hundred-ten" },
    { label: "111", value: "one hundred-eleven" },
    { label: "112", value: "one hundred-twelve" },
    { label: "113", value: "one hundred-thirteen" },
    { label: "114", value: "one hundred-fourteen" },
    { label: "115", value: "one hundred-fifteen" },
    { label: "116", value: "one hundred-sixteen" },
    { label: "117", value: "one hundred-seventeen" },
    { label: "118", value: "one hundred-eighteen" },
    { label: "119", value: "one hundred-nineteen" },
    { label: "120", value: "one hundred-twenty" },
  ]);

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const pressSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert("Quick Aid Taguig", "Account created successfully!");
        navigation.navigate("SemiApp");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case "auth/invalid-email":
            Alert.alert("Quick Aid Taguig", "Fill in the required fields.");
            break;
          case "auth/missing-password":
            Alert.alert("Quick Aid Taguig", "Fill in your password.");
            break;
          default:
            Alert.alert(
              "Quick Aid Taguig",
              `Account creation error: ${errorMessage} (Error Code: ${errorCode})`
            );
            break;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const pressLogin = () => {
    navigation.navigate("Login");
  };

  let [fontsLoaded, fontError] = useFonts({
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
          <View style={styles.nameHorizontalContainer}>
            <View style={[styles.nameinputContainer, { marginRight: 5 }]}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  autoCapitalize="words"
                  placeholder="First Name"
                  placeholderTextColor="#999999"
                  placeholderStyle={{ fontFamily: "Anybody_700Bold" }}
                  textAlign="left"
                  inputMode="email"
                  keyboardType="email-address"
                  autoFocus={false}
                />
              </View>
            </View>
            <View style={[styles.nameinputContainer, { marginLeft: 5 }]}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  autoCapitalize="words"
                  placeholder="Last Name"
                  placeholderTextColor="#999999"
                  placeholderStyle={{ fontFamily: "Anybody_700Bold" }}
                  textAlign="left"
                  inputMode="email"
                  keyboardType="email-address"
                  autoFocus={false}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Username"
                placeholderTextColor="#999"
                placeholderStyle={{ fontFamily: "Anybody_700Bold" }}
                textAlign="left"
                inputMode="email"
                keyboardType="email-address"
                autoFocus={false}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
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
                onChangeText={(text) => setEmail(text)}
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
                  secureTextEntry={true}
                  contextMenuHidden={true}
                  // ! if the value is change to email, this textinput inputs data similar with the email textinput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  onFocus={() => setTooltipVisible(true)}
                  onBlur={() => setTooltipVisible(false)}
                />
              </View>
          </View>
          <View style={styles.horizontalContainer}>
            <View style={styles.ageContainer}>
              <DropDownPicker
                placeholder="Age"
                placeholderStyle={{
                  color: "#000000",
                  fontFamily: "Anybody_700Bold",
                  fontSize: 12,
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                showTickIcon={false}
                listItemLabelStyle={{
                  fontFamily: "Anybody_700Bold",
                  fontSize: 11,
                }}
                labelStyle={{ fontFamily: "Anybody_700Bold", fontSize: 12 }}
              />
            </View>
            <View style={styles.numberContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Contact Number"
                  placeholderTextColor="#999"
                  textAlign="left"
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <View style={styles.buttons}>
                <Pressable onPress={pressSignup} style={styles.signupbutton}>
                  <Text style={styles.txt}>Sign Up</Text>
                </Pressable>
              </View>
            </>
          )}
          <View>
            <Text
              style={{
                color: "#fff",
                marginTop: 20,
                fontSize: 15,
                fontFamily: "Anybody_700Bold",
              }}
            >
              or
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <Text style={styles.txt}>Sign up with: </Text>
                <Image
                  source={require("../assets/google-icons-android/icons8-google-192(-xxxhdpi).png")}
                  fadeDuration={0}
                  style={{ width: 45, height: 45 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.xtratxt}>
              Already have an account?{" "}
              <Text style={{ color: "rgb(255, 0, 0)" }} onPress={pressLogin}>
                Log in here.
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
  },
  imagez: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  buttons: {
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  signupbutton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 3,
    width: 200,
    height: 50,
  },
  txt: {
    color: "#000000",
    fontFamily: "Anybody_700Bold",
    margin: 11,
  },
  xtratxt: {
    color: "#fff",
    fontFamily: "Anybody_700Bold",
    margin: 11,
  },
  nameinputContainer: {
    color: "#fff",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    width: 145,
    height: 40,
    marginTop: 20,
    paddingLeft: 20,
  },
  inputContainer: {
    color: "#fff",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    width: 300,
    height: 40,
    marginTop: 40,
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
  nameHorizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  ageContainer: {
    marginTop: 25,
    marginRight: 25,
    marginBottom: 5,
    marginLeft: 5,
    width: 75,
  },
  numberContainer: {
    color: "#fff",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    width: 200,
    height: 40,
    marginTop: 20,
    paddingLeft: 20,
  },
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default MyApp;
