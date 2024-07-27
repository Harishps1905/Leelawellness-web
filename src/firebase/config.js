// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmfRxJsiEpPV3FveYfEdoRm41CUCtgRCQ",
  authDomain: "leelawellness-3567e.firebaseapp.com",
  projectId: "leelawellness-3567e",
  storageBucket: "leelawellness-3567e.appspot.com",
  messagingSenderId: "210752593212",
  appId: "1:210752593212:web:3adc242c9dbeda83065239",
  measurementId: "G-8GWP0QN0Y7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

