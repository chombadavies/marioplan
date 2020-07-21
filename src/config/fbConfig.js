import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBAdw0HonkfpdEV9TGIcs0orwaXugbp0yo",
    authDomain: "marioplan-cd24a.firebaseapp.com",
    databaseURL: "https://marioplan-cd24a.firebaseio.com",
    projectId: "marioplan-cd24a",
    storageBucket: "marioplan-cd24a.appspot.com",
    messagingSenderId: "265519266275",
    appId: "1:265519266275:web:3de7f11530861701a148d6",
    measurementId: "G-C11DMJ0MC4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase