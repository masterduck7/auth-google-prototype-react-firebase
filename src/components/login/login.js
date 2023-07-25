import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((data) => {
            navigate("./profile");
        })
        .catch((error) => {
            console.log(error)
            setNotice("You entered a wrong username or password.");
        })
    }

    const loginWithGoogle = (e) => {
        e.preventDefault();
        
        signInWithPopup(auth, googleProvider).then((data) => {
            navigate("./profile");
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className = "container">
            <div className = "row justify-content-center">
                <form className = "col-md-4 mt-3 pt-3 pb-3">
                    { "" !== notice &&
                        <div className = "alert alert-warning" role = "alert">
                            { notice }    
                        </div>
                    }                  
                    <div className = "form-floating mb-3">
                        <input type = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                        <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input type = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                        <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
                    </div>
                    <div className = "d-grid">
                        <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => loginWithUsernameAndPassword(e)}>Login</button>
                    </div>
                    <div className = "mt-3 text-center">
                        <span><Link to = "./register">Register</Link></span>
                    </div>
                    <button onClick = {(e) => loginWithGoogle(e)}>Login with Google</button>
                </form>
            </div>
        </div>
    )
};

export default Login;