import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6hib1BaXjvs_E6385CYNqKK2mBqCWbcY",
  authDomain: "cointradecenter-ad3f5.firebaseapp.com",
  projectId: "cointradecenter-ad3f5",
  storageBucket: "cointradecenter-ad3f5.appspot.com",
  messagingSenderId: "770323173522",
  appId: "1:770323173522:web:6fbac7eb57d92d4f52964b",
};

const app = initializeApp(firebaseConfig);

// Create a root reference
const storage = getStorage(app);

const db = getFirestore(app);

export { storage, db };
