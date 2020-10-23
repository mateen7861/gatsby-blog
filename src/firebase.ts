import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCJ1a5hHhPuufEtjWns0cOxV1TwmsvBy1M",
    authDomain: "blog-site-eb3d8.firebaseapp.com",
    databaseURL: "https://blog-site-eb3d8.firebaseio.com",
    projectId: "blog-site-eb3d8",
    storageBucket: "blog-site-eb3d8.appspot.com",
    messagingSenderId: "606889257413",
    appId: "1:606889257413:web:1f8fcb53a57d6d4cfc43ac",
    measurementId: "G-KQHGFM7H5E",
}
let instance

export default function getFirebase() {
    if (typeof window !== 'undefined') {
      if (instance) return instance;
      instance = firebase.initializeApp(firebaseConfig);
      return instance;
    }
  
    return null;
  }