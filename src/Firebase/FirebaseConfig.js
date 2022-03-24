// se importa la funcion que va inicializar 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// se agrega los producto que uno quiere utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// objeto de configuracion, contiene las llaves que uno es dueño del proyecto y lo relaciona.
// valores privados
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
//se ejecuta la funcion que analiza firebase


const db = getFirestore();

export default db;