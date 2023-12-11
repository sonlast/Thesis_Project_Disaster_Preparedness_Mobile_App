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
          TYPHOON EMERGENCY TIPS
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
              BEFORE THE TYPHOON
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
              {`\u2022`} Monitor weather updates from reliable sources. {`\n`}
              {`\n`}
              {`\u2022`} Follow local authorities' instructions and warnings.
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
              Emergency Kit
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: "#ffffff",
                borderRadius: 5,
              }}
              onPress={allSelected}
            >
              <Text
                style={{
                  fontFamily: "Anybody_400Regular",
                  fontSize: 15,
                  color: "#660000",
                  textAlign: "justify",
                }}
              >
                {selectAll ? "Deselect All" : "Select All"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                backgroundColor: "#ffffff",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CheckBox
                  value={isCheck}
                  onValueChange={() => handleCheckBoxPress(isCheck, setChecked)}
                  color={checkBoxcolor}
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Non-Perishable Food
                </Text>
                <CheckBox
                  value={isCheck2}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck2, setChecked2)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10, marginLeft: 39 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Water
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <CheckBox
                  value={isCheck3}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck3, setChecked3)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Medications
                </Text>
                <CheckBox
                  value={isCheck4}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck4, setChecked4)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10, marginLeft: 23 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  First Aid Supplies
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <CheckBox
                  value={isCheck5}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck5, setChecked5)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Flashlight
                </Text>
                <CheckBox
                  value={isCheck6}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck6, setChecked6)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10, marginLeft: 16 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Batteries
                </Text>
                <CheckBox
                  value={isCheck7}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck7, setChecked7)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10, marginLeft: 16 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Cash
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <CheckBox
                  value={isCheck8}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck8, setChecked8)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Documents
                </Text>
                <CheckBox
                  value={isCheck9}
                  onValueChange={() =>
                    handleCheckBoxPress(isCheck9, setChecked9)
                  }
                  color={checkBoxcolor}
                  style={{ marginRight: 10, marginLeft: 32 }}
                />
                <Text
                  style={{
                    fontFamily: "Anybody_400Regular",
                    fontSize: 17.5,
                    color: "#660000",
                    textAlign: "justify",
                  }}
                >
                  Personal Hygiene
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                marginTop: 20,
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
              {`\u2022`} Reinforce windows with storm shutters or plywood.
              {`\n`}
              {`\n`}
              {`\u2022`} Ensure that doors have multiple locks.
              {`\n`}
              {`\n`}
              {`\u2022`} Secure outdoor furniture and loose items that could
              become projectiles.
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
              Evacuation Plans
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
              {`\u2022`} Know the nearest evacuation shelters and routes.
              {`\n`}
              {`\n`}
              {`\u2022`} Plan transportation in case of evacuation.
              {`\n`}
              {`\n`}
              {`\u2022`} Have a family communication plan.
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
              DURING THE TYPHOON
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
              Stay Indoors
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
              {`\u2022`} Seek shelter in a sturdy building, away from windows.
              {`\n`}
              {`\n`}
              {`\u2022`} Avoid using candles; use flashlights instead.
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
              Listen to Updates
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
              {`\u2022`} Keep a battery-powered weather radio for updates.
              {`\n`}
              {`\n`}
              {`\u2022`} Follow instructions from local authorities.
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
              Power Outages
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
              {`\u2022`} Unplug electronic devices to prevent damage from power
              surges.
              {`\n`}
              {`\n`}
              {`\u2022`} Use generators with caution, following safety
              guidelines.
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
              Avoid Flooded Areas
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
              {`\u2022`} Do not walk or drive through flooded streets.
              {`\n`}
              {`\n`}
              {`\u2022`} Be cautious of storm surges near coastal areas.
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
              AFTER THE TYPHOON
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
              Safety Checks
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
              {`\u2022`} Check for injuries and administer first aid.
              {`\n`}
              {`\n`}
              {`\u2022`} Stay inside until authorities declare it safe to go
              outside.
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
              Utilities Check
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
              {`\u2022`} Inspect for gas leaks, electrical issues, and water
              damage.
              {`\n`}
              {`\n`}
              {`\u2022`} Report utility issues to the appropriate authorities.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Food and Water Safety
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
              {`\u2022`} Discard perishable food that may have spoiled.
              {`\n`}
              {`\n`}
              {`\u2022`} Boil water or use bottled water until authorities
              confirm tap water safety.
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
              {`\u2022`} Check on neighbors, especially the elderly or those
              with special needs.
              {`\n`}
              {`\n`}
              {`\u2022`} Offer assistance to those in need.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
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
                marginBottom: 20,
              }}
            >
              {`\u2022`} Continue to monitor updates for any additional warnings
              or information.
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
