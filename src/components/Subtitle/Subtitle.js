import Recipe from "../../data/Recipe";
import "./Subtitle.scss";

// est exactement équivalent à
// text = props.text
function Subtitle() {
  const Subtitle = Recipe;
  return <h3 className="Subtitle">{Subtitle.author} - {Subtitle.difficulty}</h3>;
}

export default Subtitle;
