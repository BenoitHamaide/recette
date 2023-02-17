import Recipe from "../../data/Recipe";

function Ingredients () {
  const Ingredients = Recipe;
  return (
    <ul className="Ingredients">
{Ingredients.ingredients.map((ingredient) => (
  <li>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>
))}
    </ul>
  );
}

export default Ingredients;
