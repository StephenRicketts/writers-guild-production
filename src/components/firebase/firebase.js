import * as firebase from "firebase";

var firebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  apiKey: "AIzaSyBcHFe7YBko1HkjzYSdakI80y3uqsobAOY",
  authDomain: "writers-guild-424ab.firebaseapp.com",
  databaseURL: "https://writers-guild-424ab.firebaseio.com",
  projectId: "writers-guild-424ab",
  storageBucket: "writers-guild-424ab.appspot.com",
  messagingSenderId: "317112750672",
  appId: "1:317112750672:web:bf54b6493132001e70f755",
  measurementId: "G-S2E13BK48N",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB;
