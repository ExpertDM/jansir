import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCDsr32wkc05VBgN9s7bbJKJ9zCgFrwF6I",
    authDomain: "noxwriter.firebaseapp.com",
    projectId: "noxwriter",
    storageBucket: "noxwriter.appspot.com",
    messagingSenderId: "545416574462",
    appId: "1:545416574462:web:25f15f976df74665a47caf",
    measurementId: "G-MD2VNFPTCK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();