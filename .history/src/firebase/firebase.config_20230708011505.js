// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWASvkbb_-2eawNSIjsNkR1fqiDFXA-zs",
    authDomain: "doctors-project-f1fd0.firebaseapp.com",
    projectId: "doctors-project-f1fd0",
    storageBucket: "doctors-project-f1fd0.appspot.com",
    messagingSenderId: "274644025624",
    appId: "1:274644025624:web:300e1831ed1ec1d755de6d"


    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;