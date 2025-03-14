import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8trL6b1gCtXZv0XrzxsAlqNTXAaCyKsI",
    authDomain: "neww-3e030.firebaseapp.com",
    projectId: "neww-3e030",
    storageBucket: "neww-3e030.firebasestorage.app",
    messagingSenderId: "1076357371440",
    appId: "1:1076357371440:web:3c865b2a010d7a0920fff5",
    measurementId: "G-3GR06P6C3T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getbtn = document.getElementById('sbtn')

if(getbtn){

    getbtn.addEventListener('click', function () {
        let email = document.getElementById('semail')
        let password = document.getElementById('spass')
        
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(user)
                location.href = './signin.html'
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
               alert(errorCode, errorMessage)
            });
    })
}


let getlbtn = document.getElementById('lbtn')

if(getlbtn){

    getlbtn.addEventListener('click',()=>{
        let email = document.getElementById('lemail')
        let password = document.getElementById('lpass')
    
        signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          alert(user.email)
          alert("good job")
          
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
    });
    
    })
}
