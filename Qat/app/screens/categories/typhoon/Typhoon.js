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
            source={require("../../../assets/prereqs-images/typhoon-ph.jpg")}
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
              typhoon{" "}
            </Text>{" "}
            is a large, powerful tropical cyclone, similar to hurricanes in the
            Atlantic and the northeastern Pacific, and cyclones in the South
            Pacific and Indian Ocean.{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Typhoons{" "}
            </Text>{" "}
            are characterized by strong sustained winds, heavy rainfall, storm
            surges, and can cause significant damage to coastal areas.
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
              Typhoons{" "}
            </Text>{" "}
            that affect the Philippines typically originate in the northwest
            Pacific Ocean. The warm waters of the Pacific provide the necessary
            energy to fuel the development of tropical cyclones. These storms
            often form in the vicinity of the Philippines or in the waters east
            of the country.
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
                fontFamily: "Anybody_400Regular",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                paddingTop: 20,
                lineHeight: 20,
              }}
            >
              The Philippines is vulnerable to{" "}
              <Text
                style={{
                  fontFamily: "Anybody_700Bold",
                  fontSize: 15,
                  textAlign: "justify",
                  padding: 5,
                  lineHeight: 20,
                }}
              >
                typhoons{" "}
              </Text>{" "}
              throughout the year, but the peak of the{" "}
              <Text
                style={{
                  fontFamily: "Anybody_700Bold",
                  fontSize: 15,
                  textAlign: "justify",
                  padding: 5,
                  lineHeight: 20,
                }}
              >
                typhoon{" "}
              </Text>{" "}
              season is generally from June to November. During this period,
              warm sea surface temperatures and favorable atmospheric conditions
              contribute to the formation and intensification of{" "}
              <Text
                style={{
                  fontFamily: "Anybody_700Bold",
                  fontSize: 15,
                  textAlign: "justify",
                  padding: 5,
                  lineHeight: 20,
                }}
              >
                typhoons
              </Text>
              .
            </Text>
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
                Typhoons{" "}
              </Text>{" "}
              are caused by the interaction of warm ocean water, moist air, and
              certain atmospheric conditions. Warm water acts as a heat source,
              evaporating water into the air and providing energy to the
              developing storm. The Earth's rotation causes the developing
              system to spin, and if conditions are conducive, it can evolve
              into a{" "}
              <Text
                style={{
                  fontFamily: "Anybody_700Bold",
                  fontSize: 15,
                  textAlign: "justify",
                  padding: 5,
                  lineHeight: 20,
                }}
              >
                typhoon
              </Text>
              .
            </Text>
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
              typhoons{" "}
            </Text>{" "}
            include:
            {`\n`}
            {`\n`}
            1. Warm ocean waters:{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Typhoons{" "}
            </Text>{" "}
            require sea surface temperatures of at least 26.5 degrees Celsius
            (about 80 degrees Fahrenheit) to provide the necessary heat and
            moisture.{`\n`}
            {`\n`}
            2. Atmospheric instability: The atmosphere must be unstable,
            allowing warm, moist air at the surface to rise and create
            low-pressure systems.
            {`\n`}
            {`\n`}
            3. Coriolis Effect: The Coriolis effect, caused by the Earth's
            rotation, imparts a spin to the developing system. This effect is
            crucial for the formation of tropical cyclones.
            {`\n`}
            {`\n`}
            4. Low Wind Shear: Low vertical wind shear is essential for the
            vertical development of the storm. Wind shear can disrupt the
            organization of the storm.
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
            As warm air rises from the ocean surface, it cools and condenses,
            releasing latent heat. This process intensifies the low-pressure
            system, creating a cycle that sustains and strengthens the{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              typhoon
            </Text>
            . The mature{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              typhoon
            </Text>{" "}
            is characterized by a well-defined eye surrounded by bands of
            intense convection.
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
