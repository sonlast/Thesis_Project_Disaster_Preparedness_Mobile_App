import * as React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { ScrollView } from "react-native-gesture-handler";

const MyApp = () => {
  let [fontsLoaded, fontError] = useFonts({
    Anybody_700Bold_Italic,
    Anybody_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image
            style={styles.images}
            source={require("../../../assets/prereqs-images/storm-ph.jpg")}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontFamily: "Anybody_700Bold",
              fontSize: 20,
              color: "#ff0000",
            }}
          >
            Information
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_700Bold",
              fontSize: 15,
              textAlign: "justify",
              padding: 20,
            }}
          >
            Storm is a violent atmospheric disturbance characterized by low
            barometric pressure, cloud cover, precipitation, strong winds, and
            possibly lightning and thunder. It can be a heavy fall of rain,
            snow, or hail, or a violent outbreak of thunder and lightning,
            unaccompanied by strong winds. Storms can also refer to a serious
            disturbance of any element of nature.
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_700Bold",
              fontSize: 15,
              textAlign: "justify",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            Tropical cyclones in the Philippines are generally called bagyo12.
            The country is known to be "the most exposed country in the world to
            tropical storms", with about twenty tropical cyclones entering the
            Philippine area of responsibility each year1. The Philippines
            typically experiences 20 typhoons or tropical storms annually, with
            the months of June to September being the most active23. These
            storms are alternately known as hurricanes, typhoons, and cyclones,
            and are fueled by the evaporation of warm water.
          </Text>
          <Image
            source={require("../../../assets/prereqs-images/OIP.jpg")}
            style={{ width: 300, height: 200, alignSelf: "center" }}
          />
        </View>
      </ScrollView>
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
  },
  images: {
    width: 500,
    height: 200,
  },
});

export default MyApp;
