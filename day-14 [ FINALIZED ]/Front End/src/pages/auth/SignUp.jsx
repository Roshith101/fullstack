import '../../assets/css/signup.css';
import { useEffect,useState} from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import {Link} from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { caseSuccess } from './UseSlice';
// import { useDispatch } from 'react-redux';
function SignUp(){
    useEffect(()=>{
      if(localStorage.getItem('user-info')){
         window.location.href = '/eventhub/user/home';
      }
    })
    const[email,setEmail] = useState("");
    const[name,setName] = useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    
    async function signUp(){
      let item={name,email,password,confirmPassword};
      console.log(item);
      let result = await fetch("http://localhost:8181/api/v1/auth/register",{
         method: 'POST',
         body: JSON.stringify(item),
         headers:{
            "Content-Type":"application/json",
            "Accept":'application/json'
         }
      });

      result = await result.json();
      localStorage.setItem("user-info",JSON.stringify(result));
      if(result.userName!=null){
         window.location.href='/';
      }
    }

    function handleSubmit(e){
      e.preventDefault();
      if(email && name && password && confirmPassword){
         signUp();
      }
      else{
         alert("Please fill all fields!");
      }
    }
 return(
  <div className="summa1">
  <div className='S_page'>
  <div className='center'>
  <h1>SignUp</h1>
  <form>
  <div className='txt_field'>
  <input type='text' name='Name' value={name} required onChange={(e)=>setName(e.target.value)}></input>
  <span></span>
  <div className='l_icon'>
  <FaUser />
  </div>
  <label>Name</label>
  </div>
  <div className='txt_field'>
  <input type='email' name='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <span></span>
  <label>Email</label>
   <div className='l_icon'>
   <MdOutlineMail />
   </div>
  </div>
  <div className='txt_field'>
  <input type='password' name='pass' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <span></span>
  <label>Password</label>
  <div className='l_icon'>
     <FaLock />
     </div>
  </div>
  <div className='txt_field'>
  <input type='password' name='con_pass' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
  <span></span>
  <label>Confirm Password</label>
  <div className='l_icon'>
     <FaLock />
     </div>
  </div>
  <div className="S_button">
  <button type='submit' onClick={handleSubmit}>SignUp</button>
  </div>
  <div className='login_link'>
  Already a member? <Link to='/eventhub/login'>Login</Link>
  </div>
  </form>
  </div>
  </div>
  </div>
 )
}
export default SignUp;