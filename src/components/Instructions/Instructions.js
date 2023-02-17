import Recipe from "../../data/Recipe";

function ListeEtape () {
  const Instructions= Recipe;
  return (
    <ul className="ListeEtapes">
{Instructions.instructions.map((instructions) => (
  <li>{instructions}</li>
))}
    </ul>
  );
}

export default ListeEtape;
