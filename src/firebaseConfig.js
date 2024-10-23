import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDJSLjvFf3ABxCw_2FSZLtJbQUuAHk6Xsk",
    authDomain: "preentrega2reactjs-walterdiaz.firebaseapp.com",
    projectId: "preentrega2reactjs-walterdiaz",
    storageBucket: "preentrega2reactjs-walterdiaz.appspot.com",
    messagingSenderId: "356773256359",
    appId: "1:356773256359:web:c2106887e039bd30dc8f82",
    measurementId: "G-BX3WBF3KJX"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };