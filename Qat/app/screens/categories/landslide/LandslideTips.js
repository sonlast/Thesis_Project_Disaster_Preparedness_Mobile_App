import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  useFonts,
  Anybody_400Regular,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "expo-checkbox";

const MyApp = () => {
  const navigation = useNavigation();
  const [isCheck, setChecked] = useState(false);
  const [isCheck2, setChecked2] = useState(false);
  const [isCheck3, setChecked3] = useState(false);
  const [isCheck4, setChecked4] = useState(false);
  const [isCheck5, setChecked5] = useState(false);
  const [isCheck6, setChecked6] = useState(false);
  const [isCheck7, setChecked7] = useState(false);
  const [isCheck8, setChecked8] = useState(false);
  const [isCheck9, setChecked9] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

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

  const allChecked = () => {
    return (
      isCheck &&
      isCheck2 &&
      isCheck3 &&
      isCheck4 &&
      isCheck5 &&
      isCheck6 &&
      isCheck7 &&
      isCheck8 &&
      isCheck9
    );
  };

  const allSelected = () => {
    setChecked(!selectAll);
    setChecked2(!selectAll);
    setChecked3(!selectAll);
    setChecked4(!selectAll);
    setChecked5(!selectAll);
    setChecked6(!selectAll);
    setChecked7(!selectAll);
    setChecked8(!selectAll);
    setChecked9(!selectAll);

    setSelectAll(!selectAll);
  };

  const checkBoxcolor = allChecked() ? "#00ff00" : "#660000";

  const handleCheckBoxPress = (checkBoxState, setCheckBoxState) => {
    setCheckBoxState(!checkBoxState);
    setSelectAll(false);
  };

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
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Anybody_700Bold",
            fontSize: 24,
            color: "#FF0000",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          LANDSLIDE EMERGENCY TIPS
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content2}>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "center",
              }}
            >
              BEFORE A LANDSLIDE
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
                textAlign: "left",
              }}
            >
              Stay Informed
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {`\u2022`} Be aware of the weather conditions and any potential
              landslide risks in your area.
              {`\n`}
              {`\n`}
              {`\u2022`} Monitor local news and weather reports.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
                textAlign: "left",
              }}
            >
              Evacuation Plan
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {`\u2022`} Have a family emergency plan in place, including
              evacuation routes and meeting points.
              {`\n`}
              {`\n`}
              {`\u2022`} Know the location of emergency shelters in your area.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 10,
                textAlign: "left",
              }}
            >
              Secure Your Home
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {`\u2022`} Implement erosion control measures, such as retaining
              walls and barriers.
              {`\n`}
              {`\n`}
              {`\u2022`} Keep gutters and downspouts clear to prevent water
              buildup.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              DURING A LANDSLIDE
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
                textAlign: "left",
              }}
            >
              Evacuate Immediately
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {`\u2022`} If you notice signs of a landslide (unusual sounds,
              ground movement), leave the area immediately.
              {`\n`}
              {`\n`}
              {`\u2022`} Do not wait for official evacuation orders if you feel
              at risk.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
                textAlign: "left",
              }}
            >
              Move to Higher Ground
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {`\u2022`} Head uphill and away from the path of the landslide.
              {`\n`}
              {`\n`}
              {`\u2022`} Avoid valleys and low-lying areas where debris may
              accumulate.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
                textAlign: "left",
              }}
            >
              Stay Alert
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {`\u2022`} Be aware of your surroundings and any changes in the
              landscape.
              {`\n`}
              {`\n`}
              {`\u2022`} Listen for unusual sounds that may signal a landslide.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              AFTER A LANDSLIDE
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
                textAlign: "left",
              }}
            >
              Do Not Return Prematurely
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {`\u2022`} Stay away from the affected area until authorities
              declare it safe to return.
              {`\n`}
              {`\n`}
              {`\u2022`} Be cautious of secondary landslides, which can occur
              after the initial event.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
                textAlign: "left",
              }}
            >
              Check for Injuries
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
                marginBottom: 20,
              }}
            >
              {`\u2022`} Attend to any injuries and seek medical help if needed.
              {`\n`}
              {`\n`}
              {`\u2022`} Be cautious of unstable ground and falling debris.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Assess Your Property
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
                marginBottom: 20,
              }}
            >
              {`\u2022`} Check for structural damage to your home and utilities.
              {`\n`}
              {`\n`}
              {`\u2022`} Consult with professionals to evaluate the safety of
              your property.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Listen to Authorities
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
                marginBottom: 20,
              }}
            >
              {`\u2022`} Follow instructions from local authorities regarding
              cleanup and recovery efforts.
              {`\n`}
              {`\n`}
              {`\u2022`} Report any hazards or concerns to the appropriate
              authorities.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Be Prepared for Aftershocks:
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
                marginBottom: 20,
              }}
            >
              {`\u2022`} Landslides may be followed by aftershocks. Be prepared
              for additional seismic activity.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Document Damage
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
                marginBottom: 20,
              }}
            >
              {`\u2022`} Take photographs of damage for insurance claims.
              {`\n`}
              {`\n`}
              {`\u2022`} Keep records of expenses related to temporary housing
              or repairs.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Community Support
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_400Regular",
                fontSize: 17.5,
                color: "#660000",
                marginTop: 10,
                textAlign: "justify",
                marginBottom: 20,
              }}
            >
              {`\u2022`} Offer assistance to neighbors and community members in
              need.
              {`\n`}
              {`\n`}
              {`\u2022`} Participate in community recovery efforts.
            </Text>
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
    padding: 20,
  },
  content2: {
    padding: 20,
    paddingTop: 5,
  },
});

export default MyApp;
