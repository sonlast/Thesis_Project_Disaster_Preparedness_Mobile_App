import * as React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";
import * as ImagePicker from "expo-image-picker";
import {
  useFonts,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";

import Categoriez from "./Categories";
import Stormnav from "./categories/Stormnav";
import Typhoonnav from "./categories/Typhoonnav";
import Earthquakenav from "./categories/Earthquakenav";
import Floodnav from "./categories/Floodnav";
import Landslidenav from "./categories/Landslidenav";
import Firesnav from "./categories/Firesnav";
import Profile from "./Profile";
import Settings from "./Settings";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Categoriez"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#660000",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        // initialRouteName="Categories"
        name="Categoriez"
        component={Categoriez}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Storm"
        component={Stormnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Typhoon"
        component={Typhoonnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Earthquake"
        component={Earthquakenav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Flood"
        component={Floodnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Landslide"
        component={Landslidenav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Wildfires"
        component={Firesnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  const [image, setImage] = React.useState(null);
  const [userName, setUserName] = React.useState("@username" + Math.floor(1000 + Math.random() * 9000));

	let [fontsLoaded, fontError] = useFonts({
		Anybody_700Bold_Italic,
		Anybody_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    .catch(error => console.log(error));

    if (!result.canceled && result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).catch((error) => console.log(error));

    if (!result.cancelled && result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Drawer.Navigator
      initialRouteName="Categories"
      drawerContent={
        (props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#ffffff",
                  borderBottomwWidth: 1,
                }}
              >
                <TouchableOpacity onPress={pickImage}>
                  {!image && (
                    <View
                      style={{ flexDirection: "column", alignItems: "center" }}
                    >
                      <MaterialCommunityIcons
                        name="upload"
                        size={24}
                        color="#ffffff"
                      />
                      <Text
                        style={{
                          marginTop: 10,
                          color: "#ffffff",
                          fontFamily: "Anybody_700Bold",
                        }}
                      >
                        Upload Profile Picture
                      </Text>
                    </View>
                  )}
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 100, height: 100 }}
                      borderRadius={50}
                    />
                  )}
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 12,
                    fontFamily: "Anybody_700Bold",
                    marginTop: 20,
                  }}
                >
                  {userName}
                </Text>
              </View>

              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }
      }
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#660000",
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 13,
          fontFamily: "Anybody_700Bold",
        },
        drawerActiveBackgroundColor: "#ffffff",
        drawerActiveTintColor: "#000000",
        drawerInactiveTintColor: "#ffffff",
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "Anybody_700Bold",
          fontSize: 17,
        },
        headerStyle: {
          backgroundColor: "#660000",
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryStack}
        options={{
          drawerLabel: "Categories",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="card-multiple" size={24} color={focused ? '#000000' : '#ffffff'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="account" size={24} color={focused ? "#000000" : "#ffffff"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="cog" size={24} color={focused ? "#000000" : "#ffffff"} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textt: {
    color: "#fff",
  },
});

export default App;

// EDIT ICONS IN DISASTER CATEGORIES
