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
            source={require("../../../assets/prereqs-images/earthquake-ph.jpg")}
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
            An{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquake{" "}
            </Text>{" "}
            is the shaking of the surface of the Earth resulting from a sudden
            release of energy in the Earth's lithosphere that creates seismic
            waves. This seismic activity can range from barely noticeable
            tremors to destructive quakes that can cause significant damage.
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
            The Philippines is located in a seismically active region known as
            the Pacific Ring of Fire. This area is characterized by high seismic
            and volcanic activity due to the movement of several tectonic
            plates. The Philippine archipelago is situated at the convergence of
            several of these plates, including the Philippine Sea Plate, the
            Pacific Plate, and the Eurasian Plate. The interactions and
            movements of these plates give rise to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquakes{" "}
            </Text>{" "}
            in the region.
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
              Earthquakes{" "}
            </Text>
            can occur at any time of the year, and there is no specific season
            for seismic activity. However, certain areas may experience
            increased seismicity during particular periods. The frequency of{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquakes{" "}
            </Text>
            in a specific region depends on its geological characteristics and
            tectonic activity.
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
              Earthquakes{" "}
            </Text>
            happen primarily due to the movement of tectonic plates beneath the
            Earth's surface. The Earth's lithosphere is divided into several
            large and small tectonic plates that float on the semi-fluid
            asthenosphere. These plates are constantly in motion, and their
            interactions at plate boundaries lead to stress buildup. When the
            stress overcomes the strength of the rocks, it results in a sudden
            release of energy in the form of seismic waves, causing an{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquake
            </Text>
            .
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
              Earthquakes{" "}
            </Text>{" "}
            originate at the fault lines, which are zones where tectonic plates
            interact. There are three main types of plate boundaries where{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquakes{" "}
            </Text>{" "}
            commonly occur:
            {`\n`}
            {`\n`}
            1. Divergent Boundaries: Plates move away from each other, creating
            tensional stress and often leading to{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquakes
            </Text>
            .{`\n`}
            {`\n`}
            2. Convergent Boundaries: Plates move towards each other, resulting
            in compressional stress. The intense pressure at these boundaries
            can cause{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquake
            </Text>
            .{`\n`}
            {`\n`}
            3. Transform Boundaries: Plates slide past each other horizontally,
            creating shear stress. The release of stress along these boundaries
            causes{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquakes
            </Text>
            .
          </Text>
          <Text
            style={{
              fontFamily: "Anybody_400Regular",
              fontSize: 15,
              textAlign: "justify",
              padding: 5,
              paddingTop: 10,
              lineHeight: 20,
            }}
          >
            The point on the Earth's surface directly above the{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquake's{" "}
            </Text>
            point of origin (the hypocenter) is known as the epicenter. The
            severity of an{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquake
            </Text>{" "}
            is measured on the Richter scale or the moment magnitude scale,
            which quantifies the amount of energy released during an{" "}
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 15,
                textAlign: "justify",
                padding: 5,
                lineHeight: 20,
              }}
            >
              earthquake
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
