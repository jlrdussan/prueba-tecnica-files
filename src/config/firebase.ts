// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAciposozUWZE48N16uk7y1cXdDtz2inbM',
  authDomain: 'vue-prueba-5c33c.firebaseapp.com',
  projectId: 'vue-prueba-5c33c',
  storageBucket: 'vue-prueba-5c33c.appspot.com',
  messagingSenderId: '352483180928',
  appId: '1:352483180928:web:bb8683608a05beddc18165',
  measurementId: 'G-V2Y83SGYN3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

