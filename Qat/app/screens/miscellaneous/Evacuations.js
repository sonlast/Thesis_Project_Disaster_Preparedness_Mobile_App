import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
} from "@expo-google-fonts/anybody";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { TimePickerAndroid } from "react-native";

const MyApp = () => {
  const navigation = useNavigation();
  const [selectedBarangay, setSelectedBarangay] = useState(null);

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
    Anybody_700Bold_Italic,
    Anybody_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Mock data for evacuation areas, replace this with your actual data
  const evacuationAreas = [
    {
      id: 1,
      name: "Cipriano P. Sta. Teresa Elementary School",
      barangay: "Brgy. Bagumbayan",
      latitude: 14.4739,
      longitude: 121.0582,
    },
    {
      id: 2,
      name: "Ricardo P. Cruz Sr. Elementary School",
      barangay: "Brgy. Lower Bicutan",
      latitude: 14.5002,
      longitude: 121.063,
    },
    {
      id: 3,
      name: "Senator Rene Cayetano Science and Technology High School",
      barangay: "Brgy. Ususan",
      latitude: 14.5253,
      longitude: 121.0617,
    },
    {
      id: 4,
      name: "Ususan Elementary School",
      barangay: "Brgy. Ususan",
      latitude: 14.5345,
      longitude: 121.0674,
    },
    {
      id: 5,
      name: "Taguig Science High School",
      barangay: "Brgy. Hagonoy",
      latitude: 14.5119,
      longitude: 121.0709,
    },
    {
      id: 6,
      name: "General Ricardo Papa Memorial High School",
      barangay: "Brgy. Tuktukan",
      latitude: 14.5284,
      longitude: 121.0697,
    },
    {
      id: 7,
      name: "Diosdado Macapagal High School",
      barangay: "Brgy. Katuparan",
      latitude: 14.5216,
      longitude: 121.0578,
    },
    {
      id: 8,
      name: "Tipas Elementary School",
      barangay: "Brgy. Calzada-Tipas",
      latitude: 14.5388,
      longitude: 121.0789,
    },
    {
      id: 9,
      name: "Brgy. Palingon-Tipas Hall",
      barangay: "Brgy. Palingon-Tipas",
      latitude: 14.5382,
      longitude: 121.0801,
    },
    {
      id: 10,
      name: "Tenement Elementary School",
      barangay: "Brgy. Western Bicutan",
      latitude: 14.509,
      longitude: 121.0381,
    },
    {
      id: 11,
      name: "Napindan Elementary School",
      barangay: "Brgy. Napindan",
      latitude: 14.5385,
      longitude: 121.0974,
    },
    {
      id: 12,
      name: "Brgy. Ligid-Tipas Hall",
      barangay: "Brgy. Ligid-Tipas",
      latitude: 14.542,
      longitude: 121.0802,
    },
    // Add more evacuation areas as needed
  ];

  // Filter evacuation areas based on selected barangay
  const filteredEvacuationAreas = selectedBarangay
    ? evacuationAreas.filter((area) => area.barangay === selectedBarangay)
    : evacuationAreas;

  const handleMarkerPress = (area) => {
    // Handle marker press event
    console.log(`Selected evacuation area: ${area.name}`);
  };

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
          BARANGAY EVACUATION CENTERS
        </Text>
        <ScrollView>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 14.5243, // vertical control
                longitude: 121.065, // horizontal control
                latitudeDelta: 0.0099,
                longitudeDelta: 0.0777,
              }}
            >
              {filteredEvacuationAreas.map((area) => (
                <Marker
                  key={area.id}
                  coordinate={{
                    latitude: area.latitude,
                    longitude: area.longitude,
                  }}
                  title={area.name}
                  description={`${area.barangay}`}
                  onPress={() => handleMarkerPress(area)}
                />
              ))}
            </MapView>
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
    paddingTop: 20,
    padding: 5,
  },
  mapContainer: {
    height: 605,
    width: 410,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#660000",
  },
  map: {
    flex: 1,
  },
});

export default MyApp;
