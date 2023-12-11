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
          STORM EMERGENCY TIPS
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content2}>
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
              {`\u2022`} Monitor weather forecasts and updates through a
              reliable source like a weather radio, NOAA Weather Radio, or a
              weather app on your smartphone. {`\n`}
              {`\n`}
              {`\u2022`} Follow local news and emergency management agencies for
              real-time information.
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
              {`\u2022`} Reinforce windows and doors. Consider installing storm
              shutters or boarding up windows.{`\n`}
              {`\n`}
              {`\u2022`} Bring outdoor furniture, decorations, and other loose
              items inside or secure them to prevent them from becoming
              projectiles.
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
              {`\u2022`} Know your evacuation routes and have a plan in case you
              need to leave your home.
              {`\n`}
              {`\n`}
              {`\u2022`} Follow evacuation orders issued by local authorities.
              Don't wait until the last minute to evacuate.
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
              Communication
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
              {`\u2022`} Ensure your cell phone is fully charged. Consider
              getting a portable power bank.
              {`\n`}
              {`\n`}
              {`\u2022`} Establish a communication plan with family and friends.
              Agree on a meeting point or use social media to check in.
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
              Shelter
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
              {`\u2022`} If you can't stay in your home, know the location of
              local shelters.
              {`\n`}
              {`\n`}
              {`\u2022`} If you have pets, make arrangements for their shelter
              as well.
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
              During The Storm
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
              {`\u2022`} Stay indoors and away from windows. If possible, go to
              a small, windowless interior room on the lowest floor of your
              home.
              {`\n`}
              {`\n`}
              {`\u2022`} Listen to a battery-powered weather radio or emergency
              alert system for updates.
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
              {`\u2022`} Use flashlights instead of candles to avoid fire
              hazards.
              {`\n`}
              {`\n`}
              {`\u2022`} Turn off major appliances to prevent damage from power
              surges when the electricity is restored.
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
              After The Storm
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
              {`\u2022`} Be cautious of downed power lines and report them to
              the utility company.
              {`\n`}
              {`\n`}
              {`\u2022`} Avoid flooded roads and standing water, as it may be
              electrically charged or hide dangerous debris.
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
              Check On Neighbours
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
              {`\u2022`} After the storm has passed, check on neighbors,
              especially those who may need assistance such as the elderly or
              individuals with disabilities.
              {`\n`}
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
