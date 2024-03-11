import React from 'react'

const ManageFood = () => {
  return (
    <div className ="food-main">
    <div className = 'add-food'>
    <h1>Add Food</h1>
      <form>
      <label>Food Type</label>
      <input type='text' required></input>
      <label>Food Cuisine</label>
      <input type = 'text' required></input>
      <label>Item1</label>
      <input type = 'text' required></input>
      <label>Item2</label>
      <input type = 'text' required></input>
      <label>Item3</label>
      <input type = 'text' required></input>
      <label>Item4</label>
      <input type = 'text' required></input>
      <label>Item5</label>
      <input type = 'text' required></input>
      <button type="submit">Add Food</button>
      </form>
    </div>
    
    </div>
  )
}

export default ManageFood