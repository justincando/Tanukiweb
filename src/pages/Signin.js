import { useState } from "react";
import "./Signin.css";
import { Link} from 'react-router-dom';
export default function Signin(){
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [confirmPWord, setConfirmPWord] = useState("");

    return(
        <div className="back">
            <Link to = "/">
                <p className="close">
                    <span className="x">x</span>
                </p>
            </Link>
            {login ===true ?
                <div className="border">
                    <form className="form">
                    
                    
                   
                    <div className="loginNav">
                        <span className="loginBorder">
                            <p className="loginTab">Login</p>
                        </span>
                        <span className="createAccount" onClick={()=>setLogin(false)}>
                            <p className="createTab" >Create</p>
                        </span>
                    </div>
                        <h2 className="login">Login</h2>
                        <input type={"text"} placeholder="Email" id ="emailField" name="email" onChange={(e) =>{setEmail(e.target.value)}}/>
                        <input type={"password"} placeholder="Password" id ="passwordField" name="password" onChange={(e) =>{setPassword(e.target.value)}}/>
                        <div id="remember">
                            <input type={"checkbox"} id="check" name ="remember"/><span>Remember me?</span><span id ="Forgot">Forgot Password?</span>
                        </div>
                        <div className="create">
                            <button className="createButton">Sign In</button>
                        </div>
                    
                    
                    </form>
                    </div>:
                    
                    <div className="border2">
                    <form className="form2">
                    <div className="loginNav">
                        <span className="loginBorder-false" onClick={()=>setLogin(true)}>
                            <p className="loginTab">Login</p>
                        </span>
                        <span className="createAccount-true">
                            <p className="createTab">Create</p>
                        </span>
                    </div>
                        <h2 className="login">Create Account</h2>
                        <input type={"text"} placeholder="First Name" id ="FirstNameField" name="firstName" onChange={(e) =>{setFName(e.target.value)}}/>
                        <input type={"text"} placeholder="Last Name" id ="LastNameField" name="lastName" onChange={(e) =>{setLName(e.target.value)}}/>
                        <input type={"text"} placeholder="Email" id ="emailFieldC" name="email" onChange={(e) =>{setEmail(e.target.value)}}/>
                        <input type={"password"} placeholder="Password" id ="passwordFieldC" name="password" onChange={(e) =>{setPassword(e.target.value)}}/>
                        <input type={"password"} placeholder="Confirm Password" id ="confirmPasswordField" name="confirmPassword" onChange={(e) =>{setConfirmPWord(e.target.value)}}/>
                        <div id="sub">
                            <input type={"checkbox"} id="subscribe" name ="subscribe"/><span>Subscribe-Newsletters, Personalized Offers and more!</span>
                        </div>
                        <div className="register">
                            <button className="createButton">Register</button>
                        </div>
                        </form>
                        </div>
                    }
                
        </div>
    )
}