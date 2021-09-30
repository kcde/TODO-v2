// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-zipcVvOUftHfxZle6iRHBR1-Hi_WdJA',
  authDomain: 'todov2test.firebaseapp.com',
  projectId: 'todov2test',
  storageBucket: 'todov2test.appspot.com',
  messagingSenderId: '957757660835',
  appId: '1:957757660835:web:e67a3199989e6e9770e916',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
