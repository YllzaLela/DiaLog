import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyDXL2sKtoj4e2TA5sxNLcmASxIMiLzmWZg",
    authDomain: "manage-diabetes-app.firebaseapp.com",
    projectId: "manage-diabetes-app",
    storageBucket: "manage-diabetes-app.appspot.com",
    messagingSenderId: "227080682169",
    appId: "1:227080682169:web:84ca196746cb8ec3243968",
    measurementId: "G-Z90135DKJW"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  
  export { app, analytics, db, auth, storage };
