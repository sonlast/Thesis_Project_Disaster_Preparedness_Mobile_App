import * as React from "react";
import { Pressable, Linking, Text, View, StyleSheet } from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { FontAwesome5 } from "react-native-vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const MyApp = () => {
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
            fontSize: 24,
            color: "#FF0000",
          }}
        >
          EMERGENCY HOTLINES
        </Text>
        <ScrollView>
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
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 45,
                color: "#660000",
              }}
            >
              +63 919 070 3112
            </Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: 09190703112");
              }}
              style={styles.pressablecallbtn}
            >
              <View style={styles.callContainer}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontFamily: "Anybody_700Bold",
                    fontSize: 25,
                  }}
                >
                  Call
                </Text>
                <FontAwesome5
                  name="phone"
                  size={24}
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
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 45,
                color: "#660000",
              }}
            >
              +63 917 833 1327
            </Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: 09178331327");
              }}
              style={styles.pressablecallbtn}
            >
              <View style={styles.callContainer}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontFamily: "Anybody_700Bold",
                    fontSize: 25,
                  }}
                >
                  Call
                </Text>
                <FontAwesome5
                  name="phone"
                  size={24}
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
            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 45,
                color: "#660000",
              }}
            >
              +63 919 079 9112
            </Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: 09190799112");
              }}
              style={styles.pressablecallbtn}
            >
              <View style={styles.callContainer}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontFamily: "Anybody_700Bold",
                    fontSize: 25,
                  }}
                >
                  Call
                </Text>
                <FontAwesome5
                  name="phone"
                  size={24}
                  color="#fff"
                  style={{ paddingLeft: 20 }}
                />
              </View>
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
  },
});

export default MyApp;
