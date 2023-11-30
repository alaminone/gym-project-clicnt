// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4UmaIrhtg-zF5nTfwu7-yMzFz3FB63rY",
  authDomain: "final-12-gym.firebaseapp.com",
  projectId: "final-12-gym",
  storageBucket: "final-12-gym.appspot.com",
  messagingSenderId: "967539215588",
  appId: "1:967539215588:web:3bb3c6ae84d3eb4f2db0f1"
};


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_KEY_apiKey,
//   authDomain: import.meta.env.VITE_KEY_authDomain,
//   projectId: import.meta.env.VITE_KEY_projectId,
//   storageBucket: import.meta.env.VITE_KEY_storageBucket,
//   messagingSenderId: import.meta.env.VITE_KEY_messagingSenderId,
//   appId: import.meta.env.VITE_KEY_appId
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app