import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Pressable,
  Linking,
  Text,
  View,
  StyleSheet,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { FontAwesome5 } from "react-native-vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { trackEvent } from "@aptabase/react-native";

const MyApp = () => {
  const navigation = useNavigation();
  const [uses, setUses] = useState(0);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("TyphoonHotlines");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  let [fontsLoaded, fontError] = useFonts({
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
            fontSize: 20,
            color: "#FF0000",
          }}
        >
          EMERGENCY HOTLINES
        </Text>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#FF0000",
                marginTop: 20,
              }}
            >
              TAGUIG RESCUE
            </Text>
            <Text style={styles.numbers}>+63 919 070 3112</Text>
            <Pressable
              onPress={() => {
                setUses(uses + 1);
                trackEvent("Hotline Used: Taguig Rescue", { uses });
                Linking.openURL("tel: 09190703112");
              }}
              style={styles.pressablecallbtn}
            >
              <View style={styles.callContainer}>
                <Text style={styles.calltext}>Call</Text>
                <FontAwesome5
                  name="phone"
                  size={20}
                  color="#fff"
                  style={{ paddingLeft: 20 }}
                />
              </View>
            </Pressable>

            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#FF0000",
                marginTop: 20,
              }}
            >
              SAFE CITY TAGUIG
            </Text>
            <Text style={styles.numbers}>+63 917 833 1327</Text>
            <Pressable
              onPress={() => {
                setUses(uses + 1);
                trackEvent("Hotline Used: Safe City Taguig", { uses });
                Linking.openURL("tel: 09178331327");
              }}
              style={styles.pressablecallbtn}
            >
              <View style={styles.callContainer}>
                <Text style={styles.calltext}>Call</Text>
                <FontAwesome5
                  name="phone"
                  size={20}
                  color="#fff"
                  style={{ paddingLeft: 20 }}
                />
              </View>
            </Pressable>

            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#FF0000",
                marginTop: 20,
              }}
            >
              DOCTOR ON CALL
            </Text>
            <Text style={styles.numbers}>+63 919 079 9112</Text>
            <Pressable
              onPress={() => {
                setUses(uses + 1);
                trackEvent("Hotline Used: Doctor On Call", { uses });
                Linking.openURL("tel: 09190799112");
              }}
              style={styles.pressablecallbtn}
            >
              <View style={styles.callContainer}>
                <Text style={styles.calltext}>Call</Text>
                <FontAwesome5
                  name="phone"
                  size={20}
                  color="#fff"
                  style={{ paddingLeft: 20 }}
                />
              </View>
            </Pressable>

            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#FF0000",
                marginTop: 20,
              }}
            >
              TAGUIG EMERGENCY HOTLINE
            </Text>
            <Text style={styles.numbers}>(02) 165 7777</Text>
            <Text style={styles.landlinetxt}>(Landline)</Text>
            <Pressable
              onPress={() => {
                setUses(uses + 1);
                trackEvent("Hotline Used: Taguig Emergency Hotline", { uses });
                Linking.openURL("tel: +63 2 165 7777");
              }}
              style={styles.pressablecallbtn}
            >
              <View style={styles.callContainer}>
                <Text style={styles.calltext}>Call</Text>
                <FontAwesome5
                  name="phone"
                  size={20}
                  color="#fff"
                  style={{ paddingLeft: 20 }}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.hotlinebtn}
              onPress={() => {
                setUses(uses + 1);
                trackEvent("User navigated to Other Hotlines", { uses });
                navigation.navigate("OtherHotlines");
              }}
            >
              <Text style={styles.textStyle}>
                Click to Show Complete List of Hotlines
              </Text>
            </Pressable>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  callContainer: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  pressablecallbtn: {
    backgroundColor: "#660000",
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 3,
    width: 200,
    height: 50,
    marginTop: 1,
    justifyContent: "center",
    elevation: 10,
  },
  numbers: {
    fontFamily: "Anybody_700Bold",
    fontSize: 35,
    color: "#660000",
  },
  landlinetxt: {
    fontFamily: "Anybody_700Bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    color: "#000000",
  },
  calltext: {
    color: "#ffffff",
    fontFamily: "Anybody_700Bold",
    fontSize: 20,
  },
  hotlinebtn: {
    backgroundColor: "#FF0000",
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 3,
    width: 300,
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    elevation: 10,
  },
  textStyle: {
    fontFamily: "Anybody_700Bold",
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
  },
  textStylehide: {
    fontFamily: "Anybody_700Bold",
    fontSize: 15,
    textAlign: "center",
    color: "#000000",
  },
});

export default MyApp;
