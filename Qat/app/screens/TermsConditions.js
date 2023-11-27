import { View, StyleSheet, Text } from "react-native";
import React, { useContext, useEffect } from "react";

function TermsConditions() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Terms & Conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

export default TermsConditions;
