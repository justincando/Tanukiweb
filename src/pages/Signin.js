import { useState } from "react";
import "./Signin.css";
import { Link} from 'react-router-dom';
export default function Signin(){
    const [email, setEmail] = useState("");
    return(
        <div className="back">
            <Link to = "/">
                <p className="close">
                    <span className="x">x</span>
                </p>
            </Link>
            <div className="border">
                <form className="form">
                    <div className="loginNav">
                        <span className="loginBorder">
                            <p className="loginTab">Login</p>
                        </span>
                        <span className="createAccount">
                            <p className="createTab">Create</p>
                        </span>
                    </div>    
                    <h2 className="login">Login</h2>
                    <input type={"text"} placeholder="Email" id ="emailField" name="email" onChange={(e) =>{setEmail(e.target.value)}}/>
                    <input type={"password"} placeholder="Password" id ="passwordField" name="password" onChange={(e) =>{setEmail(e.target.value)}}/>
                    <div id="remember">
                        <input type={"checkbox"} id="check" name ="remember"/><span>Remember me?</span><span id ="Forgot">Forgot Password?</span>
                    </div>
                    <div className="create">
                        <button className="createButton">Create An Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}