// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Cq9HLBWY0EGr2b_GHe0WvTpbHR_ZJns",
  authDomain: "aula-app-406a1.firebaseapp.com",
  projectId: "aula-app-406a1",
  storageBucket: "aula-app-406a1.firebasestorage.app",
  messagingSenderId: "393154267894",
  appId: "1:393154267894:web:255534cf13329b2ed8fad7",
  measurementId: "G-4KTL2B0GRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };