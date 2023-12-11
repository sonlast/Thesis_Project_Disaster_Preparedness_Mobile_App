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
            source={require("../../../assets/prereqs-images/flood-ph.jpg")}
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
              flood{" "}
            </Text>
            is an overflow of water onto normally dry land, often caused by
            heavy rainfall, storm surges, melting snow, or the rapid melting of
            ice.{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Floods
            </Text>{" "}
            can also result from the overflow of rivers, lakes, or dams, or from
            the accumulation of water in low-lying areas.
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
            In the Philippines,{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              floods
            </Text>{" "}
            can originate from various sources, including:
            {`\n`}
            {`\n`}
            {`\u2022`} Monsoon Rains: The Philippines experiences a tropical
            climate and is affected by monsoon winds. During the southwest
            monsoon (Habagat), which typically occurs from June to October,
            heavy rains can lead to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>
            .{`\n`}
            {`\n`}
            {`\u2022`} Typhoons: The Philippines is prone to typhoons,
            especially during the typhoon season from June to November. Typhoons
            bring strong winds and heavy rainfall, leading to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>{" "}
            in low-lying areas.
            {`\n`}
            {`\n`}
            {`\u2022`} Topography: The country's topography, with numerous
            rivers and mountainous regions, can contribute to flash{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              floods{" "}
            </Text>{" "}
            and riverine{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>
            , especially in areas with poor drainage.
            {`\n`}
            {`\n`}
            {`\u2022`} Urbanization: Rapid urbanization and inadequate
            infrastructure, such as poorly{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>{" "}
            in urban areas.
            {`\n`}
            {`\n`}
            {`\u2022`} Storm Surges: Coastal areas can experience{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>{" "}
            due to storm surges, which are elevated water levels driven by
            strong winds and low atmospheric pressure associated with tropical
            cyclones.
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
              Flooding
            </Text>{" "}
            in the Philippines can occur throughout the year, but the frequency
            and intensity often increase during the rainy season and when
            typhoons make landfall.
            {`\n`}
            {`\n`}
            The primary reasons{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              floods{" "}
            </Text>
            happen include:
            {`\n`}
            {`\n`}
            1. Heavy Rainfall: Intense and prolonged rainfall can overwhelm
            natural drainage systems, rivers, and other water bodies.
            {`\n`}
            {`\n`}
            2. Tropical Cyclones: Typhoons bring strong winds and heavy
            rainfall, leading to storm surges and widespread{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>
            .{`\n`}
            {`\n`}
            3. Poor Drainage: Inadequate drainage infrastructure in urban areas
            can lead to surface water runoff and{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>
            .{`\n`}
            {`\n`}
            4. Deforestation: Removal of natural vegetation can reduce the
            ability of the land to absorb water, leading to increased surface
            runoff and the potential for{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              flooding
            </Text>
            .
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
