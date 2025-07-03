import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBUQuKZ6oksVcYPTsUKzr-YP_cyd1wm9LQ",
  authDomain: "first-project-d10f6.firebaseapp.com",
  projectId: "first-project-d10f6",
  storageBucket: "first-project-d10f6.firebasestorage.app",
  messagingSenderId: "231319906799",
  appId: "1:231319906799:web:a0b26c388daf2bc6e32e1a",
  measurementId: "G-EVTFPNSDGB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);