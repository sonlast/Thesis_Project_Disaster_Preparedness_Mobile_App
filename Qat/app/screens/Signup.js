import React, { useState, useEffect } from "react";
import {
  Alert,
  ActivityIndicator,
  BackHandler,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { Tooltip, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { app } from "../../firebaseConfig"; // Import Firebase Config file
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase Auth related functions
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firebase Firestore related functions

const MyApp = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(null);
  const [items, setItems] = useState([
    { label: "Age", value: "no-age-input" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
    { label: "29", value: "29" },
    { label: "30", value: "30" },
    { label: "31", value: "31" },
    { label: "32", value: "32" },
    { label: "33", value: "33" },
    { label: "34", value: "34" },
    { label: "35", value: "35" },
    { label: "36", value: "36" },
    { label: "37", value: "37" },
    { label: "38", value: "38" },
    { label: "39", value: "39" },
    { label: "40", value: "40" },
    { label: "41", value: "41" },
    { label: "42", value: "42" },
    { label: "43", value: "43" },
    { label: "44", value: "44" },
    { label: "45", value: "45" },
    { label: "46", value: "46" },
    { label: "47", value: "47" },
    { label: "48", value: "48" },
    { label: "49", value: "49" },
    { label: "50", value: "50" },
    { label: "51", value: "51" },
    { label: "52", value: "52" },
    { label: "53", value: "53" },
    { label: "54", value: "54" },
    { label: "55", value: "55" },
    { label: "56", value: "56" },
    { label: "57", value: "57" },
    { label: "58", value: "58" },
    { label: "59", value: "59" },
    { label: "60", value: "60" },
    { label: "61", value: "61" },
    { label: "62", value: "62" },
    { label: "63", value: "63" },
    { label: "64", value: "64" },
    { label: "65", value: "65" },
    { label: "66", value: "66" },
    { label: "67", value: "67" },
    { label: "68", value: "68" },
    { label: "69", value: "69" },
    { label: "70", value: "70" },
    { label: "71", value: "71" },
    { label: "72", value: "72" },
    { label: "73", value: "73" },
    { label: "74", value: "74" },
    { label: "75", value: "75" },
    { label: "76", value: "76" },
    { label: "77", value: "77" },
    { label: "78", value: "78" },
    { label: "79", value: "79" },
    { label: "80", value: "80" },
    { label: "81", value: "81" },
    { label: "82", value: "82" },
    { label: "83", value: "83" },
    { label: "84", value: "84" },
    { label: "85", value: "85" },
    { label: "86", value: "86" },
    { label: "87", value: "87" },
    { label: "88", value: "88" },
    { label: "89", value: "89" },
    { label: "90", value: "90" },
    { label: "91", value: "91" },
    { label: "92", value: "92" },
    { label: "93", value: "93" },
    { label: "94", value: "94" },
    { label: "95", value: "95" },
    { label: "96", value: "96" },
    { label: "97", value: "97" },
    { label: "98", value: "98" },
    { label: "99", value: "99" },
    { label: "100", value: "100" },
    { label: "101", value: "101" },
    { label: "102", value: "102" },
    { label: "103", value: "103" },
    { label: "104", value: "104" },
    { label: "105", value: "105" },
    { label: "106", value: "106" },
    { label: "107", value: "107" },
    { label: "108", value: "108" },
    { label: "109", value: "109" },
    { label: "110", value: "110" },
    { label: "111", value: "111" },
    { label: "112", value: "112" },
    { label: "113", value: "113" },
    { label: "114", value: "114" },
    { label: "115", value: "115" },
    { label: "116", value: "116" },
    { label: "117", value: "117" },
    { label: "118", value: "118" },
    { label: "119", value: "119" },
    { label: "120", value: "120" },
  ]);

  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Quick Aid Taguig",
        "Are you sure you want to cancel signing up?",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "YES",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const pressSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        await addDoc(collection(firestore, "users"), {
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          contactNumber: contactNumber,
          age: age,
        });

        Alert.alert("Quick Response Aid", "Account created successfully!");
        navigation.navigate("Login", { username: username });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case "auth/invalid-email":
            Alert.alert("Quick Response Aid", "Fill in the required fields.");
            break;
          case "auth/missing-password":
            Alert.alert("Quick Response Aid", "Fill in your password.");
            break;
          case "auth/email-already-in-use":
            Alert.alert(
              "Quick Response Aid",
              "The email address is already in use by another account."
            );
            break;
          default:
            Alert.alert(
              "Quick Response Aid",
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
    console.log("Navigated to Login Screen.");
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
                  value={firstName}
                  onChangeText={(text) => {
                    console.log("Typing firstname...");
                    setFirstName(text);
                  }}
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
                  value={lastName}
                  onChangeText={(text) => {
                    console.log("Typing lastname...");
                    setLastName(text);
                  }}
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
                value={username}
                onChangeText={(text) => {
                  console.log("Typing username...");
                  setUsername(text);
                }}
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
                onChangeText={(text) => {
                  console.log("Typing email...");
                  setEmail(text);
                }}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Tooltip
              isVisible={tooltipVisible}
              popover={
                <Text
                  style={{
                    color: "#ffffff",
                    fontFamily: "Anybody_700Bold",
                    fontSize: 12,
                  }}
                >
                  Password must be at least 8 characters.
                </Text>
              }
              onOpen={() => setTooltipVisible(true)}
              onClose={() => setTooltipVisible(false)}
            >
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Password"
                  placeholderTextColor="#999"
                  textAlign="left"
                  secureTextEntry={!isPasswordVisible}
                  contextMenuHidden={true}
                  // ! if the value is change to email, this textinput inputs data similar with the email textinput
                  value={password}
                  onChangeText={(text) => {
                    console.log("Typing password...");
                    setPassword(text);
                    if (text.length < 8) {
                      setTooltipVisible(true);
                    } else {
                      setTooltipVisible(false);
                    }
                  }}
                  onFocus={() => setTooltipVisible(true)}
                  onBlur={() => setTooltipVisible(false)}
                />
                <Pressable
                  onPress={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                    console.log(
                      !isPasswordVisible
                        ? "Password is visible."
                        : "Password is hidden."
                    );
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
            </Tooltip>
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
                value={age}
                items={items}
                setOpen={setOpen}
                setValue={(value) => {
                  console.log("Age Selected...");
                  setAge(value);
                }}
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
                  value={contactNumber}
                  onChangeText={(text) => {
                    console.log("Typing contact number...");
                    setContactNumber(text);
                  }}
                />
              </View>
            </View>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <View style={styles.buttons}>
                <Pressable
                  onPress={checked ? pressSignup : null}
                  style={[
                    styles.signupbutton,
                    !checked ? styles.disabledbtn : {},
                  ]}
                >
                  <Text style={styles.txt}>Sign Up</Text>
                </Pressable>
              </View>
            </>
          )}
          <CheckBox
            title="I agree to the Terms and Conditions"
            checked={checked}
            onPress={() => {
              console.log("Navigated to the Terms and Conditions...");
              setChecked(!checked);
              navigation.navigate("TermsConditions");
            }}
            containerStyle={{
              backgroundColor: "#660000",
              borderColor: "#660000",
              margin: 0,
              marginTop: 5,
              marginRight: 1,
              padding: 0,
            }}
            textStyle={{
              color: "#fff",
              fontFamily: "Anybody_700Bold",
              fontSize: 12,
            }}
            uncheckedColor="#fff"
            checkedIcon="check-square-o"
            checkedColor="#fff"
          />
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
  disabledbtn: {
    opacity: 0.5,
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
  viewpassword: {
    position: "absolute",
    top: 2.5,
    right: 0,
    bottom: 5,
    left: 245,
  },
});

export default MyApp;
