import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>   
<ul>
<NavLink to="/recette-crepes">
  <li>Recette de crepes</li>
</NavLink>
<NavLink to="/recette-pancakes">
  <li>Recette de pancakes</li>
</NavLink>
<NavLink to="/">
  <li>accueil</li>
</NavLink>
</ul>
    </div>
  );
};
export default Navigation;
