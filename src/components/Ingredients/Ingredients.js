import Recipe from "../../data/Recipe";

function Ingredients () {
  const Ingredients = Recipe;
  return (
    <ul className="Ingredients">
{Ingredients.ingredients.map((ingredient) => (
  <li><span className="orange">{ingredient.quantity}{ingredient.unit}</span>   {ingredient.name}</li>
))}
    </ul>
  );
}

export default Ingredients;
