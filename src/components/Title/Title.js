import Recipe from "../../data/Recipe";
import "./Title.scss";


function Title () {
  const Title = Recipe;
  return (
  <h1 className="Title">{Title.title}</h1>
);
}
export default Title;
