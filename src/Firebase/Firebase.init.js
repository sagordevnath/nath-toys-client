// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-pc1kE4RqB7BAIXq8Jne58h3U8kGpF4g",
  authDomain: "nath-toys.firebaseapp.com",
  projectId: "nath-toys",
  storageBucket: "nath-toys.appspot.com",
  messagingSenderId: "611043378265",
  appId: "1:611043378265:web:6d970c6c8314817417dd48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;