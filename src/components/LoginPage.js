import React from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './Firebase';

export default function LoginPage() {
    const history = useHistory();
    const auth = getAuth();

    const fireBaseSignIn = () => {
        const email = document.getElementById("name").value;
        const password = document.getElementById("email").value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                history.push("TeamBar");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.code);
            });

    };

    const fireBaseSignUp = () => {
        const email = document.getElementById("name").value;
        const password = document.getElementById("email").value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("You have successfully Signup")
                history.push("TeamBar")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Problem Occuredd")
                // ..
            });
    };

    return (
        <>
            Emal Address<input type="text" id="name" />
            Password<input type="text" id="email" />
            <br />
            <br />
            <button onClick={fireBaseSignIn}>SignIn</button>
            <button onClick={fireBaseSignUp}>SignUp</button>

        </>
    )
}
