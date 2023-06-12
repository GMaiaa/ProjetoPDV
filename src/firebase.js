import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQYj5dUjxsGtgVm69H6uRFxdlbptKbCMw",
    authDomain: "projeto-pdv-ee056.firebaseapp.com",
    projectId: "projeto-pdv-ee056",
    storageBucket: "projeto-pdv-ee056.appspot.com",
    messagingSenderId: "280828807302",
    appId: "1:280828807302:web:1f4ed62869ab5ea64a2907",
    measurementId: "G-EQ6QMWX2Y1"
  };


  const app = initializeApp(firebaseConfig);
  const firebase = getFirestore(app)


  export {firebase};