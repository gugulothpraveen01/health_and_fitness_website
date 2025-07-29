import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq29HYm4wB-IRcrKti7tgCA4cSzB52ihc",
  authDomain: "profitness-eb631.firebaseapp.com",
  projectId: "profitness-eb631",
  storageBucket: "profitness-eb631.firebasestorage.app",
  messagingSenderId: "433585431928",
  appId: "1:433585431928:web:e060a869ec81d63042148d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);


// submit

const submit=document.getElementById('submit');
submit.addEventListener("click",function(event) {
 event.preventDefault()
//  alert(5)

// input

const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed up 
   const user = userCredential.user;
   alert("creating Accoount...");
   window.location.href="index.html"
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage);
   // ..
 });

})