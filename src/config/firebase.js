import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Create a root reference

const firebaseApp = (site) => {
  switch (site) {
    case "sharpsite":
      return initializeApp({
        apiKey: "AIzaSyCh4UmD7m_7Ox8MV9Dlw5TCs8Y2UjxL-Wg",
        authDomain: "bprofinance-7551d.firebaseapp.com",
        projectId: "bprofinance-7551d",
        storageBucket: "bprofinance-7551d.appspot.com",
        messagingSenderId: "1089167642775",
        appId: "1:1089167642775:web:6716923897c94d19a359d2",
      });

    default:
      return initializeApp({
        apiKey: "AIzaSyDkWKqJ4emL86UgBMAvaT99g3_7xAr9sI4",
        authDomain: "security-update-9ac74.firebaseapp.com",
        databaseURL: "https://security-update-9ac74.firebaseio.com",
        projectId: "security-update-9ac74",
        storageBucket: "security-update-9ac74.appspot.com",
        messagingSenderId: "33290873041",
        appId: "1:33290873041:web:568f113d91f2692ef8bdf0",
      });
  }
};

const db = (site) => getFirestore(firebaseApp(site));

const storage = getStorage(firebaseApp(""));

export { storage, db };
