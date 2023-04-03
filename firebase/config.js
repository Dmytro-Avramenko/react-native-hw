import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXo56HHJA7nLS3kXZmrq3pj8OE9CoGS3w",
    authDomain: "react-native-95ee1.firebaseapp.com",
    databaseURL:
        "https://react-native-95ee1-default-rtdb.europe-west1.firebasedatabase.app",    
    projectId: "react-native-95ee1",
    storageBucket: "react-native-95ee1.appspot.com",
    messagingSenderId: "871506166832",
    appId: "1:871506166832:web:4d2f1004852ecb0f6359f5",
    measurementId: "G-M919XFSMK8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();