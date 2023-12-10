import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Pressable,
  Linking,
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { FontAwesome5 } from "react-native-vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const MyApp = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      console.log("Back Pressed");
      navigation.navigate("OtherHotlines");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

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
            fontSize: 25,
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
              COMMAND CENTER
            </Text>
            <Text style={styles.numbers}>(02) 8739 3200</Text>
            <Text style={styles.landlinetxt}>(Landline)</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 8739 3200");
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

            <Text
              style={{
                fontFamily: "Anybody_700Bold",
                fontSize: 20,
                color: "#FF0000",
                marginTop: 20,
              }}
            >
              LAKE AND RIVER PATROL
            </Text>
            <Text style={styles.numbers}>(02) 628 1377</Text>
            <Text style={styles.landlinetxt}>(Landline)</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 628 1377");
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
              TAGUIG BFP
            </Text>
            <Text style={styles.numbers}>+63 906 211 0919</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 906 211 0919");
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

            <Text style={[styles.numbers, { marginTop: 20 }]}>
              (02) 8837 0740
            </Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 8837 0740");
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

            <Text style={[styles.numbers, { marginTop: 20 }]}>
              (02) 8837 4496
            </Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 8837 4496");
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
              FIRE DEPARTMENT (CITY HALL)
            </Text>
            <Text style={styles.numbers}>(02) 642 9982</Text>
            <Text style={styles.landlinetxt}>(Landline)</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 642 9982");
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
              FIRE DEPARTMENT TAGUIG CENTRAL
            </Text>
            <Text style={styles.numbers}>(02) 8837 0740</Text>
            <Text style={styles.landlinetxt}>(Landline)</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 8837 0740");
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
              FIRE DEPARTMENT (FTI)
            </Text>
            <Text style={styles.numbers}>(02) 8837 4496</Text>
            <Text style={styles.landlinetxt}>(Landline)</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 837 4496");
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
                fontSize: 19,
                color: "#FF0000",
                marginTop: 20,
              }}
            >
              TAGUIG ENVIRONMENTAL / SOLID WASTE
            </Text>
            <Text style={styles.numbers}>(02) 642 7557</Text>
            <Text style={styles.landlinetxt}>(Landline)</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("tel: +63 2 642 7557");
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
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
              style={styles.modal}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <FontAwesome5
                    name="times"
                    size={15}
                    color="#fff"
                    onPress={closeModal}
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 5,
                      padding: 12.5,
                      paddingLeft: 12.5,
                    }}
                  />
                  <Text style={[styles.modalText, { fontSize: 18 }]}>
                    BARANGAY HEALTH CENTER HOTLINES
                  </Text>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        DPWH Central Bicutan: +63 951 662 2947
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 951 662 2947");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Osano Central Bicutan: +63 961 704 4302
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4302");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Central Signal: +63 951 114 7077
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 951 114 7077");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Fort Bonifacio: +63 961 734 0814
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0814");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Katuparan: +63 961 734 0809
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0809");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Maharlika: +63 961 704 4304
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4304");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        North Daang Hari: +63 961 704 4305
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4305");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        North Signal: +63 961 734 0882
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0882");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Palar: +63 961 734 0879
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0879");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Pinagsama: +63 961 725 3302
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 725 3302");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        South Daang Hari: +63 961 734 0850
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0850");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        South Signal: +63 929 533 5904
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 929 533 5904");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Tanyag: +63 961 704 4306
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4306");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Sitio Imelda: +63 961 734 0868
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0868");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Upper Bicutan: +63 961 734 0858
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0858");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Western Bicutan: +63 961 704 4308
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4308");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Bagumbayan: +63 961 734 0885
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0885");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Bambang: +63 961 704 4301
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4301");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Calzada Tipas: +63 961 734 0899
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0899");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Hagonoy: +63 928 412 9838
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 928 412 9838");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Ibayo Tipas: +63 961 734 0848
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0848");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Ligid Tipas: +63 961 704 4303
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4303");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Lower Bicutan: +63 961 734 0852
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0852");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Napindan: +63 961 734 0869
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0869");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        New Lower Bicutan: +63 961 621 9191
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 621 9191");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Palingon: +63 961 704 4395
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 704 4395");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        San Miguel: +63 929 848 6001
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 929 848 6001");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Sta. Ana: +63 961 734 0813
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0813");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Tuktukan: +63 961 734 0863
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0863");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Ususan: +63 961 734 0856
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0856");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>

                      <Text
                        style={[
                          styles.modalText,
                          { marginTop: 25, fontSize: 16 },
                        ]}
                      >
                        Wawa: +63 961 734 0878
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#660000",
                          flex: 1,
                          alignItems: "center",
                          borderColor: "#fff",
                          borderRadius: 20,
                          borderWidth: 2,
                          width: 100,
                          height: 40,
                          marginTop: 10,
                          justifyContent: "center",
                          elevation: 10,
                        }}
                        onPress={() => {
                          Linking.openURL("tel: +63 961 734 0878");
                        }}
                      >
                        <Text style={styles.modalText}>Call</Text>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Modal>
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}
              style={styles.hotlinebtn}
            >
              <Text style={styles.textStyle}>Barangay Hotlines</Text>
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
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
  },
  textStylehide: {
    fontFamily: "Anybody_700Bold",
    fontSize: 15,
    textAlign: "center",
    color: "#000000",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: 1,
    width: 400,
    height: 800,
    backgroundColor: "#880000",
    borderRadius: 20,
    paddingTop: 25,
    paddingRight: 35,
    paddingLeft: 35,
    paddingBottom: 35,
    alignItems: "center",
    shadowColor: "#880000",
    shadowOffset: {
      width: 2.5,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 4,
    elevation: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
  modalText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Anybody_700Bold",
    textAlign: "center",
  },
});

export default MyApp;
