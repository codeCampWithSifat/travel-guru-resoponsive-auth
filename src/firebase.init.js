import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC_3aDryt3S9Of7DzZuWSwkWGCHq9lS6Y4",
  authDomain: "travel-guru-responsive-auth.firebaseapp.com",
  projectId: "travel-guru-responsive-auth",
  storageBucket: "travel-guru-responsive-auth.appspot.com",
  messagingSenderId: "377393719927",
  appId: "1:377393719927:web:bad443c37c6afb95687472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;

