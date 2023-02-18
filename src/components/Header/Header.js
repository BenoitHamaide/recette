
import Title from "../Title/Title"
import Subtitle from '../Subtitle/Subtitle';
import Navigation from "../Navigation";

const Header = () => {

  return (
    <div className="Header">
      <Navigation />
      <Title />
      <Subtitle />
    </div>
  );
};

export default Header;

