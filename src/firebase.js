
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCjfQnCyBilwoebrq7N49LfMRICntzjm4s",
  authDomain: "busybusy-69502.firebaseapp.com",
  projectId: "busybusy-69502",
  storageBucket: "busybusy-69502.appspot.com",
  messagingSenderId: "207611658721",
  appId: "1:207611658721:web:b8af3d951d10800f70d2a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
