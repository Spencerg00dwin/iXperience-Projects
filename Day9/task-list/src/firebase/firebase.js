// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBaLUxdW8yCC5vGRYXBvW-BosnzImFQGs",
  authDomain: "task-list-ixperience.firebaseapp.com",
  projectId: "task-list-ixperience",
  storageBucket: "task-list-ixperience.appspot.com",
  messagingSenderId: "629317972112",
  appId: "1:629317972112:web:35b6306253069b14786815",
  measurementId: "G-YNVBKZ8DHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{
    firestore
}