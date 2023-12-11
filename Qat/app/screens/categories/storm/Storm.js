import React, { useEffect } from "react";
import { BackHandler, Image, View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Anybody_400Regular,
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
    Anybody_400Regular,
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
              fontFamily: "Anybody_400Regular",
              fontSize: 15,
              textAlign: "justify",
              padding: 5,
              paddingTop: 20,
              lineHeight: 20,
            }}
          >
            A{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storm{" "}
            </Text>
            is a disturbance in the atmosphere characterized by strong winds,
            heavy rainfall, thunder, lightning, and often other severe weather
            conditions.{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Storms{" "}
            </Text>{" "}
            can take various forms, such as hurricanes, typhoons, cyclones,
            tornadoes, and thunderstorms, depending on their location and the
            specific atmospheric conditions that give rise to them.
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_400Regular",
              fontSize: 15,
              textAlign: "justify",
              padding: 5,
              lineHeight: 20,
            }}
          >
            In the Philippines, storms often originate in the western Pacific
            Ocean, particularly in the region known as the Philippine Sea. The
            Philippines is susceptible to tropical cyclones, which include
            tropical depressions, tropical{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storms
            </Text>
            , and typhoons (the term used for hurricanes in the western
            Pacific).
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_400Regular",
              fontSize: 15,
              textAlign: "justify",
              padding: 5,
              paddingTop: 20,
              lineHeight: 20,
            }}
          >
            The country typically experiences an average of 20 tropical cyclones
            per year, with most of them occurring between June and November.
            This period is commonly referred to as the typhoon season.
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_400Regular",
              fontSize: 15,
              textAlign: "justify",
              padding: 5,
              paddingTop: 20,
              lineHeight: 20,
            }}
          >
            Tropical cyclones form over warm ocean waters when the sea surface
            temperature is at least 26.5 degrees Celsius (80 degrees
            Fahrenheit). The warm ocean provides the necessary energy and
            moisture to fuel the development of these{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storm
            </Text>
            . The Earth's rotation causes the developing storm system to spin,
            and as it gains strength and organization, it can evolve into a
            tropical depression, tropical storm, and eventually a typhoon.
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_400Regular",
              fontSize: 15,
              textAlign: "justify",
              padding: 5,
              paddingTop: 20,
              lineHeight: 20,
            }}
          >
            The primary factors contributing to the formation of{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storms{" "}
            </Text>{" "}
            include:
            {`\n`}
            {`\n`}
            1. Warm ocean waters: The heat from warm ocean waters evaporates,
            providing energy to the
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              {" "}
              storm
            </Text>
            .{`\n`}
            {`\n`}
            2. Atmospheric instability: When there is a difference in
            temperature and humidity between the lower and upper atmosphere, it
            creates instability that fosters{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storm{" "}
            </Text>{" "}
            development.
            {`\n`}
            {`\n`}
            3. Low vertical wind shear: Minimal change in wind speed and
            direction with height allows the{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storm{" "}
            </Text>{" "}
            to maintain its structure and intensify. Instability in
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_400Regular",
              fontSize: 15,
              textAlign: "justify",
              padding: 5,
              paddingTop: 20,
              lineHeight: 20,
            }}
          >
            As the{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storm{" "}
            </Text>{" "}
            gains strength and develops into a typhoon, it can pose significant
            risks to coastal areas, causing heavy rainfall, strong winds,{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storm{" "}
            </Text>
            surges, and flooding. The Philippines, being an archipelagic country
            with many coastal communities, is particularly vulnerable to the
            impacts of these tropical cyclones. The government and various
            agencies often take measures to prepare and respond to these{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              storm{" "}
            </Text>
            to minimize the potential damage and protect the population.
          </Text>
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
