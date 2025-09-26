import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  "projectId": "studio-5917156264-ac4cb",
  "appId": "1:801376609533:web:4795ee8eb546136e6dca94",
  "apiKey": "AIzaSyBptm4wxT5ErzrLP5yx4sJlGALPk2zOrD8",
  "authDomain": "studio-5917156264-ac4cb.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "801376609533"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
