import RecipeAnother from "../../data/RecipeAnother";
import "./Subtitle.scss";

// est exactement équivalent à
// text = props.text
function SubtitlePancake() {
  const Subtitle = RecipeAnother;
  return <h3 className="Subtitle">{Subtitle.author} - {Subtitle.difficulty}</h3>;
}

export default SubtitlePancake;
