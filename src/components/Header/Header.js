import "./Header.scss";
import Title from "../Title/Title"
import Subtitle from '../Subtitle/Subtitle';

const Header = () => {

  return (
    <div className="Header">
      <Title />
      <Subtitle />
    </div>
  );
};

export default Header;

