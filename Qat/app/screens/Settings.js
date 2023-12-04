import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import * as ImagePicker from "expo-image-picker";
import { app } from "../../firebaseConfig";

export default function Settings() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [userName, setUserName] = useState("");

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
      <View style={styles.content}>
        <View
          style={{
            flex: 1,
            marginTop: 30,
            height: 200,
            width: "100%",
            borderBottomColor: "#ffffff",
            borderBottomwWidth: 1,
          }}
        >
          <TouchableOpacity onPress={pickImage}>
            {!image && (
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="upload"
                  size={24}
                  color="#ffffff"
                />
                <Text
                  style={{
                    marginTop: 10,
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
                style={{ width: 100, height: 100 }}
                borderRadius={50}
              />
            )}
          </TouchableOpacity>

          <Text
            style={{
              color: "#ffffff",
              fontSize: 12,
              fontFamily: "Anybody_700Bold",
              marginTop: 20,
            }}
          >
            {userName}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#660000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
