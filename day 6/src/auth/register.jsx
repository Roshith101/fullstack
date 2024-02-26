import '../../assets/css/register.css';
import { FaUser } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import {Link,useNavigate} from 'react-router-dom';



function SignUp(){
   const navigate = useNavigate();
   
     const handleSubmit = (e) =>{
       e.preventDefault()
       navigate("/eventhub/user/home")
     }
 return(
   <div className='summa1'>
  <div className='S_page'>
  <div className='center'>
  <h1>SignUp</h1>
  <form onSubmit={handleSubmit}>
  <div className='txt_field'>
  <input type='text' name='Name' required autoComplete='off'></input>
  <span></span>
  <div className='l_icon'>
  <FaUser />
  </div>
  <label>Name</label>
  </div>
  <div className='txt_field'>
  <input type='email' name='Email' required autoComplete='off'/>
  <span></span>
  <label>Email</label>
   <div className='l_icon'>
   <MdOutlineMail />
   </div>
  </div>
  <div className='txt_field'>
  <input type='tel' name='phone' pattern='.{10}'required title='should contain 10 numbers' autoComplete='off'/>
  <span></span>
  <div className='l_icon'>
  <FaMobileAlt />
  </div>
  <label>Mobile</label>
  </div>
  <div className='txt_field'>
  <input type='password' name='pass' pattern='.{8,}'required title='minimum 8 characters'/>
  <span></span>
  <label>Password</label>
  <div className='l_icon'>
     <FaLock />
     </div>
  </div>
  <div className="S_button">
  <Link to='/eventhub/user/home'><button type='submit'>SignUp</button></Link>
  </div>
  <div className='login_link'>
  Already a member? <Link to="/eventhub/login">Login</Link>
  </div>
  </form>
  </div>
  </div>
  </div>
 )
}
export default SignUp;