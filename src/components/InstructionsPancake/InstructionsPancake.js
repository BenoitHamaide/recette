
import RecipeAnother from "../../data/RecipeAnother";

function InstructionPancake () {
  const InstructionsPancake= RecipeAnother;
  return (
    <ul className="ListeEtapes">
{InstructionsPancake.instructions.map((instructions) => (
  <li><div className="trait"> </div>{instructions}</li>
))}
    </ul>
  );
}

export default InstructionPancake;
