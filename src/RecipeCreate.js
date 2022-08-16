import React, { useState } from "react";

function RecipeCreate( {createRecipe} ) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialData = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }
  
  const [formData, setFormData] = useState(initialData)
  
    const updateData = ({target}) => {
    setFormData({
      ...formData, 
      [target.name]: target.value
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    createRecipe(formData)
    setFormData(initialData)
  }
  
  return (
    <form name="create" onSubmit={formSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" onChange={updateData} value={formData.name} placeHolder="Name"/>
            </td>
            
            <td>
              <input name="cuisine" type="text" onChange={updateData} value={formData.cuisine} placeHolder="Cuisine"/>
            </td>
            
            <td>
              <input name="photo" type="url" onChange={updateData} value={formData.photo} placeHolder="url"/>
            </td>
            
            <td>
              <textarea name="ingredients" type="text" onChange={updateData} value={formData.ingredients} placeHolder="Ingredients"/>
            </td>
            
            <td>
              <textarea name="preparation" type="text" onChange={updateData} value={formData.preparation} placeHolder="Preparation"/>
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
