import React, { useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  Image,
  Modal,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { useImage } from "./miscellaneous/ImageContext";
import { getFirestore, deleteDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, deleteUser, signOut, updatePassword } from "firebase/auth";

export default function Settings() {
  const db = getFirestore();
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const imageContext = useImage();
  const image = imageContext.image;
  const setImage = imageContext.setImage;
  const [userName, setUserName] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Fetch detailed address using the current coordinates
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode && reverseGeocode.length > 0) {
        const address = reverseGeocode[0];
        const selectedAddress = [address.city, address.region, address.country];
        const locationName = selectedAddress.filter(Boolean).join(", ");
        setLocationName(locationName);
      } else {
        setLocationName("Location Not Found");
      }
    })();
  }, []);

  let text = "Waiting Location..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const { coords } = location;
    if (locationName) {
      text = `${locationName}`;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserName(userData.username || "");
          setUserFirstname(userData.firstName || "");
          setUserLastname(userData.lastName || "");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth, db]);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Categoriez");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Quick Response Aid",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete Account",
          onPress: async () => {
            try {
              const userDocRefe = doc(db, "users", auth.currentUser.uid);
              await deleteDoc(userDocRefe);

              await deleteUser(auth.currentUser);

              navigation.navigate("Login");
            } catch (error) {
              console.error("Error deleting account:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleLogout = () => {
    Alert.alert(
      "Quick Response Aid",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Log Out",
          onPress: async () => {
            try {
              await signOut(auth);
              navigation.navigate("Login");
            } catch (error) {
              console.error("Error logging out:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const changePassword = async () => {
    try {
      await updatePassword(auth.currentUser, newPassword);
      Alert.alert("Quick Response Aid", "Password changed successfully.");
      closeModal();
      console.log("Password changed successfully.");
    } catch (error) {
      Alert.alert("Quick Response Aid", "Password change failed.");
      console.log(error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setNewPassword("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).catch((error) => console.log(error));

    if (!result.canceled && result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).catch((error) => console.log(error));

    if (!result.cancelled && result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  let [fontsLoaded] = useFonts({
    Anybody_700Bold,
    Anybody_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TouchableOpacity onPress={pickImage}>
            {!image && (
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="upload"
                  size={20}
                  color="#ffffff"
                />
                <Text
                  style={{
                    marginTop: 20,
                    color: "#ffffff",
                    fontFamily: "Anybody_700Bold",
                  }}
                >
                  Upload Profile Picture
                </Text>
              </View>
            )}
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: "#ffffff",
                }}
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Anybody_700Bold",
              marginTop: 25,
            }}
          >
            @{userName}
          </Text>
          <Text
            style={{
              color: "#fef",
              fontSize: 12,
              fontFamily: "Anybody_700Bold",
              marginTop: 10,
            }}
          >
            {userFirstname} {userLastname}
          </Text>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          style={styles.modal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change Password</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <TextInput
                  style={{
                    height: 40,
                    width: 250,
                    borderWidth: 1,
                    borderRadius: 10,
                    marginBottom: 10,
                    paddingLeft: 10,
                    fontFamily: "Anybody_700Bold",
                  }}
                  autoFocus={true}
                  secureTextEntry={!passVisible}
                  placeholder="New Password"
                  placeholderTextColor="#999999"
                  onChangeText={setNewPassword}
                  value={newPassword}
                />
                <Pressable
                  onPress={() => {
                    setPassVisible(!passVisible);
                    console.log(
                      !passVisible
                        ? "Password is visible."
                        : "Password is hidden."
                    );
                  }}
                  style={styles.viewpassword}
                >
                  <Icon
                    name={passVisible ? "eye-slash" : "eye"}
                    size={20}
                    color="grey"
                  />
                </Pressable>
              </View>
              <View style={styles.modalbuttons}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={closeModal}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={changePassword}
                >
                  <Text style={styles.textStyle}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={[styles.row, { marginTop: 20 }]}>
            <MaterialCommunityIcons
              name="account-edit-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>
              Change Password
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name={"map-marker-outline"}
            size={24}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={[styles.text, { marginTop: 20 }]}>{text}</Text>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={() => {
            console.log("Terms and Conditions pressed.");
            navigation.navigate("Terms and Conditions");
          }}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>
              Terms and Conditions
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Privacy Policy pressed.");
            navigation.navigate("Privacy Policy");
          }}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Send Feedback</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="alert-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>
              Report a Problem
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={() => {
            console.log("Log Out pressed.");
            handleLogout();
          }}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Log Out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Delete Account pressed.");
            handleDeleteAccount();
          }}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Delete Account</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#660000",
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#ffffff",
    fontFamily: "Anybody_700Bold",
    fontSize: 15,
    marginBottom: 20,
  },
  // Icon
  icon: {
    marginRight: 10,
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Divider
  divider: {
    height: 1,
    backgroundColor: "#ffffff",
    marginVertical: 10,
  },
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 4,
    elevation: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#880000",
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 12.5,
    fontFamily: "Anybody_700Bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontFamily: "Anybody_700Bold",
    textAlign: "center",
  },
  modalbuttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingRight: 10,
    width: 150,
  },
  viewpassword: {
    position: "absolute",
    top: 9,
    right: 0,
    bottom: 5,
    left: 217,
  },
});
