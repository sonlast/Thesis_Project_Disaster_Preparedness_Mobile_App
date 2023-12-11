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
          EARTHQUAKE EMERGENCY TIPS
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
              BEFORE AN EARTHQUAKE
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
              Create an Emergency Plan
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
              {`\u2022`} Establish a family emergency plan that includes meeting
              points, communication methods, and evacuation routes.
              {`\n`}
              {`\n`}
              {`\u2022`} Practice earthquake drills with your family or
              coworkers.
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
              Secure your Space
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
              {`\u2022`} Anchor heavy furniture, appliances, and tall, top-heavy
              furniture to the wall.
              {`\n`}
              {`\n`}
              {`\u2022`} Use flexible fastenings for items on shelves to prevent
              them from falling during shaking.
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
              Emergency Supplies
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
              Know Your Environment
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
              {`\u2022`} Identify safe spots in each room, such as under sturdy
              tables or against interior walls.
              {`\n`}
              {`\n`}
              {`\u2022`} Be aware of potential hazards, like windows, heavy
              furniture, and unsecured items.
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
              DURING AN EARTHQUAKE
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
              Drop, Cover, and Hold On
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
              {`\u2022`} Drop to the ground, take cover under a sturdy piece of
              furniture, and hold on until the shaking stops.
              {`\n`}
              {`\n`}
              {`\u2022`} If there's no furniture to take cover under, protect
              your head and neck with your arms and seek shelter against an
              interior wall away from windows.
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
              {`\u2022`} If you are inside, stay inside. Do not run outside
              during the shaking, as you may be injured by falling debris.
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
              Stay Away from Windows
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
              {`\u2022`} Move away from windows, glass, and other items that may
              shatter during the earthquake.
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
              If Outside
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
              {`\u2022`} Move to an open area away from buildings, streetlights,
              utility wires, and overpasses.
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
              If Driving
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
              {`\u2022`} Pull over to a safe location away from overpasses,
              bridges, and tall structures.
              {`\n`}
              {`\n`}
              {`\u2022`} Stay inside the vehicle until the shaking stops.
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
              AFTER AN EARTHQUAKE
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
              Check for Inquiries
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
              {`\u2022`} Assess yourself and others for injuries and administer
              first aid as needed.
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
              Be Cautious of Aftershocks
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
              {`\u2022`} Aftershocks may follow the initial quake, so be
              prepared for additional shaking.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Evacuate if Necessary
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
              {`\u2022`} If you smell gas, see fire, or there is damage to your
              building, evacuate to an open area.
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
              {`\u2022`} Stay informed through a battery-powered radio or
              emergency alerts for official information.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Inspect Your Surroundings
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
              {`\u2022`} Be cautious of potential hazards, such as damaged
              buildings, downed power lines, and broken glass.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Communication and Reconnect
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
              {`\u2022`} Use your emergency communication plan to contact family
              members and let them know you are safe.
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
