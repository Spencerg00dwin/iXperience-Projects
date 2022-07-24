// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTqAFdGyh7-OcMOaV68KcIHaDTbbX0uG0",
  authDomain: "recipe-list-fb9f8.firebaseapp.com",
  projectId: "recipe-list-fb9f8",
  storageBucket: "recipe-list-fb9f8.appspot.com",
  messagingSenderId: "930930170526",
  appId: "1:930930170526:web:7eec6d9e3a00088ddc398f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const auth = getAuth(app)

export{
    firestore,
    auth
}