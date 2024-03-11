import '../../assets/css/login.css'; 
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function Login(){

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  async function login(event){
    event.preventDefault();
    let item = {email,password};
    console.log(item);
    let result  = await fetch("http://localhost:8181/api/v1/auth/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    })
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    if(result.message!=null){
      window.location.href="/eventhub/user/home";
    }
  }
 return(
  <div className='summa'>
   <div className="L_page">
     <div className="c">
     <h1> Login</h1>
     <form >
     <div className="text_field">
     <input type="email" name="e-mail" value={email} onChange={handleEmailChange} required></input>
     <span></span>
     <label>Email</label>
     <div className='icon'>
     <HiOutlineMail />
     </div>
     </div>
     <div className="text_field">
     <input type="password" value={password} onChange={handlePasswordChange} required ></input>
     <span></span>
     <label>Password</label>
     <div className='icon'>
     <FaLock />
     </div>
     </div>
     <div className="pass">Forgot Password?</div>
     <div className="L_button">
     <button type="submit" onClick={login} >Login</button>
     </div>
     <div className="signup_link">
     Not a member? <Link to="/eventhub/signup">SignUp</Link>
     </div>
     </form>
     </div>
     </div> 
     </div>
     );
   }
export default Login;