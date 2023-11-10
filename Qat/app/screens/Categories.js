import * as React from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import { useFonts, Anybody_700Bold } from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const MyApp = () => {
  const navigation = useNavigation();

  const [userInput, setUsetInput] = React.useState("");

  const categories = [
    {
      id: 1,
      name: "Storm",
      icon: "cloud-showers-heavy",
    },
    {
      id: 2,
      name: "Typhoon",
      icon: "wind",
    },
    {
      id: 3,
      name: "Earthquake",
      icon: "globe-americas",
    },
    {
      id: 4,
      name: "Flood",
      icon: "water",
    },
    {
      id: 7,
      name: "Landslide",
      icon: "mountain",
    },
    {
      id: 9,
      name: "Fires",
      icon: "dumpster-fire",
    },
  ];

  const filterData = (item) => {
    const userInputLower = userInput.toLowerCase();
    const itemNameLower = item.name.toLowerCase();

    if (userInputLower === "" || itemNameLower.includes(userInputLower)) {
      return (
        <Pressable
          style={styles.categoryButton}
          onPress={() => navigation.navigate(item.name)}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome5
              name={item.icon}
              paddingLeft={35}
              size={24}
              color="#660000"
            />
            <Text style={styles.txtBtn}>{item.name}</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#660000"
            />
          </View>
        </Pressable>
      );
    }
  };

  // ! ALTERNATIVE WAY TO DO THE FILTER (Cons: can't distinguished between an uppercase and lowercase letter)
  // const filterData = (item) => {
  //   if (userInput === "") {
  //     return (
  //       <Pressable
  //         style={styles.categoryButton}
  //         onPress={() => navigation.navigate(item.name)}
  //       >
  //         <Text style={styles.txtBtn}>{item.name}</Text>
  //       </Pressable>
  //     );
  //   } else if (item.name.includes(userInput)) {
  //     return (
  //       <Pressable
  //         style={styles.categoryButton}
  //         onPress={() => navigation.navigate(item.name)}
  //       >
  //         <Text style={styles.txtBtn}>{item.name}</Text>
  //       </Pressable>
  //     );
  //   }
  // };

  let [fontsLoaded, fontError] = useFonts({
    Anybody_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          source={require("../assets/prereqs-images/city-of-taguig.jpg")}
          style={{ 
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "250%",
            opacity: 0.76,
          }}
        >
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Search..."
                placeholderTextColor={"#ffffff"}
                style={styles.input}
                onChangeText={(text) => setUsetInput(text)}
              />
              <FontAwesome5 name="search" size={18} color="#ffffff" />
            </View>
          </View>
        </ImageBackground>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => filterData(item)}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#660000",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  categoryButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 3,
    width: 250,
    height: 60,
    marginTop: 30,
    marginBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  txt: {
    color: "rgb(255, 255, 255)",
    fontFamily: "Anybody_700Bold",
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20,
  },
  txtBtn: {
    flex: 1,
    color: "#000000",
    fontFamily: "Anybody_700Bold",
    margin: 20,
  },
  inputContainer: {
    color: "#fff",
    borderColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 20,
    width: 330,
    height: 40,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    color: "#ffffff",
    fontFamily: "Anybody_700Bold",
    fontSize: 13,
    paddingRight: 11,
  },
});

export default MyApp;
