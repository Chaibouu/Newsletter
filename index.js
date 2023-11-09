let email = document.querySelector('#email')
let userName = document.querySelector('#userName')
let btn = document.querySelector('#btn')
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getDatabase,ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-dataBase.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCs6RU0DLMH7F_7QQNxLHUIY-WjFOTpbik",
    authDomain: "newxletter-22b89.firebaseapp.com",
    projectId: "newxletter-22b89",
    storageBucket: "newxletter-22b89.appspot.com",
    messagingSenderId: "1069867129302",
    appId: "1:1069867129302:web:1a099fd0fd37053600ec77",
    measurementId: "G-7GNRTCVKGF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)
  const analytics = getAnalytics(app);
btn.addEventListener('click',(e)=>{
    set(ref(db, 'user/' + userName.value),
    {
        userName :  userName.value,
        email : email.value,
    });
    alert('Login Sucessfull!!!')
})