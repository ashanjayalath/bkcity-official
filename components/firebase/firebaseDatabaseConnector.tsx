import {initializeApp} from "@firebase/app";
import {getAnalytics} from "@firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDEagXorzu2p4DFE4Ixb7X7vkdV_XTswNY",
    authDomain: "bkcity-auth.firebaseapp.com",
    databaseURL: "https://bkcity-auth-default-rtdb.firebaseio.com",
    projectId: "bkcity-auth",
    storageBucket: "bkcity-auth.appspot.com",
    messagingSenderId: "348112774590",
    appId: "1:348112774590:web:b27b459d192404db0605ef",
    measurementId: "G-5E1H8J7K2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const dataBase = getFirestore(app);
const auth = getAuth(app);
export const FCRUD={
    auth,
    dataBase,
};








// const firebaseConfig = {
//     apiKey: "AIzaSyDEagXorzu2p4DFE4Ixb7X7vkdV_XTswNY",
//     authDomain: "bkcity-auth.firebaseapp.com",
//     projectId: "bkcity-auth",
//     storageBucket: "bkcity-auth.appspot.com",
//     messagingSenderId: "348112774590",
//     appId: "1:348112774590:web:b27b459d192404db0605ef"
// };