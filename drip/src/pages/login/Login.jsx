import React, { useState } from 'react'
import "./login.css"
import signupvector from "../../assets/signup.png"
import loginvector from "../../assets/login.png"
import { toast } from 'react-toastify'


function Login() {

  const handleSignupAnimation = () => {
    resetInputs();
    setpassVisible(false);
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  }
  const handleSigninAnimation = () => {
    resetInputs();
    setpassVisible(false)
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  }
  
  const [passVisible,setpassVisible]=useState(false);
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");

  const resetInputs = () => {
    setEmail("");
    setconfirmpass("");
    setnumber("");
    setpassword("");
    setusername("");
  }

  const handleLogin=(e)=>{
    e.preventDefault();
    console.log(email);
    toast.error("hgjhg");
    
  }

  const handleRegister=(e)=>{
    e.preventDefault();
  }

  return (
    <div class="container">


      <div class="forms-container">

        <div class="signin-signup">

          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fa fa-envelope"></i>
              <input type="text" placeholder="Email id"
              value={email} onChange={(e)=>{
                setEmail(e.target.value);
              }} />
            </div>
            <div class="input-field" style={{
              gridTemplateColumns:"15% 70% 15%",
              cursor:"pointer"
            }}>
              <i class="fa fa-lock"></i>
              <input type={passVisible===true?"text":"password"} placeholder="Password"
              value={password} onChange={(e)=>{
                setpassword(e.target.value)
              }} />
              <i className={passVisible===true?"fa fa-eye":"fa fa-eye-slash"} onClick={()=>{
                setpassVisible(passVisible===true?false:true)
              }}></i>
            </div>
            <input type="submit" value="Login" class="btn solid" onClick={handleLogin} />
          </form>


          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fa fa-user"></i>
              <input type="text" placeholder="Username"
              value={username} onChange={(e)=>{
                setusername(e.target.value)
              }}/>
            </div>
            <div class="input-field">
              <i class="fa fa-envelope"></i>
              <input type="email" placeholder="Email"
              value={email} onChange={(e)=>{
                setEmail(e.target.value)
              }} />
            </div>
            <div class="input-field">
              <i class="fa fa-phone"></i>
              <input type="text" placeholder="phone no"
              value={number} onChange={(e)=>{
                setnumber(e.target.value)
              }} />
            </div>
            <div class="input-field" style={{
              gridTemplateColumns:"15% 70% 15%",
              cursor:"pointer"
            }}>
              <i class="fa fa-lock"></i>
              <input type={passVisible===true?"text":"password"} placeholder="Password" 
              value={password} onChange={(e)=>{
                setpassword(e.target.value)
              }}/>
              <i className={passVisible===true?"fa fa-eye":"fa fa-eye-slash"} onClick={()=>{
                setpassVisible(passVisible===true?false:true)
              }}></i>
            </div>
            <div class="input-field">
              <i class="fa fa-lock"></i>
              <input type={passVisible===true?"text":"password"} placeholder="confirm password"
              value={confirmpass} onChange={(e)=>{
                setconfirmpass(e.target.value)
              }} />
            </div>
            <input type="submit" class="btn" value="Sign up" onClick={handleRegister} />
          </form>

        </div>


        <div class="panels-container">


          <div class="panel left-panel">
            <div class="content">
              <h3>New User?</h3>
              <p>
                Register yourself and get personalized shoping experince
              </p>
              <button class="btn transparent" id="sign-up-btn" onClick={handleSignupAnimation}>
                Sign up
              </button>
            </div>
            <img src={signupvector} class="image" alt="" />
          </div>


          <div class="panel right-panel">
            <div class="content">
              <h3>Already a user?</h3>
              <p>
                Login with your existing account and continue with your drip
              </p>
              <button class="btn transparent" id="sign-in-btn" onClick={handleSigninAnimation}>
                Sign in
              </button>
            </div>
            <img src={loginvector} class="image" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login