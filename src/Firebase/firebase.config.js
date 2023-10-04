// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJMfv0WRNhh2qQvjLXiBb9REBMZtzYb-E",
    authDomain: "my-dragon-news-935fb.firebaseapp.com",
    projectId: "my-dragon-news-935fb",
    storageBucket: "my-dragon-news-935fb.appspot.com",
    messagingSenderId: "303288724173",
    appId: "1:303288724173:web:d8791f52c6f9c810fb1784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app