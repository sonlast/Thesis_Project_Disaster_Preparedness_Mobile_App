import React, { useEffect } from "react";
import {
  BackHandler,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const MyApp = () => {
  const navigation = useNavigation();

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

  let [fontsLoaded, fontError] = useFonts({
    Anybody_700Bold_Italic,
    Anybody_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Anybody_700Bold",
            fontSize: 24,
            color: "#FF0000",
          }}
        >
          BARANGAY EVACUATION CENTERS
        </Text>
        <ScrollView>
          <View style={styles.content2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Evacuations")}
            >
              <Text
                style={{
                  fontFamily: "Anybody_700Bold",
                  fontSize: 20,
                  color: "#660000",
                  marginTop: 20,
                }}
              >
                Evacuations
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content2: {
    padding: 20,
  },
});

export default MyApp;
