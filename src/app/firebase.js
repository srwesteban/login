  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBdXGy4lG2TX0u9XMfOYcjPML7YAyii_xU",
    authDomain: "fir-app-d4d16.firebaseapp.com",
    projectId: "fir-app-d4d16",
    storageBucket: "fir-app-d4d16.appspot.com",
    messagingSenderId: "1088292951918",
    appId: "1:1088292951918:web:f6ba27b4aa36ad2f74137f"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);