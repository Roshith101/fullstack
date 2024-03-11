import React from 'react'
import { Link } from 'react-router-dom';
import Wedding_Image from '../../assets/images/home_wedding.jpg';
import Birthday_Image from '../../assets/images/event_birthday.jpg'
import Reunion_Image from '../../assets/images/event_reunion.jpg';
import Bachelor_Image from '../../assets/images/event_BachelorParty.jpg';
import Retirement_Image from '../../assets/images/event_retirement.jpg';
import BabyShower_Image from '../../assets/images/event_babyShower.jpg';
import Farewell_Image from '../../assets/images/event_farewell.jpg';
import Feastival_Image from '../../assets/images/event_festival.jpg';
import '../../assets/css/event.css';
const Event = () => {
 
  return (
    <div className='event_main'>
    <div className='event_box'>
       <h1>Wedding</h1>
       <img src={Wedding_Image}/>
       <p>Select the Themes, Food and Venue of your choice for your Wedding.</p>
       <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
    </div>
    <div className='event_box'>
    <h1>Birthday</h1>
    <img src={Birthday_Image}/>
    <p>Select the Themes, Food and Venue of your choice for your Birthday.</p>
    <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
 </div>
    <div className='event_box'>
    <h1>Reunion</h1>
    <img src={Reunion_Image}/>
    <p>Select the Themes, Food and Venue of your choice for your Reunion.</p>
    <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
 </div>
    <div className='event_box'>
    <h1>Bachelor Party</h1>
    <img src={Bachelor_Image}/>
    <p>Select the Themes, Food and Venue of your choice for your Bachelor Party.</p>
    <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
 </div>
    <div className='event_box'>
    <h1>Retirement</h1>
    <img src={Retirement_Image}/>
    <p>Select the Themes, Food and Venue of your choice for your Retirement function.</p>
    <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
 </div>
    <div className='event_box'>
    <h1>Baby Shower</h1>
    <img src={BabyShower_Image}/>
    <p>Select the Themes, Food and Venue of your choice for your Baby Shower function.</p>
    <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
 </div>
    <div className='event_box'>
    <h1>Farewell</h1>
    <img src={Farewell_Image}/>
    <p>Select the Themes, Food and Venue of your choice for your Farewell function.</p>
    <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
 </div>
    <div className='event_box'>
    <h1>Festival</h1>
    <img src={Feastival_Image}/>
    <p>Select the Themes, Food and Venue of your choice for your Festival Celebration.</p>
    <Link to='/eventhub/user/provided_service'><button type='submit'>Get Started</button></Link>
 </div>
    
    </div>
  )
}

export default Event