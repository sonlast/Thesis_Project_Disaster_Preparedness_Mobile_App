import * as React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import { useFonts, Anybody_700Bold } from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "react-native-vector-icons";

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
      id: 5,
      name: "Drought",
      icon: "tint-slash",
    },
    {
      id: 6,
      name: "Volcanic Eruption",
      icon: "fire-alt",
    },
    {
      id: 7,
      name: "Landslide",
      icon: "mountain",
    },
    {
      id: 8,
      name: "Tsunami",
      icon: "wave-square",
    },
    {
      id: 9,
      name: "Wildfires",
      icon: "fire",
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
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <FontAwesome5 name={item.icon} size={24} color="#660000" />
            <Text style={styles.txtBtn}>{item.name}</Text>
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
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor={"#ffffff"}
              style={styles.input}
              onChangeText={(text) => setUsetInput(text)}
            />
          </View>
        </View>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => filterData(item)}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
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
    marginTop: 20,
    height: 775,
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
    color: "#000000",
    fontFamily: "Anybody_700Bold",
    margin: 11,
  },
  inputContainer: {
    color: "#fff",
    borderColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 2,
    width: 350,
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
  // searchIcon: {
  //   width: 20,
  //   height: 20,
  //   padding: 12.5,
  // },
  // image: {
  //   flex: 1,
  //   justifyContent: "center",
  // },
});

export default MyApp;
