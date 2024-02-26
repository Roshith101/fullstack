import '../../assets/css/login.css';
import {Link, useNavigate} from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function Login(){

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate("/eventhub/user/home")
  }

 return(
<div className="summa">
   <div  className="L_page">

     <div className="c" >
     <h1> Login</h1>
     <form onSubmit={handleSubmit}>
     <div className="text_field">
     <input type="email" name="e-mail" required autoComplete='off'></input>
     <span></span>
     <label>Email</label>
     <div className='icon'>
     <HiOutlineMail />
     </div>
     
     </div>
     <div className="text_field">
     <input type="password" pattern='.{8,}' required title='minimum 8 characters'></input>
     <span></span>
     <label>Password</label>
     <div className='icon'>
     <FaLock />
     </div>
     </div>
     <div className="pass">Forgot Password?</div>
     <div className="L_button">
     <button>Login</button>
     </div>
     <div className="signup_link">
     Not a member? <Link to="/eventhub/register">SignUp</Link>
     </div>
     </form>
     </div>
     </div>
     </div> 
     );
   }
export default Login