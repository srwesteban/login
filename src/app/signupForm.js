import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"
import {auth} from './firebase.js'
const signupForm= document.querySelector('#signForm');

signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = signupForm["sign-email"].value;
    const password = signupForm["sign-password"].value;

    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email , password)
        console.log(userCredentials);

        const signupmodal = document.querySelector('#signUpModal')

        //close modal

        const modal = bootstrap.Modal.getInstance(signupmodal)
        modal.hide()



    } catch(error){
        console.log(error)

        if(error.code === "auth/email-already-in-use"){
            alert("el email ya esta en uso")
        }
        else if(error.code === "auth/invalid-email"){
            alert("email invalido")
        }else if(error.code === "auth/weak-password"){
            alert("Password demasiado corto")
        }
    }
})