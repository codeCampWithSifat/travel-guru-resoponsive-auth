import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey:proces.env.REACT_APP_apikey,
  authDomain:proces.env.REACT_APP_authDomain,
  projectId:proces.env.REACT_APP_projectId,
  storageBucket:proces.env.REACT_APP_storageBucket,
  messagingSenderId:proces.env.REACT_APP_messagingSenderId,
  appId:proces.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;

