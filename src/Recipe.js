import React from "react"

function Recipe({index, recipe, deleteRecipe}) {

    return (
        <tr className="recipe">
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td> <img src={recipe.photo} /> </td>
          <td>{recipe.ingredients}</td>
          <td>{recipe.preparation}</td>
          <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        
        </tr>
    )
}

export default Recipe;