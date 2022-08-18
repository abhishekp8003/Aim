import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyByKDf0gTzQbqYux8g9wB0LN-GYU-IHfC8",
    authDomain: "goal-tracker-7fdae.firebaseapp.com",
    projectId: "goal-tracker-7fdae",
    storageBucket: "goal-tracker-7fdae.appspot.com",
    messagingSenderId: "276608634998",
    appId: "1:276608634998:web:a7c4800709a703a9564f57",
    measurementId: "G-C3Q7NEDMNJ"

};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();