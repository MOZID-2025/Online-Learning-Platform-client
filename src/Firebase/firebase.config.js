import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyhC2ST7msemjB2REchIJgmFuClaKRc54",
  authDomain: "online-learning-platform-d36f5.firebaseapp.com",
  projectId: "online-learning-platform-d36f5",
  storageBucket: "online-learning-platform-d36f5.firebasestorage.app",
  messagingSenderId: "842565281705",
  appId: "1:842565281705:web:9b2acc1434a3339ab606b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
