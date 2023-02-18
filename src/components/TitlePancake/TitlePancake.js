import RecipeAnother from "../../data/RecipeAnother";
import "./Title.scss";


function TitlePancake () {
  const Title = RecipeAnother;
  return (
  <h1 className="Title">{Title.title}</h1>
);
}
export default TitlePancake;
