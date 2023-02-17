import "./Header.scss";

import Title from "../Title/Title"
import Subtitle from '../Subtitle/Subtitle';
const Header = () => {
  return (
    <div className="Header">
      <Title text="Crêpes raffinées"/>
      <Subtitle text="John Deuf - Facile"/>
    </div>
  );
};

export default Header;
