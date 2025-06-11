import { recipes } from "./data";

function Recipe({name, ingredients}) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </div>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => 
        <Recipe name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />
      )}
      {/* {recipes.map(item =>
        <div key={item.id}>
          <h2>{item.name}</h2>
          <ul>
            {item.ingredients.map(i => 
              <li key={i}>{i}</li>
            )}
          </ul>
        </div>
      )} */}
    </div>
  )
}