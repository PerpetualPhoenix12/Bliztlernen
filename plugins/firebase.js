import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrHI9YefDTtZ5lcsbMSviivfOJvy4BKwo",
    authDomain: "blitzlernen.firebaseapp.com",
    databaseURL: "https://blitzlernen.firebaseio.com",
    projectId: "blitzlernen",
    storageBucket: "blitzlernen.appspot.com",
    messagingSenderId: "173782254789",
    appId: "1:173782254789:web:0845012d9717b5f4fe9cac",
    measurementId: "G-MKEB7CFCN4"
  };

if (!firebase.apps.length) {   // disable on production
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore()
