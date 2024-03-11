import React from 'react'
import '../../assets/css/themes.css';
import Themes_Image from '../../assets/images/service_themes.jpg';

const dataArray=[
  {id:1,event_type:'Wedding',theme_type:'Chiroc',theme_price:'20000'},
  {id:1,event_type:'Wedding',theme_type:'Chiroc',theme_price:'20000'},
  {id:1,event_type:'Wedding',theme_type:'Chiroc',theme_price:'20000'},
  {id:1,event_type:'Wedding',theme_type:'Chiroc',theme_price:'20000'},
  {id:1,event_type:'Wedding',theme_type:'Chiroc',theme_price:'20000'},
  {id:1,event_type:'Wedding',theme_type:'Chiroc',theme_price:'20000'},
  {id:1,event_type:'Wedding',theme_type:'Chiroc',theme_price:'20000'}
]

const Themes = () => {
  return (
    <div className='theme_main'>
    {dataArray.map((item)=>(
      <DynamicComponent key={item.id} data={item}/>

    ))}
    
    </div>
  )
}

const DynamicComponent=({data})=>{
  return (
    <div className='theme_box'>
    <img src={Themes_Image}/>
    <p>Event Type: <div className='su3-event'>{data.event_type}</div>
    Theme Type:<div className='su3-theme'> {data.theme_type}</div>
    Theme Price: <div className='su3-event'>Rs {data.theme_price}</div>
    </p>
    <button type='submit'>Book</button>
    </div>
  )
}

export default Themes