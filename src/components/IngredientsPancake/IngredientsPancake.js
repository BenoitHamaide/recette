import RecipeAnother from "../../data/RecipeAnother";

function IngredientsPancake () {
  const Ingredients = RecipeAnother;
  return (
    <ul className="Ingredients">
{Ingredients.ingredients.map((ingredient) => (
  <li><span className="orange">{ingredient.quantity}{ingredient.unit}</span>   {ingredient.name}</li>
))}
    </ul>
  );
}

export default IngredientsPancake;
