import '../assets/css/signup.css';
import { useState} from 'react';

import {Link} from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { caseSuccess } from './UseSlice';
// import { useDispatch } from 'react-redux';
function SignUp(){
 return(
  <div className='S_page'>
  <div className='center'>
  <h1>SignUp</h1>
  <form>
  <div className='txt_field'>
  <input type='text' name='Name' required></input>
  <span></span>
  <label>Name</label>
  </div>
  <div className='txt_field'>
  <input type='email' name='Email' required/>
  <span></span>
  <label>Email</label>
  </div>
  <div className='txt_field'>
  <input type='tel' name='phone' required/>
  <span></span>
  <label>Mobile</label>
  </div>
  <div className='txt_field'>
  <input type='password' name='pass' required/>
  <span></span>
  <label>Password</label>
  </div>
  <div className="S_button">
  <button type='submit'>SignUp</button>
  </div>
  <div className='login_link'>
  Already a member? <a>Login</a>
  </div>
  </form>
  </div>
  </div>
 )
}
export default SignUp;