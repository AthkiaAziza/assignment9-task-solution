// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtSc4pUw4Caz8wcXtuaoLvXqg8sEz2wOY",
  authDomain: "assignment9-task-solution.firebaseapp.com",
  projectId: "assignment9-task-solution",
  storageBucket: "assignment9-task-solution.appspot.com",
  messagingSenderId: "261504158435",
  appId: "1:261504158435:web:79fb11941806b5195ad3d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;