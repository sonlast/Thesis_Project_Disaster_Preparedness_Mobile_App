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
          FLOOD EMERGENCY TIPS
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
              BEFORE THE FLOOD
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
              {`\u2022`} Monitor weather forecasts and river/stream levels.
              {`\n`}
              {`\n`}
              {`\u2022`} Be aware of flood-prone areas in your region.
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
              {`\u2022`} Have a family evacuation plan. Determine a safe meeting
              point and multiple routes to reach it.
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
              Insurance
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
              {`\u2022`} Ensure your property is adequately insured against
              floods.
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
              Elevate Utilities
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
              {`\u2022`} Elevate electrical appliances and utilities such as
              switches, sockets, and HVAC systems to higher levels.
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
              Secure Important Documents
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
              {`\u2022`} Keep important documents in a waterproof container or
              digitally backed up.
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
              DURING THE FLOOD
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
              Evacuation
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
              {`\u2022`} Follow evacuation orders promptly. Don't wait until the
              last minute.
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
              Avoid Walking or Driving Through Floodwaters
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
              {`\u2022`} Just six inches of fast-flowing water can knock you
              over, and two feet can sweep away most vehicles.
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
              Seek Higher Ground
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
              {`\u2022`} Move to higher ground and stay there until the danger
              has passed.
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
              Turn Off Utilities
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
              {`\u2022`} Turn off gas, water, and electricity if instructed to
              do so.
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
              {`\u2022`} Listen to weather updates and emergency alerts on a
              battery-powered weather radio or smartphone.
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
              AFTER THE FLOOD
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
              Return Home with Caution
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
              {`\u2022`} Wait until authorities indicate it is safe to return
              home.
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
              Inspect Your Home
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
              {`\u2022`} Check for structural damage before entering your home.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Beware of Contaminated Water
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
              {`\u2022`} Avoid contact with floodwater as it may be contaminated
              with sewage or hazardous substances.
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
              {`\u2022`} Take photos of any damage to support insurance claims.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Seek Professional Help
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
              {`\u2022`} Have professionals inspect and restore utilities.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Health Precautions
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
              {`\u2022`} Use protective gear when cleaning up, and be cautious
              of mold growth.
            </Text>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#660000",
                textAlign: "left",
              }}
            >
              Emotional Support
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
              {`\u2022`} Flooding can be emotionally taxing. Seek support from
              friends, family, or professionals.
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
