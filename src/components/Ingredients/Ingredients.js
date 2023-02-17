
function Ingredients () {
  const Ingredients = [
    {
      id: 1,
      quantity: 375,
      unit: 'g',
      name: 'de farine tamisée',
    },
    {
      id: 2,
      quantity: 3,
      unit: 'pincées',
      name: 'de sel',
    },
    {
      id: 15,
      quantity: 50,
      unit: 'g',
      name: 'de sucre en poudre',
    },
    {
      id: 28,
      quantity: 6,
      unit: '',
      name: 'oeufs entiers',
    },
    {
      id: 4,
      quantity: 80,
      unit: 'g',
      name: 'de beurre fondu',
    },
    {
      id: 3,
      quantity: 1,
      unit: 'L',
      name: 'de lait',
    },
    {
      id: 845,
      quantity: 3,
      unit: 'cuillerées à soupe',
      name: 'de rhum ambré ou vieux',
    },
  ];
  return (
    <ul className="Ingredients">
{Ingredients.map((ingredient) => (
  <li>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>
))}
    </ul>
  );
}

export default Ingredients;
