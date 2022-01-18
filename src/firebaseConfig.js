import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJsJI40mFPAl4ZFMgyI1fI9OqlvdaDjhg",
  authDomain: "timetable-2b046.firebaseapp.com",
  projectId: "timetable-2b046",
  storageBucket: "timetable-2b046.appspot.com",
  messagingSenderId: "442332434439",
  appId: "1:442332434439:web:1bed5ac3263473072f5aa2",
  
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase