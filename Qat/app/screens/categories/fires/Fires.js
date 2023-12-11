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
              landslide{" "}
            </Text>{" "}
            is a geological phenomenon characterized by the movement of rock,
            soil, and debris down a slope. It can vary in scale from small rock
            falls to large, catastrophic events involving massive amounts of
            material.{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Landslides
            </Text>{" "}
            can be triggered by various factors, including heavy rainfall,
            earthquakes, volcanic activity, human activities, and changes in
            slope stability.
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
            The Philippines is prone to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>{" "}
            due to its geographical features such as steep slopes, rugged
            terrain, and frequent seismic and weather-related events. Areas with
            high susceptibility to landslides are typically those with loose or
            poorly compacted soil, volcanic deposits, or fractured rock.
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
            Some specific regions in the Philippines that are more prone to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>{" "}
            include mountainous areas, steep slopes, and regions with a history
            of geological instability. For example, the Cordillera
            Administrative Region, parts of Mindanao, and areas near volcanic
            sites like the Bicol region.
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
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              Landslides
            </Text>{" "}
            in the Philippines often occur during the rainy season, which
            typically runs from June to November. The combination of heavy
            rainfall, saturated soil, and steep terrain increases the likelihood
            of slope failures and{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>{" "}
            during this period. However,{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>{" "}
            can also occur during typhoons, earthquakes, or other events that
            disturb the stability of the ground.
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
              Landslides
            </Text>{" "}
            can be triggered by both natural and human-induced factors. Some
            common causes include:
            {`\n`}
            {`\n`}
            {`\u2022`} Heavy Rainfall: Prolonged or intense rainfall can
            saturate the soil, reducing its stability and triggering{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>
            .{`\n`}
            {`\n`}
            {`\u2022`} Earthquakes: Seismic activity can destabilize slopes and
            trigger{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>
            .{`\n`}
            {`\n`}
            {`\u2022`} Volcanic Activity: Volcanic eruptions can lead to the
            deposition of loose materials on slopes, increasing the risk of{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>
            .{`\n`}
            {`\n`}
            {`\u2022`} Human Activities: Deforestation, mining, construction,
            and other human activities can alter the natural stability of
            slopes, making them more susceptible to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              landslides
            </Text>
            . in urban areas.
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
              Landslides
            </Text>{" "}
            originate when the forces acting on a slope exceed the strength of
            the materials holding it together. This can happen through a variety
            of mechanisms, including:
            {`\n`}
            {`\n`}
            1. Slope Saturation: When heavy rainfall saturates the soil, it
            increases its weight and reduces its shear strength, making it more
            prone to sliding.
            {`\n`}
            {`\n`}
            2. Erosion: Continuous erosion by rivers or surface runoff can
            undercut the base of a slope, leading to instability.
            {`\n`}
            {`\n`}
            3. Earthquakes: The shaking from seismic events can induce slope
            failure by altering the balance of forces within the slope material.
            {`\n`}
            {`\n`}
            4. Human Disturbance: Excavation, deforestation, and other human
            activities can remove vegetation or alter the natural slope,
            contributing to instability.
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
