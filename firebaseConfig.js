import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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
  const db = getFirestore(app);
  const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
 });

  const storage = getStorage(app);
  
  export { app, db, auth, storage };
