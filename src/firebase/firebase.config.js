// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Cbv62ITcM0NIpGCP8Xb7VriJnRvKdmU",
  authDomain: "news-protal-website.firebaseapp.com",
  projectId: "news-protal-website",
  storageBucket: "news-protal-website.appspot.com",
  messagingSenderId: "894027970582",
  appId: "1:894027970582:web:54ede11038fc9f160f9d37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;