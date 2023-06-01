import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCctJnEMgTZBOOSv45aHdn09hlVz0RR-KM",
  authDomain: "nguyen-ngoc-trang-profile.firebaseapp.com",
  projectId: "nguyen-ngoc-trang-profile",
  storageBucket: "nguyen-ngoc-trang-profile.appspot.com",
  messagingSenderId: "50822758276",
  appId: "1:50822758276:web:e9f4f9880de04a3e5da7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {db}