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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image
            style={styles.images}
            source={require("../../../assets/prereqs-images/fires-ph.jpg")}
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
            In a general sense, "
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires
            </Text>
            " refer to the combustion process that involves the release of heat
            and light.{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Fires
            </Text>{" "}
            can be intentional or accidental and can occur in natural,
            industrial, or domestic settings.
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
            The Philippines experiences{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              wildfires
            </Text>
            , especially during the dry season, which typically occurs from
            November to April. These{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires
            </Text>{" "}
            can be a result of various factors, including human activities and
            natural causes.
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
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Wildfires
            </Text>{" "}
            in the Philippines often originate in forested and grassland areas.
            Some common causes include:
            {`\n`}
            {`\n`}
            {`\u2022`} Human Activities: Unattended campfires, burning of
            agricultural residues, and intentional burning for land clearing.
            {`\n`}
            {`\n`}
            {`\u2022`} Dry Conditions: The dry season, characterized by low
            humidity and lack of rainfall, provides favorable conditions for{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires
            </Text>{" "}
            to spread rapidly.
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
            The dry season, which typically spans from November to April, is
            when{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              wildfires
            </Text>{" "}
            are more likely to occur in the Philippines. During this period,
            vegetation becomes dry, increasing the risk of{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires.
            </Text>
            {"\n"}
            {"\n"}
            Several factors contribute to the occurrence of{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              wildfires
            </Text>
            :{`\n`}
            {`\n`}
            1. Human Activities: Unattended campfires, burning of agricultural
            fields, and intentional land clearing contribute to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              wildfires.
            </Text>
            {`\n`}
            {`\n`}
            2. Dry Conditions: Lack of rainfall and low humidity during the dry
            season create an environment conducive to the rapid spread of{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires.
            </Text>
            {`\n`}
            {`\n`}
            3. Wind: Wind can carry embers and flames, causing{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires.
            </Text>{" "}
            to spread over large areas.
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
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Wildfires
            </Text>{" "}
            can originate from various sources:
            {`\n`}
            {`\n`}
            {`\u2010`} Human Ignition: Careless discarding of cigarettes,
            unattended campfires, and burning of debris.
            {`\n`}
            {`\n`}
            {`\u2010`} Lightning: Natural causes, such as lightning strikes, can
            ignite{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires
            </Text>{" "}
            in dry vegetation.
            {`\n`}
            {`\n`}
            {`\u2010`} Arson: Intentional setting of{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              fires
            </Text>{" "}
            for malicious purposes or land clearing.
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
