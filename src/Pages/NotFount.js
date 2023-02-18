import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

const NotFount = () => {
  alert('Tu es au mauvais endroit mon coquin !');
  return ( 
   
    <div className='error'> 
    <motion.div animate={{y:100}}transition={{duration:0.5}}>
      <h1>Page non trouvé 404</h1>
      <NavLink to="/">
        <h3>Retour à l'accueil</h3>
      </NavLink>
      </motion.div>
    </div>
  );
};

export default NotFount;
