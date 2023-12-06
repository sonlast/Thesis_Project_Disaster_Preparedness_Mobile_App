// Loading.js
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Checking if user is signed in...");
      if (user) {
        console.log("User is signed in.");
        navigation.replace("SemiApp");
      } else {
        console.log("User is signed out.");
        navigation.replace("Login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#660000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={"#FFFFFF"} />
    </View>
  );
};

export default Loading;
