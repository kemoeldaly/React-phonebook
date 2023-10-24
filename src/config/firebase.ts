import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const providers = { google: new GoogleAuthProvider() };
