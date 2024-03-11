import React from 'react'
import Food_Image from '../../assets/images/service_food.jpg';
import '../../assets/css/food.css';
const dataArray=[
  {id:1,food_type:'Non-Veg',food_cuisine:'North Indian',item1:'Mutton Biriyani',item2:'Butter Naan',item3:'Butter Chicken Masala',item4:'Chicken Tikka',item5:'Gulab Jamun',price_per_head:'200'},
  {id:1,food_type:'Non-Veg',food_cuisine:'North Indian',item1:'Mutton Biriyani',item2:'Butter Naan',item3:'Butter Chicken Masala',item4:'Chicken Tikka',item5:'Gulab Jamun',price_per_head:'200'},
  {id:1,food_type:'Non-Veg',food_cuisine:'North Indian',item1:'Mutton Biriyani',item2:'Butter Naan',item3:'Butter Chicken Masala',item4:'Chicken Tikka',item5:'Gulab Jamun',price_per_head:'200'},
  {id:1,food_type:'Non-Veg',food_cuisine:'North Indian',item1:'Mutton Biriyani',item2:'Butter Naan',item3:'Butter Chicken Masala',item4:'Chicken Tikka',item5:'Gulab Jamun',price_per_head:'200'},
  {id:1,food_type:'Non-Veg',food_cuisine:'North Indian',item1:'Mutton Biriyani',item2:'Butter Naan',item3:'Butter Chicken Masala',item4:'Chicken Tikka',item5:'Gulab Jamun',price_per_head:'200'},
  {id:1,food_type:'Non-Veg',food_cuisine:'North Indian',item1:'Mutton Biriyani',item2:'Butter Naan',item3:'Butter Chicken Masala',item4:'Chicken Tikka',item5:'Gulab Jamun',price_per_head:'200'}
]

const Food = () => {
  return (
    <div className='food_main'>
    {dataArray.map((item)=>(
      <DynamicComponent key={item.id} data={item}/>

    ))}
    
    </div>
  )
}
const DynamicComponent=({data})=>{
  return (
    <div className='food_box'>
    <img src={Food_Image}/>
    <p>Food Type: <div className='su1-type'>{data.food_type}</div>
    Cuisine:<div className='su1-cuisine'> {data.food_cuisine}</div>
    Food Menu: <div className='su1-menu'>
   <ul>
   <li>{data.item1}</li>
   <li>{data.item2}</li>
   <li>{data.item3}</li>
   <li>{data.item4}</li>
   <li>{data.item5}</li>
   </ul>
  </div>
  Price Per Head: <div className='su1-type'>Rs {data.price_per_head}</div>
    </p>
    <button type='submit'>Book</button>
    </div>
  )
}

export default Food