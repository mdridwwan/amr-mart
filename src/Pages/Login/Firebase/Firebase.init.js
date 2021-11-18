import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;