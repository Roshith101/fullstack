import React from 'react'
import { Link } from 'react-router-dom';
import Food_Image from '../../assets/images/service_food.jpg';
import Venue_Image from '../../assets/images/service_venue.jpg';
import Themes_Image from '../../assets/images/service_themes.jpg';
import Dj_Image from '../../assets/images/service_dj.jpg';
import '../../assets/css/providedservice.css';
const ProvidedService = () => {
  return (
    <div className='service_main'>
    <div className = 'service_box'>
    <h1>Food</h1>
    <img src={Food_Image}/>
    <Link to='/eventhub/user/food'><button type='submit'>Enter</button></Link>
    </div>
    <div className = 'service_box'>
    <h1>Venue</h1>
    <img src={Venue_Image}/>
    <Link to='/eventhub/user/venue'><button type='submit'>Enter</button></Link>
    </div>
    <div className = 'service_box'>
    <h1>Themes</h1>
    <img src={Themes_Image}/>
    <Link to='/eventhub/user/theme'><button type='submit'>Enter</button></Link>
    </div>
    <div className = 'service_box'>
    <h1>Dj Party</h1>
    <img src={Dj_Image}/>
    <Link to='/eventhub/user/dj'><button type='submit'>Enter</button></Link>
    </div>
    </div>
  )
}

export default ProvidedService