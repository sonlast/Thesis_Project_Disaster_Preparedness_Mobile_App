import {
  Alert,
  BackHandler,
  Pressable,
  View,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import React, { useEffect } from "react";
import {
  useFonts,
  Anybody_700Bold_Italic,
  Anybody_700Bold,
  Anybody_400Regular,
} from "@expo-google-fonts/anybody";
import { useNavigation } from "@react-navigation/native";

function TermsConditions() {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Quick Aid Taguig",
        "Are you sure you want to exit without accepting the terms?",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "YES",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );

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
      <Text style={styles.header}>Terms & Conditions</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* ACCEPTANCE OF TERMS */}
          <Text style={styles.subheads}>1. ACCEPTANCE OF TERMS</Text>
          <Text style={styles.terms}>
            By creating an account and using the services provided by Quick
            Response Aid through the application, you agree to comply with and
            be bound by these Terms and Conditions. If you do not agree with any
            of these terms, you should not proceed with the registration
            process.
          </Text>
          {/* ACCOUNT REGISTRATION */}
          <Text style={styles.subheads}>2. ACCOUNT REGISTRATION</Text>
          <Text style={styles.terms}>
            2.1 Eligibility: You must be at least 18 years old to create an
            account. By registering, you confirm that you meet this eligibility
            requirement.
          </Text>
          <Text style={styles.terms}>
            2.2 Accuracy of Information: You agree to provide accurate, current,
            and complete information during the registration process and to
            update such information to keep it accurate, current, and complete.
          </Text>
          <Text style={styles.terms}>
            2.3 Security: You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. Notify Quick Response Aid immediately
            of any unauthorized use of your account.
          </Text>
          {/* USER CONDUCT */}
          <Text style={styles.subheads}>3. USER CONDUCT</Text>
          <Text style={styles.terms}>
            3.1 Prohibited Activities: You agree not to engage in any activity
            that may disrupt the functionality of the service, violate any laws,
            or infringe upon the rights of others.
          </Text>
          <Text style={styles.terms}>
            3.2 Content Submission: By submitting content (text, images, etc.)
            during the registration process or through the use of the service,
            you grant Quick Response Aid the right to use, modify, and
            distribute such content in accordance with the Privacy Policy.
          </Text>
          {/* TERMINATION */}
          <Text style={styles.subheads}>4. TERMINATION</Text>
          <Text style={styles.terms}>
            Quick Response Aid reserves the right to terminate or suspend your
            account at its sole discretion, without notice, for conduct that
            Quick Response Aid believes violates these Terms and Conditions or
            is harmful to other users or third parties or for any other reason.
          </Text>
          {/* PRIVACY */}
          <Text style={styles.subheads}>5. PRIVACY</Text>
          <Text style={styles.terms}>
            5.1 Data Collection: Quick Response Aid collects and uses personal
            information in accordance with its Privacy Policy. By using the
            service, you consent to such collection and use.
          </Text>
          <Text style={styles.terms}>
            5.2 Third-Party Services: The service may integrate with third-party
            services. Users are subject to the terms and policies of these third
            parties.
          </Text>
          {/* MODIFICATIONS */}
          <Text style={styles.subheads}>6. MODIFICATIONS</Text>
          <Text style={styles.terms}>
            Quick Response Aid reserves the right to modify or update these
            Terms and Conditions at any time. Users will be notified of such
            changes, and continued use of the service after modifications
            constitutes acceptance of the revised terms.
          </Text>
          <Pressable
            onPress={() => navigation.navigate("Signup")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>I Agree</Text>
          </Pressable>
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
    paddingTop: 50,
  },
  content: {
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontFamily: "Anybody_700Bold",
    fontSize: 24,
    marginBottom: 10,
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
  button: {
    alignSelf: "flex-end",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    color: "#880000",
    fontFamily: "Anybody_700Bold",
    fontSize: 16,
  },
});

export default TermsConditions;
