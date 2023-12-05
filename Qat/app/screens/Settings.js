import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useImage } from "./ImageContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function Settings() {
  const db = getFirestore();
  const navigation = useNavigation();
  const imageContext = useImage();
  const image = imageContext.image;
  const setImage = imageContext.setImage;
  const [userName, setUserName] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const auth = getAuth();

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
              marginTop: 30,
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
        <Pressable>
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
        </Pressable>
        <Pressable>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name={"map-marker-outline"}
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Location</Text>
          </View>
        </Pressable>
        <View style={styles.divider} />

        <Pressable>
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
        </Pressable>
        <Pressable>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Privacy Policy</Text>
          </View>
        </Pressable>
        <View style={styles.divider} />
        <Pressable>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="account-question-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Help Center</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Send Feedback</Text>
          </View>
        </Pressable>
        <Pressable>
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
        </Pressable>
        <View style={styles.divider} />
        <Pressable>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Log Out</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={24}
              color="#ffffff"
              style={styles.icon}
            />
            <Text style={[styles.text, { marginTop: 20 }]}>Delete Account</Text>
          </View>
        </Pressable>
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
  icon: {
    marginRight: 10,
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#ffffff",
    marginVertical: 10,
  },
});
