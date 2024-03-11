import React from 'react'
import '../../assets/css/venue.css';
import Venue_Image from '../../assets/images/service_venue.jpg';


const dataArray=[
  {id:1,venue_type:'AC',venue_Location:'Coimbatore',venue_address:'K.G Mahal,Babu Road,Trichy-2',venue_price:'12000'},
  {id:1,venue_type:'AC',venue_Location:'Trichy',venue_address:'K.G Mahal,Babu Road,Trichy-2',venue_price:'12000'},
  {id:1,venue_type:'AC',venue_Location:'Trichy',venue_address:'K.G Mahal,Babu Road,Trichy-2',venue_price:'12000'},
  {id:1,venue_type:'AC',venue_Location:'Trichy',venue_address:'K.G Mahal,Babu Road,Trichy-2',venue_price:'12000'},
  {id:1,venue_type:'AC',venue_Location:'Trichy',venue_address:'K.G Mahal,Babu Road,Trichy-2',venue_price:'12000'},
  {id:1,venue_type:'AC',venue_Location:'Trichy',venue_address:'K.G Mahal,Babu Road,Trichy-2',venue_price:'12000'},
  {id:1,venue_type:'AC',venue_Location:'Trichy',venue_address:'K.G Mahal,Babu Road,Trichy-2',venue_price:'12000'}
]

const Venue = () => {
  return (
    <div className='venue_main'>
    {dataArray.map((item)=>(
      <DynamicComponent key={item.id} data={item}/>

    ))}
    
    </div>
  )
}

const DynamicComponent=({data})=>{
  return (
    <div className='venue_box'>
    <img src={Venue_Image}/>
    <p>Venue Type: <div className='su2-type'>{data.venue_type}</div>
    Venue Location:<div className='su2-location'> {data.venue_Location}</div>
    Venue Address: <div className='su2-address'>
     {data.venue_address}
  </div>
  Venue Price: <div className='su2-type'>Rs {data.venue_price}</div>
    </p>
    <button type='submit'>Book</button>
    </div>
  )
}

export default Venue