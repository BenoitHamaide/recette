import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFount = () => {
  alert('Tu es au mauvais endroit mon coquin !');
  return ( 
   
    <div className='error'> 
      <h1>Page non trouvé 404</h1>
      <NavLink to="/">
        <h3>Retour à l'accueil</h3>
      </NavLink>
    </div>
  );
};

export default NotFount;
