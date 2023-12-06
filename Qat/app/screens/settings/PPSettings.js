import { BackHandler, View, ScrollView, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
  Anybody_400Regular,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";

function PrivacyPolicy() {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Settingz");
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
    Anybody_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.subheads}>Quick Response Aid Privacy Policy</Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            Last Updated: 12/06/2023
          </Text>
          <Text style={styles.terms}>
            This Privacy Policy outlines how we collect, use, disclose, and
            protect your information when you use our mobile application and
            related services. By using the App, you agree to the terms outlined
            in this Privacy Policy.
          </Text>
          <Text style={styles.subheads}>A. INFORMATION WE COLLECT</Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            a. User Registration Information
          </Text>
          <Text style={styles.terms}>
            When you register on Quick Response Aid, we collect basic
            information such as your name, email address, and other details
            necessary for account creation.
          </Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            b. Authentication Information
          </Text>
          <Text style={styles.terms}>
            To ensure the security of your account, we may collect and store
            authentication information, including but not limited to passwords
            or other authentication credentials.
          </Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            c. Location Information
          </Text>
          <Text style={styles.terms}>
            Quick Response Aid may request access to your device's location to
            provide you with relevant disaster-related information and services.
            You have the option to enable or disable location services.
          </Text>
          <Text style={styles.subheads}>B. HOW WE USE YOUR INFORMATION</Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            a. User Authentication and Account Management
          </Text>
          <Text style={styles.terms}>
            We use your registration and authentication information to create
            and manage your account, providing you access to Quick Response
            Aid's features.
          </Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            b. Location-Based Services
          </Text>
          <Text style={styles.terms}>
            If you enable location services, we may use your location
            information to provide you with localized disaster-related
            information, alerts, and assistance.
          </Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            c. Improvement of Services
          </Text>
          <Text style={styles.terms}>
            We may analyze aggregated and anonymized user data to improve the
            functionality, usability, and performance of Quick Response Aid.
          </Text>
          <Text style={styles.subheads}>C. INFORMATION SHARING</Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            a. Service Providers
          </Text>
          <Text style={styles.terms}>
            We may share your information with third-party service providers who
            assist us in delivering and improving our services. These service
            providers are obligated to protect your information and use it
            solely for the purpose of providing the services.
          </Text>
          <Text style={[styles.terms, { fontSize: 16 }]}>
            b. Legal Compliance
          </Text>
          <Text style={styles.terms}>
            We may disclose your information to comply with legal obligations,
            enforce our policies, respond to legal requests, or protect our
            rights, privacy, safety, or property.
          </Text>
          <Text style={styles.subheads}>D. SECURITY</Text>
          <Text style={styles.terms}>
            We take appropriate measures to safeguard your information against
            unauthorized access, disclosure, alteration, and destruction.
            However, no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security.
          </Text>
          <Text style={styles.subheads}>D. CHANGES TO THE PRIVACY POLICY</Text>
          <Text style={styles.terms}>
            We reserve the right to update this Privacy Policy from time to
            time. Any changes will be effective upon posting the revised policy,
            and we will notify users of significant changes.
          </Text>
          <Text style={styles.subheads}>E. CONTACT US</Text>
          <Text style={styles.terms}>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at sonilalto@gmail.com.
          </Text>
          <Text style={[styles.terms, { marginTop: 20 }]}>
            By using Quick Response Aid, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#880000",
    padding: 30,
    paddingTop: 20,
  },
  content: {
    justifyContent: "center",
  },
  subheads: {
    color: "#fff",
    fontFamily: "Anybody_700Bold",
    fontSize: 18,
    marginBottom: 20,
    marginTop: 15,
  },
  terms: {
    color: "#fff",
    fontFamily: "Anybody_400Regular",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "justify",
    lineHeight: 19,
  },
});

export default PrivacyPolicy;
