import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
<ul>
<NavLink to="/">
  <li>accueil</li>
</NavLink>
<NavLink to="/recette-crepes">
  <li>Recette de crepes</li>
</NavLink>
<NavLink to="/recette-pancakes">
  <li>Recette de pancakes</li>
</NavLink>
</ul>
      </div>
    
    </div>
  );
};

export default Navigation;
