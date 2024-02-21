import React from 'react'
import "../assets/css/navbar.css"
import logo_light from '../assets/images/Event Hub-logos_black.png'
// // import logo_dark from '../../assets/images/Event Hub-logos_white.png'
import search_icon_light from '../assets/images/search-w.png'
// import search_icon_dark from '../../assets/images/search-b.png'
// import toogle_light from '../../assets/images/night.png'
// import toogle_dark from '../../assets/images/day.png'

const Navbar = () => {

  // const toggle_mode=()=>{
  //   theme=='light' ? setTheme('dark') : setTheme('light');
  // }
  return (
    <div className='navbar'>
        <img src={ logo_light} alt='' className='logo'/>
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Features</li>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={ search_icon_light} alt=""/>
        </div>
    </div>
  )
}

export default Navbar