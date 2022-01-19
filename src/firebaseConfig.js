import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCxYZgc0zPgz414i5YYqSE0OqIssR2uY",
  authDomain: "weather-ab362.firebaseapp.com",
  projectId: "weather-ab362",
  storageBucket: "weather-ab362.appspot.com",
  messagingSenderId: "309821827275",
  appId: "1:309821827275:web:fd7ee3c7ca1679a717534e",
  
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase