
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHLVZhdhjuaD_KlrPWJIvk4CHE34RQONQ",
  authDomain: "snackfast-6ef93.firebaseapp.com",
  projectId: "snackfast-6ef93",
  storageBucket: "snackfast-6ef93.appspot.com",
  messagingSenderId: "380579335925",
  appId: "1:380579335925:web:3a5113ac94fc192eafffbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const auth = getAuth(app);
export {app,storage};