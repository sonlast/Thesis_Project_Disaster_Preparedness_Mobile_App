// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvd8mfHdNiY4ta6r97zkESbFQOjQbh7wY",
  authDomain: "fir-project-5fbe1.firebaseapp.com",
  projectId: "fir-project-5fbe1",
  storageBucket: "fir-project-5fbe1.appspot.com",
  messagingSenderId: "37285990710",
  appId: "1:37285990710:web:306668681e6eeeb8906397",
  measurementId: "G-15Y5L5883R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;

// Firebase Name: firebase project
